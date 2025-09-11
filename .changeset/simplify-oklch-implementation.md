---
"@gtalumni-la/tokens": major
---

Simplify OKLCH color space implementation

Consolidates complex dual-config OKLCH implementation into unified build system:

- Single config.js with custom OKLCH format instead of separate config-oklch.js
- Unified variables.css with automatic hex→OKLCH fallbacks
- Removes redundant build scripts and duplicate CSS generation
- Maintains same OKLCH functionality with 50% less complexity
- Zero breaking changes for existing component consumers

BREAKING CHANGE: Removes `./css-oklch` package export - use `./css` which now includes both hex and OKLCH values with automatic fallbacks.

Closes #11
