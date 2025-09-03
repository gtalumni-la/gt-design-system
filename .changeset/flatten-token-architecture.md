---
"@gtalumni-la/tokens": minor
---

Flatten design token architecture by removing unnecessary reference namespace

- Remove `reference` namespace from tier 1 primitive tokens
- Update all system token references to use flattened structure
- Maintain 3-tier architecture: Primitive → System → Component
- All 123 token references validate successfully
- Improve readability with simpler token paths like `{color.gt-gold-500}` instead of `{reference.color.gt-gold-500}`
- No breaking changes to existing functionality