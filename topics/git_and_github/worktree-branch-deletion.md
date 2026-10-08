# Deleting a branch checked out in another worktree

Git refuses to delete a branch when any worktree has it checked out:

```text
error: cannot delete branch 'my-branch' used by worktree at '/path/to/worktree'
```

The branch is still serving a checkout. `git branch -D` does not bypass that restriction. Find the checkout before deciding what to remove. See the [branch documentation](https://git-scm.com/docs/git-branch).

## Find and inspect the checkout

Start by locating the checkout named in the error:

```bash
git worktree list
```

**Illustrative output:** the paths and commit IDs below are examples, not output from this repository.

```text
/path/to/repository  a1b2c3d [main]
/path/to/worktree    e4f5a6b [my-branch]
```

The first column gives the directory; the bracketed name tells you which branch it has checked out. The second line connects `my-branch` to `/path/to/worktree`, matching the error. Inspect that directory before releasing the branch:

```bash
git -C /path/to/worktree status --short
git -C /path/to/worktree status --short --ignored
git -C /path/to/worktree log --oneline --decorate -5
```

`-C` runs the command in the selected checkout. The status checks reveal modified, untracked, and ignored files that may need saving. For example, `?? notes.txt` means the file is untracked; deleting the directory would remove it even though no commit contains it. The recent log shows what commits the checkout currently points to. It helps identify work to preserve, but does not establish that all its commits are merged elsewhere.

Save wanted work before proceeding, including files Git ignores. A clean ordinary status does not show whether an ignored local configuration or generated file is disposable.

## Decide whether the checkout should remain

If the directory is no longer useful and everything wanted has been preserved, remove the linked worktree. If you still need its files or want to keep using the checkout, detach it from `my-branch` instead. Both choices release the checked-out branch; neither choice by itself proves its commits are safe to delete.

## Remove an unused worktree, then delete the branch

Run this from a checkout you intend to keep, using the inspected path:

```bash
git worktree remove /path/to/worktree
git branch -d my-branch
```

`remove` deletes the linked checkout's files and administrative entry. The branch is then no longer serving that checkout, so deletion can proceed to the separate merged-commit check. Removal refuses a dirty checkout unless forced and cannot remove the main worktree. If it refuses, revisit the files and worktree type rather than adding `--force` merely to make it succeed. See [worktree removal](https://git-scm.com/docs/git-worktree#Documentation/git-worktree.txt-remove).

`-d` checks whether the branch is merged into its upstream, or into `HEAD` if there is no upstream. If it refuses, review the commits and preserve anything needed before explicitly choosing `git branch -D my-branch`. Force deletion removes the branch reference, so do not treat it as a backup strategy. See [deletion options](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--d).

## Keep the checkout instead

If inspection shows that the checkout should remain, release the branch without removing the directory:

```bash
git -C /path/to/worktree switch --detach
git branch -d my-branch
```

The directory now has a **detached HEAD**: it still points to its current commit but is no longer attached to `my-branch`. Its files remain in place. `git branch -d` can check whether the branch is merged, just as in the removal procedure. Preserve new commits on a named branch before removing the detached checkout later. If switching fails because of local changes, resolve that condition without discarding the changes. [Git's worktree examples](https://git-scm.com/docs/git-worktree#_examples) describe detached checkouts.

If a checkout directory was deleted outside Git, inspect `git worktree prune --dry-run` before pruning stale administrative entries. Pruning is not a substitute for removing a live checkout.

## A disposable reproduction

The following demonstration creates a separate repository in new, unused directories. It recreates the original error with a branch at the same commit as `main`, so there are no unmerged branch commits to complicate the result. A configured Git author identity is required.

```bash
git init --initial-branch=main worktree-demo
git -C worktree-demo commit --allow-empty -m "Initial commit"
git -C worktree-demo worktree add -b my-branch ../worktree-demo-linked
git -C worktree-demo branch -d my-branch
# Expected: refuses because my-branch is checked out.
git -C worktree-demo worktree list
git -C worktree-demo-linked status --short
```

The `worktree add` command makes `my-branch` serve the linked checkout. The deletion attempt is expected to fail because that checkout still uses it. The list and status commands locate the checkout and check its files, reproducing the inspection needed after the original error.

If that disposable checkout is clean and no longer needed, finish the demonstration:

```bash
git -C worktree-demo worktree remove ../worktree-demo-linked
git -C worktree-demo branch -d my-branch
```

Removal releases the branch; deletion is then expected to succeed because the branch has no commits beyond `main`. If the demonstration has acquired files or commits you want, preserve them and reassess the choice before removing anything.

The paths, IDs, and output shown above are illustrative. A separate disposable test repository verified the checked-out restriction for both `-d` and `-D`, discovery with `worktree list`, refusal to remove an untracked file, detachment, refusal to delete an unmerged branch with `-d`, and successful removal followed by deletion after preserving and merging the work.

## Sources

- [Git worktree documentation](https://git-scm.com/docs/git-worktree) — listing, removal, detached checkouts, and pruning.
- [Git branch documentation](https://git-scm.com/docs/git-branch) — checked-out restrictions and safe versus forced deletion.
