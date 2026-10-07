# Shared writing principles

## Tone and wording

Write in a calm, direct, approachable voice. Assume the reader is capable but may be unfamiliar with the subject. Replace promotional language, exaggerated importance, and unnecessary formality with concrete behavior and consequences.

Use clear subjects and verbs: state what changes, what causes it, and why it matters. Prefer active voice and name who acted or reported the result when the evidence identifies them; preserve uncertainty when it does not. For example, replace "The retry layer provides robust recovery" with "If a request fails temporarily, the client waits and tries again. The retry limit bounds how long recovery can take."

Keep each paragraph focused on one idea and connect it to the next. Vary sentence length naturally. Remove filler and repeated summaries while retaining the explanation needed to follow the reasoning. Avoid stock openings and conclusions, invented labels, and words such as "delve" or "leverage" when familiar wording works.

Shorten by removing repetition and secondary details before cutting the context that makes an explanation understandable. Use complete sentences for explanations rather than compressed status phrases such as "Approval reported." Labels, table cells, and source metadata can stay brief. Treat word counts as rough planning aids unless the user requests a limit.

Explain the mechanism directly. Use a contrast when it resolves a likely misunderstanding or compares meaningful alternatives; avoid turning every explanation into a warning or a slogan. Use questions to identify what a guide answers or what an experiment investigates, rather than repeatedly asking and immediately answering rhetorical questions.

## Authorial voice and reader context

Preserve personal views and experiences supplied by the user or clearly attributed to the author. An existing first-person sentence alone does not establish that an agent-generated recommendation is the author's actual practice. Do not invent the author's defaults, habits, experience, or policies. Present new recommendations neutrally and distinguish interpretation from sourced findings without prefixing every paragraph with "my proposed" or "I would."

For example, "A useful starting point is one durable home and one discussion channel" offers advice without claiming that it is the author's established practice. First person remains appropriate when the user intentionally supplies that position or asks for a personal voice.

Write for someone arriving directly at the document. Introduce resources by subject, creator, or title, and explain why they matter. Replace task-relative wording such as "the supplied video" or "as requested above" with meaningful descriptions. A project issue can be cited for a local working definition, but the document should explain the definition without requiring the reader to reconstruct the assignment.

## Pacing and terminology

Establish what the document helps the reader understand or do. State assumed knowledge and scope when they affect how to approach it, then reach the first useful idea promptly.

Arrange ideas by dependency. Start with the smallest example that exposes the central mechanism, interpret it, then extend to the larger case. Introduce taxonomies and presentation variants after the reader understands the underlying idea, unless distinguishing those variants is the document's actual question.

Explain unfamiliar terms beside their first meaningful use, then use the technical names consistently. A labeled table cell should not require a beginner to infer the label's meaning from context alone.

A section can introduce an idea, demonstrate it, interpret the result, and connect it to the next idea. Vary section shapes when they explain different ideas; use consistent headings or fields when readers compare or skim multiple cases. Match the depth to the question; secondary procedures and edge cases can be placed later or in separate material when they interrupt the main explanation.

## Headings, tables, and conclusions

Use headings that name a question, mechanism, or reader action. "Trace a setting into the generated output" is more informative than "Advanced concepts." Number sections when they form a learning sequence.

Use prose for reasoning, numbered lists for sequences, bullets for parallel items, and tables for comparisons or mappings. Keep table entries concise. When a table combines several unfamiliar dimensions, teach a representative case first and use the matrix afterward as a reference. Move long explanations into nearby prose or split the comparison into useful parts. Table size alone is not a reason to remove it; complete canvases and detailed reference tables can serve a real purpose.

Use bold for selected terms or observations. End with useful conclusions, unresolved questions, or next steps when they add value. A long lesson may benefit from brief takeaways; a short index rarely needs a ceremonial conclusion.

## Evidence, qualifications, and research notes

Place source links near factual claims when attribution is needed. Use precise source locations and pinned versions for code excerpts where practical. Date changing facts when the date affects their interpretation.

Distinguish a source's report, an example's demonstration, and your inference. Preserve uncertainty and technical meaning during rewrites. Never invent measurements, execution claims, observations, or coverage.

Establish a coherent example's fictional or hypothetical status at its beginning. Reintroduce that status for a separate example or when an excerpt could otherwise be mistaken for a measured result. Repeat a qualification within the same example only when a new claim needs a different boundary. Keep important limitations beside the conclusions they qualify without continually restating that nothing was deployed or validated.

Explain unavailable evidence through its consequence for the reader. "Current compatibility was not verified" conveys a useful limit. Retrieval failures, HTTP codes, temporary files, and the agent's tool choices usually belong in verification or method notes only when they materially affect evidence quality or reproducibility. Preserve required method sections while keeping their contents relevant. Do not remove genuine limits merely to make the writing sound confident.
