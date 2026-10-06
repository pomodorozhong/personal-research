# Word-of-mouth marketing for indie products

Word of mouth happens when someone tells another person about a product or experience. It includes private conversations, recommendations in communities, shared results, and negative warnings. A referral program is one designed mechanism; an unsolicited recommendation does not need a tracked link.

The useful question for a small product is: what can a satisfied user confidently tell a specific person, and what useful result can that person obtain afterward? The operating suggestions below are my application of source research and examples, not a promise of viral growth.

## What makes something worth passing on?

[Berger and Milkman's research](https://jonahberger.com/wp-content/uploads/2013/02/ViralityB.pdf) examines sharing of *New York Times* articles and experimental emotional responses. Practical usefulness, interest, and surprise are associated with greater sharing; the emotional findings depend on arousal as well as positive or negative tone. This is evidence about content transmission, not a measured conversion model for indie software.

My product interpretation is to make the recommendation useful to its recipient. The sender should be able to explain the problem, the outcome, and why this person would care:

| Reason to recommend | Indie-product illustration | What has to remain credible |
| --- | --- | --- |
| Help someone solve a problem | “This utility fixed the date column I could not import.” | The recipient can reproduce that result on supported inputs. |
| Share a pleasing result | A designer shares an exported comparison image. | The result is useful even if nobody clicks the attribution. |
| Tell an entertaining story | An unexpected feature or crossover has a compact premise. | The real experience does not contradict the story. |
| Improve a shared workflow | A collaborator receives a useful review link. | The recipient can participate without unnecessary setup. |

A plain reliable tool may earn recommendations without a spectacular launch video. Conversely, something can be widely discussed without earning satisfied customers. [Berger's “Viral 2.0”](https://jonahberger.com/viral-2-0/) emphasizes the connection between sharing and business value rather than treating views as sufficient success. Its historic numeric claims are not reused here as current platform statistics.

## Encourage sharing after delivering value

My default is to offer an optional, contextual action after a successful result. For example, a user who has exported a useful report might see “Copy a link to this sample workflow.” The link should explain the product without exposing the user's private data.

Keep declining easy. Let the user choose recipients and inspect what will be sent. A request to recommend the tool should not interrupt an unfinished task, require importing contacts, or make access depend on promoting it. If using rewards, explain both sides' benefit, eligibility, and when the reward is earned.

[Dropbox's referral documentation](https://help.dropbox.com/storage-space/earn-space-referring-friends) illustrates a reward tied to the product: eligible users can earn storage by referring a new user. It also describes qualification steps and status tracking, rather than rewarding a link click alone. The exact plan limits can change; the lesson here is aligning the benefit with product use, not copying Dropbox's current amounts or assuming its outcomes transfer to another product.

Ask for an honest recommendation, not a prescribed positive review. Keep rewards separate from claims that feedback is independent. Monitor duplicate or self-referrals, cancellation patterns, reward costs, and support effort before expanding a program.

## Case: IKEA × Skyrim

[Mother's firsthand campaign post](https://www.linkedin.com/posts/mother_introducing-kallax-storageborn-ikeas-solution-activity-7503785908534706176-iK7U) describes KALLAX Storageborn as a free *Skyrim* Creation: a shelf becomes a storage companion, voiced by Matt Berry. The [supplied r/gaming thread](https://www.reddit.com/r/gaming/comments/1wbq721/ikea_launches_official_the_elder_scrolls_v_skyrim/) contains reactions to that premise and voice casting.

**My interpretation:** three elements make the story easy to repeat. The familiar game supplies a recognizable inventory frustration; the furniture brand supplies an apt storage solution; the talking shelf makes the combination surprising. The playable artifact gives the story something concrete to point to. Someone can enjoy retelling the premise without installing the mod.

That does not establish the ratio of people exposed to the campaign versus actual players, or an effect on furniture sales. Selected enthusiastic comments are not a representative audience sample, and celebrity casting or brand scale may make the campaign difficult for an indie developer to reproduce. I did not install the mod or evaluate its quality. The transferable hypothesis is to connect a memorable story to a real useful experience, not to buy a celebrity or guarantee virality.

The package-first development question is covered separately in [issue #136](https://github.com/pomodorozhong/rabbit-holes/issues/136). The public campaign does not prove the team's internal design chronology.

## Measure the whole recommendation path

My suggested measurement separates each stage and uses the same eligible cohort and time window. **Original hypothetical example:**

| Stage | Count | Rate and denominator |
| --- | ---: | --- |
| Satisfied customers offered an optional referral | 200 | Eligible cohort. |
| Customers who send at least one invitation | 60 | `60 / 200 = 30%`. |
| Unique delivered invitations | 120 | `120 / 60 = 2` per sender. |
| New users accepting an invitation | 30 | `30 / 120 = 25%`. |
| Accepted users reaching the first useful result | 18 | `18 / 30 = 60%`. |
| Activated users paying | 9 | `9 / 18 = 50%`. |
| Those buyers retained at the defined follow-up | 6 | `6 / 9 ≈ 66.7%`. |

The signup multiplier is `0.30 × 2 × 0.25 = 0.15` new signups per eligible customer. The retained-buyer yield is `6 / 200 = 0.03`, a different quantity. Neither number establishes a self-sustaining growth loop. Repeat referral opportunities, customer departures, generation timing, and how often recipients are genuinely new all matter.

Track contribution after discounts, rewards, refunds, and service costs. A referral channel that brings cheap signups but few useful results is not necessarily efficient. Compare referral cohorts with other acquisition cohorts cautiously: people invited by friends may already be more interested, so observational differences are not proof of a reward's causal effect.

Use an optional “How did you hear about this?” question alongside disclosed link tracking. Private messages, offline conversations, and cross-device paths are incompletely observed. Missing attribution should stay unknown, not be silently assigned to the last visible channel.

## A small first experiment

My proposed first test is to choose one successful product moment, ask a few existing users who they would naturally recommend it to and why, and provide an optional share artifact. Observe the recipient's first task before adding incentives. Record declined sharing and expectation mismatches as useful findings.

If recipients cannot obtain the promised result, fix that experience first. Word of mouth can amplify a disappointment as readily as a useful tool; the product and support must carry the story after the recommendation.

[Back to Indie Hacking](../README.md)

## Sources

- [Berger & Milkman: What Makes Online Content Viral?](https://jonahberger.com/wp-content/uploads/2013/02/ViralityB.pdf) — research on content sharing; journal publication 2012, author-hosted manuscript.
- [Jonah Berger: Viral 2.0](https://jonahberger.com/viral-2-0/) — sharing connected to brand/business value.
- [Dropbox: How to refer friends](https://help.dropbox.com/storage-space/earn-space-referring-friends) — product-aligned reward and qualification example; checked 2026-10-07.
- [Mother: Introducing KALLAX Storageborn](https://www.linkedin.com/posts/mother_introducing-kallax-storageborn-ikeas-solution-activity-7503785908534706176-iK7U) — firsthand campaign premise.
- [r/gaming: IKEA × Skyrim discussion](https://www.reddit.com/r/gaming/comments/1wbq721/ikea_launches_official_the_elder_scrolls_v_skyrim/) — selected reactions from the issue's reference. All numerical examples and operating suggestions are original illustrations, not observed campaign results.
