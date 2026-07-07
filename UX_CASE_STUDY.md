# Primer — Design Process & UX Decisions

This document records the specific design decisions, trade-offs, and iterative refinements made during development. The [README](./README.md) covers *what* the product does. This covers *why* it works the way it does.

---

## 1. The Core Design Tension

Primer serves two contradictory needs simultaneously:

```
EXPLORATION ◄──────────────────────────────► PRECISION

Scrub sliders,                              Exact OKLCH coordinates,
shuffle colors,                             decimal letter-spacing,
feel the palette                            deterministic token values
```

Every control was designed to serve both. The resolution:

| Need | Solution | Interaction |
|---|---|---|
| Fluid exploration | Range sliders with gradient tracks | Drag |
| Precise adjustment | Editable numeric input field | Type a value |
| Fine-grained nudge | Caret ▲▼ increment/decrement buttons | Click |
| Quick reset | Double-click slider → default value | Double-click |

These four interaction modes coexist on every single slider — color channels, effects, and typography controls all share the same component.

---

## 2. Spatial Architecture: Workshop vs. Canvas

```
┌──────────────┬────────────────────────────────────────────┐
│              │                                            │
│   SIDEBAR    │              CANVAS                        │
│  (Workshop)  │             (Preview)                      │
│              │                                            │
│  ┌────────┐  │  ┌──────────────────────────────────────┐  │
│  │ Inputs │  │  │                                      │  │
│  ├────────┤  │  │     Real-time visualization          │  │
│  │Sliders │  │  │     of all sidebar decisions         │  │
│  ├────────┤  │  │                                      │  │
│  │Palette │  │  │     Color wheel, swatches,           │  │
│  ├────────┤  │  │     token grids, or live             │  │
│  │Effects │  │  │     mockup templates                 │  │
│  ├────────┤  │  │                                      │  │
│  │ Tools  │  │  │                                      │  │
│  ├────────┤  │  └──────────────────────────────────────┘  │
│  │ Export │  │                                            │
│  └────────┘  │                                            │
│              │                                            │
│  scrollable  │              fixed viewport                │
│              │                                            │
└──────────────┴────────────────────────────────────────────┘
```

**Why this split matters:** The sidebar scrolls. The canvas does not. This means the preview is *always visible* while adjustments are made — the designer never scrolls past their output.

Within the sidebar, controls are further split into **Color** and **Typography** tabs. This prevents the panel from becoming a wall of sliders. A designer working on type shouldn't be distracted by palette controls.

---

## 3. Slider Unification

### Problem
Three separate slider implementations existed:

| Component | Original Style | Issues |
|---|---|---|
| Color space sliders | Gradient-painted tracks, custom thumb | Reference implementation |
| Effect knobs | Different height, no numeric input | Felt disconnected |
| Typography sliders | Yet another style, static labels | Inconsistent with color section |

The visual inconsistency made the tool feel like three products stitched together.

### Solution
All slider types were migrated to a single CSS definition (`slider.css`) sharing:
- Track height and border-radius
- Thumb dimensions and hover states
- Label typography and positioning
- The editable input + caret button group

### The `.plain-slider` Modifier
Color space sliders generate their own gradient backgrounds (hue slider → rainbow, saturation slider → grey-to-vivid). Effects and typography sliders have no inherent color meaning. Without visual definition, their tracks would be invisible.

```css
/* Color sliders: track gets a dynamic gradient inline */
.slider input[type='range']::-webkit-slider-runnable-track { ... }

/* Plain sliders: track gets a visible outline */
.slider.plain-slider input[type='range']::-webkit-slider-runnable-track {
  background: var(--track-bg);
  border: 1px solid var(--btn-border);
}
```

One class. Same layout. Different track treatment.

---

## 4. Data Density — The Color Formats Grid

### Problem
The base color in all eight formats was displayed in a full-width `repeat(3, 1fr)` grid. Long strings like `oklch(0.7 0.15 240.5)` overflowed. The stretched layout felt disconnected from the color name above it.

### Solution

```
BEFORE                              AFTER
┌────────────┬────────────┬─────┐   ┌──────────┬──────────┬──────────┐
│ OKLCH ···  │ LCH ·····  │ OKL │   │📋 OKLCH  │📋 LCH   │📋 OKLAB  │
│    (stretc │hed across  │ ful │   │0.7 0.15  │70 38 240 │0.7 -0.05 │
│    l width │, overflow) │     │   ├──────────┼──────────┼──────────┤
└────────────┴────────────┴─────┘   │📋 LAB    │📋 P3     │📋 HSL    │
                                    │70 -12    │0.32 0.55 │220 80%   │
                                    ├──────────┼──────────┼──────────┤
                                    │📋 RGB    │📋 HEX    │          │
                                    │31% 53%   │#3a86ff   │          │
                                    └──────────┴──────────┘
```

Key CSS change: `grid-template-columns: repeat(3, max-content)` with `justify-content: start`. The grid collapses to the left, packs tightly, and the reduced font size (`0.55rem`) reads as a data readout, not a display element.

All formats now have a uniform copy icon (the previous scissor icon only appeared on some rows, creating visual inconsistency).

---

## 5. Effects Panel — Toggle vs. Dropdown

### Problem

| Dropdown approach | Toggle approach |
|---|---|
| ✗ Hides current state | ✓ State always visible |
| ✗ Extra click before every adjustment | ✓ One click to expand |
| ✗ No indicator when effects are active | ✓ Green dot when any value > 0 |

### Solution
Toggle switch with an inline expanding panel. A small `●` dot appears next to "Effects" when any effect value is non-zero, communicating state at a glance without opening anything.

---

## 6. Layout Stability

### Problem
When effects were toggled, a `has-effects` CSS class added padding and background changes to the wrapper. This pushed all content below it downward. Continuous slider adjustment caused a "breathing" effect — the entire sidebar pulsed with every value change.

### Solution
Removed all dynamic wrapper styling. Container dimensions are stable regardless of state. The only visual change is the expansion/collapse of the slider panel itself.

**Rule applied:** Controls should never cause layout shifts in unrelated parts of the interface.

---

## 7. Export Action Grouping

### Problem
```
BEFORE                          AFTER
┌─────────────────────────┐     ┌────────┬────────┬────────┐
│ Export                   │     │  PNG   │  CSS   │  Copy  │
│ ┌────┬────┬────┬────┐   │     ├────────┼────────┼────────┤
│ │ 🖼️ │ 📄 │ 📋 │ 🔗 │   │     │  Link  │Shuffle │  Help  │
│ └────┴────┴────┴────┘   │     └────────┴────────┴────────┘
├─────────────────────────┤
│ Options (orphaned)      │     ← All six actions in one
│ ┌────┬────┐             │        3×2 grid. No orphans.
│ │ 🔀 │ ❓ │             │
│ └────┴────┘             │
└─────────────────────────┘
```

Shuffle and Help were visually orphaned in a separate section. Merging all six actions into `grid-template-columns: repeat(3, 1fr)` creates a clean, complete action palette.

---

## 8. Typography Integration

### Why typography lives alongside color
Color and typography are the two pillars of visual identity. Evaluating them separately leads to mismatched decisions — a typeface that looks elegant in isolation can become illegible against a high-chroma background.

By placing both in the same sidebar and rendering both in the same mockup canvas, the designer evaluates the **combined** result of every decision.

### Font picker performance

| Challenge | Solution |
|---|---|
| 1,500+ fonts in a dropdown | Virtualized list — only ~8 DOM nodes at any time |
| Finding a specific font | Text search + category filter pills (Sans, Serif, Display, Script, Mono) |
| Previewing before selecting | Each row renders in its own typeface, loaded on demand |
| Slow network loading | Fonts cached after first load; only weight 400 loaded for preview |

---

## 9. Color History Grid

### Problem
The 240-cell color history grid (24 columns × 10 rows) was rendered at a fixed `height: 60px`. At that scale, individual cells were ~2.5px tall — impossible to distinguish colors or click accurately.

### Solution
Changed from fixed height to `aspect-ratio: 24/10` with `min-height: 200px`. The grid now scales proportionally to its container width, and cells are large enough to see and click. Gap increased from `1px` to `2px` for clearer cell boundaries.

---

## 10. Display Capabilities Bar

The sidebar footer serves a dual purpose:

```
DEFAULT STATE:
┌────────────────────────────────────────────┐
│  🖥 p3     👁 45%     ◐ HDR               │
└────────────────────────────────────────────┘

AFTER COPY ACTION (3 seconds):
┌────────────────────────────────────────────┐
│  ☑ Color copied                            │
└────────────────────────────────────────────┘
```

**Ambient information:** Gamut, spectrum coverage, and dynamic range provide context when working with wide-gamut spaces where generated colors may exceed what the monitor renders.

**Toast surface:** Feedback messages replace the display info temporarily, keeping notifications spatially close to the sidebar where all actions originate. No separate toast container needed.
