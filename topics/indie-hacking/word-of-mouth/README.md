# Word-of-mouth marketing for indie products

A useful recommendation connects someone's experience with another person's problem. Word of mouth includes those recommendations, private conversations, community discussion, and negative warnings. A referral program is one designed route; an unsolicited recommendation does not require a tracked link.

For a small product, the important path is what happens after someone passes its name along. This guide follows a recipient into a useful result, then separates sharing, signup, use, payment, and continued usefulness.

## Follow a recommendation to its recipient's result

Consider a fictional shared grocery-list app. Mina and her housemate keep buying duplicate items because their separate lists do not reflect what the other person bought. With the app, both see the same list and can mark an item bought. Mina tells a friend in another household: “This helped us stop buying milk twice. Here is a sample list you can try with your housemate.” The product, sample, counts, and proposed tests throughout the example are illustrative.

The friend opens a sample containing milk, apples, and coffee, then creates a list for their own household. Their housemate marks milk bought, and they see the update before shopping. That shared usable list is **activation** here: the first useful product result. Reading the message or creating an account alone would leave the coordination problem unresolved.

The recommendation is useful because Mina identifies a familiar problem, explains the outcome, and gives this particular person a way to try it. A plain reliable utility can earn this kind of recommendation without a spectacular launch.

[Berger and Milkman's research](https://jonahberger.com/wp-content/uploads/2013/02/ViralityB.pdf) examines *New York Times* article sharing and experimental emotional responses. Practical usefulness, interest, and surprise are associated with sharing; the emotional findings depend on arousal as well as tone. It supports questions about why a story travels, not a measured conversion model for indie software. The product still has to deliver what the recipient expects.

| Reason to recommend | Example | What must remain credible |
| --- | --- | --- |
| Solve a recognizable problem | A friend avoids duplicate grocery purchases. | Their household can reproduce the useful result. |
| Share a pleasing result | A designer shares a useful comparison image. | The output helps even without clicking attribution. |
| Tell an entertaining story | An unexpected crossover has a compact premise. | The experience does not contradict it. |
| Improve a shared workflow | A household member receives a list invitation. | Joining does not require unnecessary setup. |

These are different reasons to share, but attention is not the final business outcome. [Berger's “Viral 2.0”](https://jonahberger.com/viral-2-0/) connects sharing with business value rather than treating views as sufficient success. A widely discussed product can still have few satisfied users.

## Make sharing optional after value is delivered

After Mina's household successfully uses a list, an optional “Share a sample with a friend” action can help explain the workflow without exposing their real groceries or household notes. Let Mina choose the recipient and inspect the message. Declining should be easy, and the request should not block an unfinished task or require importing contacts.

Rewards need their own explanation: who qualifies, what each person receives, and when it is earned. [Dropbox's referral documentation](https://help.dropbox.com/storage-space/earn-space-referring-friends) illustrates a product-related reward, storage, with qualification steps and status tracking. Its limits can change; the useful relationship is between the benefit and product use, rather than a reason to copy current amounts or assume similar outcomes.

Ask for an honest recommendation rather than a prescribed positive review. Distinguish rewarded sharing from independent feedback, and monitor duplicate/self-referrals, cancellations, reward costs, and support work before expanding an incentive. More messages can be an expensive route to the same unresolved recipient problem.

## Measure sharing, trying, and continued usefulness separately

The first measurement asks whether satisfied customers pass the product along. For the grocery-app worksheet, 200 paying customers have used a shared list and indicated that it helped. They are offered the optional sample-sharing action and each gets a seven-day sharing window. Sixty send qualifying invitations to 120 distinct new recipients, averaging two per sender. Existing users, self-referrals, and duplicate recipients are excluded; each qualifying invitation is assigned to one sender.

The next question concerns recipients. Thirty of the 120 invited people create an account: `30 / 120 = 25%`. This says how often a delivered invitation leads to signup. It leaves usefulness unresolved, so follow those people into a list they can use with their household.

Give each recipient 14 days from their invitation for signup, activation, and payment, counted in that order. Eighteen of the 30 signed-up people activate, and nine of those 18 pay. Later, six of the nine buyers use a shared list again during days 30–44 after their own payment. Every sender and recipient has completed their relevant windows, including all nine buyers' repeat-use window.

| Measurement | Count | Calculation |
| --- | ---: | --- |
| Eligible satisfied customers | 200 | Defined customer group, not all visitors. |
| Customers sending a qualifying invitation | 60 | `60 / 200 = 30%`. |
| Distinct delivered invitations | 120 | `120 / 60 = 2` per sender. |
| New recipients signing up | 30 | `30 / 120 = 25%`. |
| Signed-up recipients reaching a useful shared list | 18 | `18 / 30 = 60%`. |
| Activated recipients paying | 9 | `9 / 18 = 50%`. |
| Those buyers repeating useful use | 6 | `6 / 9 ≈ 66.7%`. |

Customers and invitations are different units: one customer can send two invitations, so invitation counts need not shrink like a people-only funnel. The **signup multiplier** here means new signups per eligible customer: `0.30 × 2 × 0.25 = 0.15`, equivalent to `30 / 200`. The retained-buyer yield is `6 / 200 = 0.03`. The first describes account acquisition; the second follows payment into repeat usefulness. Neither establishes self-sustaining growth, since departures, repeat opportunities, generation timing, and genuinely new recipients also matter.

Track contribution after discounts, rewards, refunds, and service costs. Compare acquisition routes carefully: invited people may already have the problem and trust the sender, so an observational difference does not prove an incentive caused it. Optional “How did you hear about this?” feedback can complement disclosed link tracking; private conversations and cross-device paths leave gaps that should remain unknown.

## Examine a story someone can share without trying it

IKEA's KALLAX Storageborn provides another sharing mechanism. *Skyrim* is a fantasy game with equipment and other items to carry. A **mod**, or add-on, extends the playable game. In this campaign, a KALLAX shelf becomes a storage companion voiced by Matt Berry. [Mother's firsthand post](https://www.linkedin.com/posts/mother_introducing-kallax-storageborn-ikeas-solution-activity-7503785908534706176-iK7U) describes the free Creation and the storage premise.

The story is compact: a furniture brand supplies a talking shelf to help with a game's inventory problem. The apt storage connection and unexpected character make it easy to retell. The playable add-on gives that premise something concrete to point to, while a person can still enjoy the story without installing it.

The [r/gaming discussion of IKEA's Skyrim add-on](https://www.reddit.com/r/gaming/comments/1wbq721/ikea_launches_official_the_elder_scrolls_v_skyrim/) includes reactions to the premise and voice casting. Those selected comments are not a representative audience sample. They do not establish installation rates, furniture sales, or the ratio of exposure to use. Gameplay quality was not tested here, and celebrity casting and brand scale may make the campaign difficult for an indie developer to reproduce.

The useful hypothesis is to connect a memorable story with a real experience the recipient can obtain. The package/implementation relationship is explored separately in [issue #136](https://github.com/pomodorozhong/rabbit-holes/issues/136); this public campaign does not reveal the team's internal design chronology.

## Test the recipient's task before increasing invitations

For the grocery app, a concrete first share artifact could be a public sample headed “One list for your household,” containing milk, six apples, and coffee. It should explain that it is a sample, contain no personal customer data, and offer a path to making a private household list.

Ask a few existing users who might find it useful, then invite willing recipients to create a disposable list, add bread, and have a housemate mark milk bought. Observe whether both see the change. If recipients read the sample but cannot find how to invite a housemate, the next test should clarify that step rather than offer a larger referral reward. If they complete the task but do not need shared shopping, investigate recipient fit. These are proposed findings and decisions, not measured growth.

Sharing, recipient use, and repeat value therefore constrain each other. An appealing invitation brings attention to a workflow; an unfinished workflow leaves the recommendation unfulfilled. Improving that result gives both the next recipient and the original sender a better reason to keep recommending the product.

[Back to Indie Hacking](../README.md)

## Sources

- [Berger & Milkman: What Makes Online Content Viral?](https://jonahberger.com/wp-content/uploads/2013/02/ViralityB.pdf) — content-sharing research, journal publication 2012, author-hosted manuscript.
- [Jonah Berger: Viral 2.0](https://jonahberger.com/viral-2-0/) — sharing connected to business value.
- [Dropbox: How to refer friends](https://help.dropbox.com/storage-space/earn-space-referring-friends) — product-related reward and qualification, checked 2026-10-07.
- [Mother: Introducing KALLAX Storageborn](https://www.linkedin.com/posts/mother_introducing-kallax-storageborn-ikeas-solution-activity-7503785908534706176-iK7U) — firsthand campaign premise.
- [r/gaming: IKEA × Skyrim discussion](https://www.reddit.com/r/gaming/comments/1wbq721/ikea_launches_official_the_elder_scrolls_v_skyrim/) — selected audience reactions. The grocery-app worksheet and test are original illustrations, not campaign outcomes.
