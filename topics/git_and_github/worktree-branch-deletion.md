# Deleting a branch checked out in another worktree

Git refuses to delete a branch when any worktree has it checked out:

```text
error: cannot delete branch 'my-branch' used by worktree at '/path/to/worktree'
```

The branch is still serving a checkout. `git branch -D` does not bypass that restriction. Find the checkout before deciding what to remove. See the [branch documentation](https://git-scm.com/docs/git-branch).

## Find and inspect the checkout

Run these from the repository, replacing the example path and branch with those in the error:

```bash
git worktree list
git -C /path/to/worktree status --short
git -C /path/to/worktree log --oneline --decorate -5
```

**Illustration:** a line ending in `[my-branch]` identifies the checkout using that branch. Save wanted changes and files before proceeding. A clean status does not prove that ignored files are disposable; inspect them too, with `git -C /path/to/worktree status --short --ignored`.

## Remove an unused worktree, then delete the branch

```bash
git worktree remove /path/to/worktree
git branch -d my-branch
```

`remove` deletes the linked checkout's files and administrative entry. It refuses a dirty checkout unless forced; do not add `--force` merely to make the command succeed. It cannot remove the main worktree. Run it from a checkout you intend to keep. See [worktree removal](https://git-scm.com/docs/git-worktree#Documentation/git-worktree.txt-remove).

`-d` checks whether the branch is merged into its upstream, or into `HEAD` if there is no upstream. If it refuses, review the commits and preserve anything needed before explicitly choosing `git branch -D my-branch`. Force deletion removes the branch reference, so do not treat it as a backup strategy. See [deletion options](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--d).

## Keep the checkout instead

If the files or checkout are still useful, release the branch without removing the directory:

```bash
git -C /path/to/worktree switch --detach
git branch -d my-branch
```

The detached checkout retains its current commit. Preserve new commits on a named branch before removing that checkout later. If switching fails because of local changes, resolve that condition without discarding the changes. [Git's worktree examples](https://git-scm.com/docs/git-worktree#_examples) describe detached checkouts.

If a checkout directory was deleted outside Git, inspect `git worktree prune --dry-run` before pruning stale administrative entries. Pruning is not a substitute for removing a live checkout.

## A disposable reproduction

These commands create a separate repository in a new, unused directory; they do not operate on this repository. A configured Git author identity is required.

```bash
git init --initial-branch=main worktree-demo
git -C worktree-demo commit --allow-empty -m "Initial commit"
git -C worktree-demo worktree add -b my-branch ../worktree-demo-linked
git -C worktree-demo branch -d my-branch
# Expected: refuses because my-branch is checked out.
git -C worktree-demo worktree list
git -C worktree-demo-linked status --short
git -C worktree-demo worktree remove ../worktree-demo-linked
git -C worktree-demo branch -d my-branch
# Expected: removes the linked checkout, then deletes the merged branch.
```

Keep the demonstration directories if they contain anything you want to save.

## Sources

- [Git worktree documentation](https://git-scm.com/docs/git-worktree) — listing, removal, detached checkouts, and pruning.
- [Git branch documentation](https://git-scm.com/docs/git-branch) — checked-out restrictions and safe versus forced deletion.
