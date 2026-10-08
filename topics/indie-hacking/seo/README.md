# SEO for an indie product

Someone searching for help may first need an answer, then a tool that makes the task easier. SEO, or search engine optimization, helps make that answer understandable and discoverable. [Google's starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) does not guarantee indexing or ranking. The useful starting point is a real question the product can help resolve.

This guide connects one searcher's question with a worked page, its technical discovery path, and customer-outcome measurements. It focuses on unpaid web search; writing, research, engineering, and maintenance still cost time.

## Connect a query with the answer its reader needs

Consider a fictional plant-journal app for someone who forgets which houseplants they watered. It records a plant's name and watering dates so the person can check the last entry. The product, proposed page, measurements, and decisions throughout this example are illustrative, not a published site or ranking experiment.

The person searches “how to keep a plant watering log.” Their **search intent** is the result they want from that query: a practical way to record and retrieve dates. A page about choosing attractive plant pots would share the general subject while missing that task. A useful answer should let them begin keeping the log, even if they do not buy an app.

Different queries can ask for different kinds of help:

| Query to investigate | Likely intent | Useful response |
| --- | --- | --- |
| “how to keep a plant watering log” | Learn a recording method. | Show a small log they can copy. |
| “plant journal app without an account” | Perform the task under an access/privacy preference. | Explain actual setup and data handling, including limits. |
| “plant journal app alternatives” | Compare ways to keep the record. | Compare paper, a note/spreadsheet, and relevant tools fairly. |

The labels are hypotheses. Inspect current results to see what answer types appear and what remains unanswered. Collect phrases from support and conversations, group variants of the same task, and choose a group where the product's maker can contribute useful evidence. Third-party volume and difficulty scores are estimates, not proof of demand or ranking guarantees.

## Write the answer before the product pitch

A worked draft for the first query could contain the following:

> **Proposed page title:** How to keep a plant watering log
>
> Keep one row for each plant and write the date whenever you water it. For example, “Kitchen plant — 6 October” lets you check the last recorded watering without relying on memory. A paper note is enough to start. The record tells you what you did, not whether a plant needs watering now.

| Plant | Last recorded watering |
| --- | --- |
| Kitchen plant | 6 October |
| Bedroom plant | 4 October |

> **Next action:** Copy this two-column log and add your own entry after watering. If you want a searchable history rather than a paper note, explore the app's sample journal and its data-handling explanation.

The title names the task. The opening gives a usable method and result, while the small table makes the record concrete. The next action continues that task instead of asking for signup before giving an answer. The proposed sample-journal link would need an actual working destination before publication; this draft is not evidence that the app or page exists.

[Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) emphasizes useful original content and a satisfying answer. For this page, explain the log's limits and keep any app comparison accurate. Add firsthand product demonstrations only after checking the behavior being claimed, and distinguish those checks from advice based on an example.

## Help the reader and crawler understand the page

The page's title, heading, and internal links should all help someone recognize the watering-log task. Use a readable URL and descriptive link text, with alt text for meaningful images. A meta description can inform a snippet, but Google may use page content instead. [Google starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

Link the log explanation to a real sample, product limits, and the setup guide when those exist. A reader can then choose between the free recording method and the product. Repeating every keyword variation adds little to that choice. [Google's spam policies](https://developers.google.com/search/docs/essentials/spam-policies) address keyword stuffing and scaled content abuse; many lightly varied plant-log pages do not replace one useful answer.

## Check whether the answer can be discovered and accessed

A helpful page still needs a technical path from discovery to reading. Check that this public guide loads successfully, signed-out users can read it, links are crawlable, and mobile users can copy or understand the sample. A sitemap can help discovery without guaranteeing inclusion. [Google starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

Keep the public sample distinct from private user journals. [`robots.txt` controls crawling](https://developers.google.com/search/docs/crawling-indexing/robots/intro); it neither reliably keeps a URL out of results nor protects confidential content. A `noindex` directive must be readable by the crawler to prevent indexing. Private journal access requires authentication, not a crawler rule.

If duplicate URLs show the same guide, choose a canonical URL. Investigate indexing through Search Console rather than assuming that a missing result is a penalty. Changes can take time to appear. [Google starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). Checking page access and indexing status provides more direct evidence about this path than expecting an immediate ranking change.

## Give other people a reason to reference the answer

A relevant community might find the copyable log useful even without trying the app. Share it where such contributions are welcome, keeping the useful method available. Another author can then reference an answer their readers can actually use; a carefully documented comparison or reproducible demonstration can serve the same purpose.

Avoid buying or exchanging links solely to manipulate ranking. Google's [link-spam policy](https://developers.google.com/search/docs/essentials/spam-policies#link-spam) distinguishes appropriately qualified advertising links from ranking manipulation. Relevant readers and useful outcomes matter alongside any link count.

## Separate search visibility from useful product use

Measurement first asks whether the watering-log page appears for relevant questions and attracts clicks. [Search Console's Performance report](https://support.google.com/webmasters/answer/7576553) provides impressions, clicks, position, and query/page breakdowns. An **impression** records a search-result appearance under the report's rules; **click-through rate (CTR)** is clicks divided by impressions. Neither count is a count of distinct product users.

In the example period, 1,500 impressions and 120 clicks give `120 / 1500 = 8%` CTR. That describes search-result interaction, leaving the visitor's task and the product outcome unresolved.

Follow those outcomes in a separately defined user cohort. Suppose the product records 100 deduplicated organic visitors, of whom 16 sign up and four of those signups pay within 14 days of their first visit. All 100 have completed that window. The rates answer different questions:

```text
Visitor → signup = 16 / 100 = 16%
Signup → buyer   =  4 /  16 = 25%
Visitor → buyer  =  4 / 100 =  4%
```

The 16% rate asks how often a visitor begins an account; the 25% rate asks how often a signup becomes a buyer. Both leave **activation**, the first useful result, unmeasured. For this app, define that as saving and retrieving a watering entry. Collecting that action would help distinguish an unfinished first task from a useful tool someone does not want to pay for. [GA4 key events](https://support.google.com/analytics/answer/9267568) can identify important measured actions, but the chosen action still needs to represent the product question.

The 120 clicks and 100 visitors need not match. Repeat clicks, consent, anonymous identities, cross-device visits, and timing create gaps. State the identity rule, channel attribution, and follow-up window before comparing cohorts. Record refunds, contribution, and repeat useful use so that more visibility does not hide disappointing customer outcomes.

The counts narrow an investigation rather than establish its cause. Few relevant impressions prompt a discovery/relevance check. Impressions with few clicks prompt inspection of the result's promise against the query. Visitors without a saved entry prompt checking the answer and first product task. For example, if people can read the log but cannot find where to add a plant, a clearer first-entry path is a plausible test; the CTR alone cannot establish that problem.

## Use an art-channel video within its platform context

Kelsey Rodriguez's [How To Grow An Art Channel Without An Audience — SEO for Artists](https://www.youtube.com/watch?v=fhb5HeWaKxY), published in 2021, discusses YouTube discovery for artists. Its keyword segment at [3:27](https://www.youtube.com/watch?v=fhb5HeWaKxY&t=207s), title segment at [9:25](https://www.youtube.com/watch?v=fhb5HeWaKxY&t=565s), and description segment at [11:56](https://www.youtube.com/watch?v=fhb5HeWaKxY&t=716s) help frame questions about audience language and presentation. These passages were checked using official chapters and automatic captions; transcription may contain errors, and the creator's ranking successes were not independently verified.

The connection to the plant-log page is answering a question people already seek. YouTube thumbnails and video engagement do not replace web crawlability or indexing. [YouTube's search explanation](https://support.google.com/youtube/answer/16090438?hl=en) describes relevance, engagement, and quality; older keyword-heavy advice should not override current website spam guidance.

For the indie product, a useful answer, an accessible technical path, and a first product result form one connected investigation. If a person finds the guide but cannot complete their log, increasing search traffic alone leaves the task unfinished. Evidence about each part helps choose the next change without treating discovery as proof of customer value.

[Back to Indie Hacking](../README.md)

## Sources

- [Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — presentation, discovery, indexing, and timing.
- [Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — original useful answers.
- [Google: Spam policies](https://developers.google.com/search/docs/essentials/spam-policies) — keyword, scaled-content, and link manipulation.
- [Google: Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) — crawling, indexing, and private content.
- [Search Console: Performance report](https://support.google.com/webmasters/answer/7576553) — search measurement.
- [Google Analytics: About key events](https://support.google.com/analytics/answer/9267568) — important measured actions.
- [YouTube: How search works](https://support.google.com/youtube/answer/16090438?hl=en) — platform-specific principles.
- [Kelsey Rodriguez: SEO for Artists](https://www.youtube.com/watch?v=fhb5HeWaKxY), 2021-06-08 — YouTube discovery explanation. Platform sources were checked on 2026-10-07; the plant-journal page and worksheet are original illustrations.
