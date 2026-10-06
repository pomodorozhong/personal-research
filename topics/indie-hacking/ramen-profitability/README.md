# Ramen profitability: buying time to build

Ramen profitability means that a business can cover its founders' basic living costs. Paul Graham's [2009 essay](https://www.paulgraham.com/ramenprofitable.html) treats this as a way to gain time and bargaining room, rather than proof that a startup has reached its final business model. It can reduce the pressure to raise funding immediately; it does not require a permanent decision against investment.

For an indie software product, I would turn the phrase into a recurring cash target. A revenue screenshot alone cannot tell me whether the product can keep its founder working.

## Calculate a usable target

**Illustration — original planning example, not a tax or accounting rule.** Use one currency throughout. The numbers below are hypothetical USD per month, with an explicitly chosen reserve rather than a jurisdiction-specific tax estimate.

| Item | Amount | Treatment in this example |
| --- | ---: | --- |
| Essential personal spending | $2,000 | Housing, food, transport, and other necessities. |
| Fixed business expenses | $300 | Hosting baseline, tools, and recurring administration. |
| Reserve contribution | $200 | Chosen allowance for irregular costs; not an actual tax calculation. |
| Total monthly cash requirement | $2,500 | Sum of the three rows. |

Suppose each paying customer produces $10 of collected monthly revenue after refunds, and $2 goes to payment/platform costs and usage-dependent hosting. The cash contribution per customer is $8.

```text
Required customers = ceiling(monthly cash requirement / contribution per customer)
                   = ceiling(2,500 / 8)
                   = 313

At 313 customers:
Collected revenue  = 313 × 10 = $3,130
Variable costs     = 313 ×  2 =   $626
Cash contribution  =             $2,504
Headroom           = 2,504 − 2,500 = $4
```

This is a threshold, not a comfortable operating position. Four dollars of headroom disappears with a single cancellation. Add a separately chosen safety margin or cash buffer before relying on this as a stable livelihood.

Keep personal withdrawals, business costs, and reserves visible rather than calling the whole $2,504 “profit.” For an actual decision, substitute your own obligations and get appropriate accounting advice for tax, benefits, and legal structure. This worksheet does not determine statutory profit or tax liability.

## Test the fragile assumptions

**Sensitivity analysis for the same hypothetical product:**

| Contribution per customer | Customers needed for $2,500 |
| ---: | ---: |
| $10 | 250 |
| $8 | 313 |
| $6 | 417 |
| $4 | 625 |

If heavy users increase variable costs until contribution reaches $6, the original 313-customer target is insufficient. Pricing and usage limits therefore belong in the calculation, not just customer acquisition.

At a hypothetical 4% monthly customer churn, a base of 313 customers loses about 12.52 customers per month in expectation. Plan for roughly 13 replacements just to maintain that base; this is not 13 customers of growth. Use actual cohort data when available, and distinguish failed payments, voluntary cancellation, and refunds.

Annual prepayments create another trap. Receiving $120 today does not give permission to spend it all this month if twelve months of service and support remain. In this simplified budget, allocate it across its service period and keep a separate cash calendar for obligations and refunds. Neither a single launch spike nor an average that conceals several weak months proves recurring coverage.

## Decide what the milestone should buy

Graham warns that consulting can become a distraction from a scalable product. His desired destination is a high-growth startup. A deliberately small indie business can choose a different destination, but should still label the income accurately: client work funding development is different from a product funding itself. [Source](https://www.paulgraham.com/ramenprofitable.html).

My proposed decision rules:

- Track product contribution separately from consulting income, savings, and one-off sales.
- Review coverage over several billing periods, alongside the minimum cash balance and customer concentration.
- Give survival work a time budget. A custom feature for one buyer can pay this month's bills while consuming next month's development time.
- Define a sustainable next target: ordinary living costs, leave, replacements, and maintenance. Basic survival should not require indefinite overwork.
- Keep the option to grow, remain small, seek funding, or stop. Crossing the threshold makes that choice less urgent; it does not make every option equally sensible.

## A monthly review

Record the cash requirement, recurring collected revenue, variable costs, cancellations, replacement customers, support hours, and lowest projected cash balance. Then ask: if the largest customer left and usage costs increased, how long could I keep building? Choose the next action from that answer—reduce a cost, change an offer, improve retention, or pursue qualified buyers.

The purpose of the number is to protect useful working time. It should not encourage hiding expenses or treating an unsustainable lifestyle as a successful product.

[Back to Indie Hacking](../README.md)

## Sources

- [Paul Graham: Ramen Profitable](https://www.paulgraham.com/ramenprofitable.html), July 2009 — definition, financing implications, and the consulting trade-off. The worksheet, numerical assumptions, and review rules above are this guide's own application to indie software, not figures from the essay.
