# TTRPG Trends Analysis

Objective statistics on tabletop role-playing game (TTRPG) player preferences, market indicators, and crowdfunding trends — collected from public industry reports and visualized in Jupyter.

## Data sources

All datasets live in `data/` with provenance tracked in `data/sources.csv`. Primary sources:

| Source | What it covers |
|--------|----------------|
| [Skalchemist 2025 RPG Crowdfunding Report](https://skalchemist.cloud/mediawiki/index.php/2025_Year_End_RPG-related_Crowdfunding_Report) | Yearly RPG crowdfunding totals (2013–2025), platform share, non-5E system popularity |
| [Kickstarter 2024 Games Report](https://updates.kickstarter.com/kickstarter-biggest-platform-for-games/) | Tabletop games funding, success rates, top campaigns |
| [TTRPG Spider Nov 2025 Retrospective](https://ttrpg-spider.blogspot.com/2025/12/november-2025-ttrpg-crowdfunding.html) | Year-over-year November crowdfunding (Kickstarter, Backerkit, D&D 5E, AI-assisted) |
| [RPG Drop Market Analysis 2024](https://www.rpgdrop.com/worldwide-ttrpg-market-in-2024-industry-analysis/) | Global market size, player counts, ICv2 hobby-store rankings |
| [WotC 2024 presentation (via TechRaptor)](https://techraptor.net/tabletop/news/wizards-of-coast-vp-reveals-dungeons-dragons-2024-sales-and-digital-usage) | D&D Beyond engagement metrics |

## Setup (uv)

```bash
cd researches/ttrpg-trends
uv sync
uv run jupyter notebook analysis/ttrpg_trends.ipynb
```

Or execute headlessly:

```bash
uv run jupyter nbconvert --to notebook --execute analysis/ttrpg_trends.ipynb
```

## Datasets

| File | Description |
|------|-------------|
| `kickstarter_rpg_crowdfunding_yearly.csv` | All-platform RPG crowdfunding by year |
| `kickstarter_tabletop_games_2024.csv` | Kickstarter tabletop games category metrics (2024) |
| `kickstarter_success_rate_yearly.csv` | Tabletop success rate trend (2022–2024) |
| `kickstarter_top_ttrpg_2024.csv` | Top-funded TTRPG Kickstarter campaigns (2024) |
| `crowdfunding_platform_share_2025.csv` | Kickstarter vs Backerkit vs GameOnTabletop share |
| `crowdfunding_non5e_systems_2025.csv` | Most-funded non-D&D 5E systems on crowdfunding |
| `crowdfunding_november_yoy.csv` | November YoY crowdfunding comparison |
| `market_indicators.csv` | Global market and player-base indicators |
| `player_engagement_wotc_2024.csv` | Official D&D / D&D Beyond engagement stats |
| `hobby_store_rpg_rankings.csv` | ICv2 hobby-channel RPG line rank order |
