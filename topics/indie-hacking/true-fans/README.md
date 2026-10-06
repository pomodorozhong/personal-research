# 1,000 True Fans for indie software

Kevin Kelly's [1,000 True Fans](https://kk.org/thetechnium/1000-true-fans/) describes a creator earning a living through a relatively small group of committed supporters. A true fan buys the creator's work consistently, rather than merely following an account. In the updated essay, the illustrative calculation is 1,000 supporters contributing $100 of annual profit each, with a direct customer relationship. The number is adjustable, not a guaranteed outcome.

The same page also preserves the 2008 version. That older version starts from $100 of spending per fan and subtracts expenses afterward; the updated version explicitly frames the $100 as profit. For software planning, the distinction matters: 1,000 people paying $100 is $100,000 of gross revenue, not automatically $100,000 available to the founder. [Source](https://kk.org/thetechnium/1000-true-fans/).

## Translate the idea into a software business

My interpretation is to look for a specific group whose recurring problem the product solves well enough to keep earning their business. A customer may renew because a tool is useful without becoming a fan of its maker. That can still support a good business; a useful retention measure is more actionable than assigning people a fandom label.

Separate these populations:

| Population | What it establishes | What remains unknown |
| --- | --- | --- |
| Followers or subscribers to free content | Some ongoing attention. | Willingness to pay and whether the product solves their problem. |
| Trial users | Willingness to try the workflow. | Activation, payment, and continued usefulness. |
| Paying customers | At least one purchase. | Renewal and the cost of serving them. |
| Retained, satisfied customers | Continued use and purchases over observed periods. | Future retention and whether support scales. |

Do not assume that all followers are potential buyers, or that every buyer will purchase the next product. A narrow professional tool can be valuable even if its maker has a small public audience.

## Work through the economics

**Original illustration:** a solo maker wants $60,000 per year available for personal needs, plus $12,000 for fixed business costs and reserves. The required annual contribution is $72,000. These are hypothetical USD figures, not actual product prices or a tax calculation.

```text
Contribution per customer = annual collected revenue − variable service costs
Required customer-years  = ceiling(72,000 / contribution per customer)
```

| Annual collected revenue per customer | Annual variable cost | Annual contribution | Full-year customers needed |
| ---: | ---: | ---: | ---: |
| $48 | $12 | $36 | 2,000 |
| $120 | $36 | $84 | 858 |
| $240 | $96 | $144 | 500 |

Variable costs here include assumed processing, platform, and usage-dependent service costs. Fixed costs are already in the $72,000 target, so do not subtract them a second time. Actual taxes, benefits, refunds, acquisition costs, and support expenses need their own treatment; include each once, in the appropriate part of your budget.

The middle row yields `858 × $84 = $72,072`. That narrow margin does not cover a surprise expense. A higher price helps only if the product can retain enough customers at that price; it can also attract higher service expectations.

“Full-year customers” means a year of contribution each. Acquiring 858 people on the last day of the year does not produce the same year's contribution as serving them for twelve months. For staggered signups or churn, calculate customer-months and cash timing instead of multiplying an end-of-year count by an annual price.

## Retention and support can change the answer

**Additional hypothetical checks:**

- At 80% annual customer retention, a mature base of 1,000 loses 200 customers across a year. It needs 200 replacements to end at the same count. The timing of cancellations and replacements affects earned revenue.
- Fifteen minutes of support per customer per month would mean 250 hours for 1,000 customers. If only 20% need that support each month, it becomes 50 hours. Neither workload is visible in a revenue-only calculation.
- If one large buyer provides half the income, customer count disguises concentration risk. Track contribution by customer as well as the total.

Software also differs from a creator releasing new works. A subscription involves continuing obligations; a one-time purchase may require maintenance long after payment. For a paid desktop utility, model new sales and paid upgrades separately from support of earlier versions. For hosted software, measure usage costs and renewals by cohort. Do not borrow subscription math for lifetime licenses.

## A practical way to use the idea

My proposed experiment is to recruit a small group with the same problem, observe their first successful result, offer a clear price, and revisit their use after several weeks. Record why people stay and why they leave. If the product earns payment but requires substantial custom work for each buyer, improve the shared workflow before multiplying the customer target.

Maintain a direct, permission-based relationship through support and product updates. Listen for repeated problems rather than promising every requested feature. A small audience is easier to understand, but still requires deliberate acquisition and service; the arithmetic does not prove that this audience exists.

Use 1,000 True Fans as a reminder to connect customer value with sustainable economics. Replace its headline number with a contribution target, a plausible acquisition path, and observed retention.

[Back to Indie Hacking](../README.md)

## Sources

- [Kevin Kelly: 1,000 True Fans](https://kk.org/thetechnium/1000-true-fans/) — the updated essay and preserved 2008 original, checked 2026-10-07. The software examples, tables, and proposed experiment are this guide's own analysis rather than Kelly's business projections.
