# Doppler Semitone Speed

How fast must a sound source move for a listener to hear a **one-semitone** pitch shift (Doppler effect)?

## Quick answer

At room temperature (~20 °C, speed of sound ≈ 343 m/s):

| Direction | Speed for ±1 semitone | Everyday comparison |
|-----------|----------------------|---------------------|
| Approaching | ~19.3 m/s (~69 km/h) | city driving / e-bike sprint |
| Receding | ~20.4 m/s (~73 km/h) | similar |

## Run the notebook

```bash
cd researches/doppler_semitone
uv sync
uv run jupyter notebook doppler_semitone.ipynb
```

Or execute all cells headlessly:

```bash
uv run jupyter nbconvert --to notebook --execute doppler_semitone.ipynb --inplace
```

## Physics (stationary observer, moving source)

\[
f' = f \cdot \frac{v}{v \mp v_s}
\]

A semitone is the frequency ratio \( r = 2^{1/12} \approx 1.0595 \). Solving for source speed \( v_s \) gives different values for approach vs. recession because the Doppler map is asymmetric.
