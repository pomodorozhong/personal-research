# SEO for an indie product

SEO helps people find a useful answer and decide whether a product can help them. [Google's starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) frames it around making content understandable to search engines and useful to searchers, with no guarantee of indexing or ranking. For an indie developer, I would start with a small set of real customer problems rather than a large publishing quota.

This guide focuses on unpaid web-search discovery. Search distribution still costs writing, research, engineering, and maintenance time. It does not promise an immediate substitute for other acquisition channels.

## Start with the task behind the query

**Original fictional example:** a local CSV-cleaning utility helps freelancers preview and repair date formats before importing a file. Search intent determines which page to write:

| Example query | Likely intent to investigate | Useful page and next step |
| --- | --- | --- |
| “why are CSV dates imported incorrectly” | Understand a problem. | A diagnosis with sample inputs, causes, and ways to fix them; offer a disposable sample workflow. |
| “convert CSV date format without uploading” | Complete a task under a privacy constraint. | A real walkthrough, supported formats, and a clearly explained local-processing path. |
| “CSV cleaner desktop alternatives” | Compare options. | A fair comparison including manual editing and competing approaches; explain the product's limits. |

These intent labels are hypotheses. Inspect the current results for a query: what type of answer appears, what the user still lacks, and whether your product actually belongs in that task. Search volume alone cannot answer those questions.

My lightweight keyword research process is to collect phrases from support and interviews, group variants by the same task, inspect a few result pages, and choose one group where I can contribute firsthand evidence. Start with specific phrases that match the product instead of pursuing a broad term such as “productivity.” Treat third-party volume or difficulty scores as estimates, not demand measurements or ranking guarantees.

## Write an answer worth maintaining

For the CSV example, I would include a small original input, the ambiguous values, the corrected output, and a reproducible manual method before presenting the utility. The product should make a demonstrated task easier; it should not be the only way to access the answer.

[Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) emphasizes useful original content and a satisfying answer. A practical application is to show what was tested, who the instructions are for, what can fail, and when the advice was last checked. An honest comparison should not invent defects in competing products.

An example page outline:

1. Explain why `03/04/2026` is ambiguous and ask which convention the source uses.
2. Show the source format and the destination's required format using fictional data.
3. Walk through one manual conversion without losing the original file.
4. Demonstrate the utility on the same data, including unresolved cells.
5. State supported encodings, delimiters, and formats based on actual tests.
6. Offer a relevant next action: try the sample, inspect the product, or read its limits.

This is a proposed outline, not a claim that the utility or those tests exist.

## Make the page understandable

Use a descriptive title, a clear main heading, a readable URL, and links that explain their destination. Keep the important answer visible in the page, with images near the relevant explanation and descriptive alt text. Write a concise meta description, while recognizing that Google may generate the search snippet from page content. Internal links should connect the diagnosis, walkthrough, comparison, and product documentation. [Google starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

Avoid repeating every keyword variant in the title and paragraphs. [Google's spam policies](https://developers.google.com/search/docs/essentials/spam-policies) address keyword stuffing, scaled content abuse, and manipulative links. Publishing many lightly varied pages does not substitute for a useful answer.

## Check the technical path

My first checks on a public page would be: it loads successfully, a signed-out visitor can read the answer, important navigation uses crawlable links, and the mobile layout permits the task. Then inspect what the crawler sees and whether the intended URL is eligible for indexing. A sitemap can help discovery, but does not guarantee inclusion. [Google starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

Be precise about access controls. [`robots.txt` controls crawling](https://developers.google.com/search/docs/crawling-indexing/robots/intro); it does not reliably keep a URL out of results or protect confidential content. `noindex` needs to be visible to the crawler to prevent indexing. Sensitive user files need authentication, not just a crawler directive. Do not create public search pages from uploaded customer data.

If several URLs display the same answer, choose a preferred canonical URL and handle obsolete URLs thoughtfully. Use Search Console's inspection tools to investigate indexing problems instead of assuming that absence from a search results page means a penalty. Google reports that changes can take time to appear, so immediate ranking changes are not a reliable acceptance test. [Google starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## Earn relevant links

My proposed approach is to publish something another author would want to reference: a reproducible diagnosis, a useful template, or a carefully documented comparison. Share it with a relevant community where that contribution is welcome. A contextual recommendation can help readers even before any search effect is established.

Avoid buying links or trading links solely to manipulate ranking. Google's [link-spam policy](https://developers.google.com/search/docs/essentials/spam-policies#link-spam) distinguishes legitimate advertising with appropriately qualified links from ranking manipulation. A link count is not a substitute for qualified readers and useful outcomes.

## Measure discovery separately from customer value

[Search Console's Performance report](https://support.google.com/webmasters/answer/7576553) provides clicks, impressions, CTR, and position, with query/page breakdowns. Use it to find which questions and pages are actually visible. Its click counts are not unique product users and should not be treated as the denominator for a user-level trial funnel.

For product outcomes, define a first useful action, signup, and payment in the product's own data or appropriately disclosed analytics. [GA4 calls important measured actions key events](https://support.google.com/analytics/answer/9267568); it does not determine which action constitutes success for your product.

**Original hypothetical example for one reporting period:** Search Console records 1,500 impressions and 120 clicks, yielding `120 / 1500 = 8%` search CTR. A separately measured, deduplicated cohort of 100 organic visitors contains 16 signups and four eventual buyers within a chosen follow-up window:

```text
Visitor → signup = 16 / 100 = 16%
Signup → buyer   =  4 /  16 = 25%
Visitor → buyer  =  4 / 100 =  4%
```

Those visitor and click totals need not match. Consent settings, repeat clicks, cross-device use, and delayed purchases can create gaps. State identity, channel assignment, and follow-up rules before comparing periods. Record refunds, contribution, and repeat use so that more traffic does not conceal low-value customers.

My diagnosis would distinguish: few impressions suggests a discovery/relevance question; impressions without clicks suggests a result-to-query mismatch; clicks without useful use suggests an answer or product-fit question. Each is a hypothesis to investigate, not a definitive cause inferred from one ratio.

## What the supplied art-channel video contributes

Kelsey Rodriguez's [2021 video](https://www.youtube.com/watch?v=fhb5HeWaKxY) concerns YouTube search discovery for artists. Its keyword-research segment at [3:27](https://www.youtube.com/watch?v=fhb5HeWaKxY&t=207s), title segment at [9:25](https://www.youtube.com/watch?v=fhb5HeWaKxY&t=565s), and description segment at [11:56](https://www.youtube.com/watch?v=fhb5HeWaKxY&t=716s) provide a starting point for thinking about questions and presentation. Its creator-reported ranking successes are not independently verified here.

The transferable idea is to answer a question people already seek. YouTube thumbnails and video engagement are not direct substitutes for website titles, crawlability, and indexing. [YouTube's current search explanation](https://support.google.com/youtube/answer/16090438?hl=en) describes relevance, engagement, and quality; keyword-heavy advice from an older creator video should not override current web-search spam guidance.

Official metadata, chapters, and English automatic captions were retrieved on 2026-10-07. No search-ranking experiment or live product analytics property was tested. The suggested workflow and numbers are illustrations, not measured traffic or guaranteed outcomes.

[Back to Indie Hacking](../README.md)

## Sources

- [Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — search basics, page presentation, links, discovery, and timing.
- [Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — original and useful answers.
- [Google: Spam policies](https://developers.google.com/search/docs/essentials/spam-policies) — keyword, scaled-content, and link manipulation.
- [Google: Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) — crawling versus indexing and confidential content.
- [Search Console: Performance report](https://support.google.com/webmasters/answer/7576553) — search measurement.
- [Google Analytics: About key events](https://support.google.com/analytics/answer/9267568) — business-outcome events.
- [YouTube: How search works](https://support.google.com/youtube/answer/16090438?hl=en) — platform-specific search principles.
- [Kelsey Rodriguez: How To Grow An Art Channel Without An Audience — SEO for Artists](https://www.youtube.com/watch?v=fhb5HeWaKxY), 2021-06-08 — the issue's reference video. Platform sources checked 2026-10-07.
