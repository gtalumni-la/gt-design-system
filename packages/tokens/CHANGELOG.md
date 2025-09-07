# @gtalumni-la/tokens

## 0.3.0

### Minor Changes

- d08c5d1: Update typography tokens to match official GT brand guidelines
  - Change secondary font family from Source Sans Pro to Roboto per GT brand guidelines
  - Update font fallbacks with modern system fonts for better cross-platform support
  - Improve comments to reference GT brand guidelines and font family relationships
  - All button components now use Roboto for body text as intended by GT branding

  This change aligns the design system with official Georgia Tech typography standards while maintaining backward compatibility.

## 0.2.0

### Minor Changes

- 1f96dcc: Flatten design token architecture by removing unnecessary reference namespace
  - Remove `reference` namespace from tier 1 primitive tokens
  - Update all system token references to use flattened structure
  - Maintain 3-tier architecture: Primitive → System → Component
  - All 123 token references validate successfully
  - Improve readability with simpler token paths like `{color.gt-gold-500}` instead of `{reference.color.gt-gold-500}`
  - No breaking changes to existing functionality
