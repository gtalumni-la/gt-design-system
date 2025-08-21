# Accessibility Testing Checklist

This comprehensive checklist helps ensure components meet WCAG 2.1 AA standards through manual testing. Use this alongside automated testing tools.

## Pre-Testing Setup

### Required Tools

- [ ] Modern browser (Chrome, Firefox, Safari, Edge)
- [ ] Screen reader software (NVDA, JAWS, VoiceOver, TalkBack)
- [ ] Keyboard for navigation testing
- [ ] Color contrast analyzer tool
- [ ] Browser developer tools

### Testing Environment

- [ ] Test in multiple browsers
- [ ] Test at different zoom levels (100%, 200%, 400%)
- [ ] Test with reduced motion preferences
- [ ] Test with high contrast mode enabled
- [ ] Test in both light and dark themes (if applicable)

## Component Testing Checklist

### Visual and Structural Testing

#### Color and Contrast

- [ ] Text has sufficient contrast against background (4.5:1 for normal, 3:1 for large)
- [ ] Interactive elements maintain contrast in all states (hover, focus, active)
- [ ] Information is not conveyed through color alone
- [ ] Color blind users can distinguish between different states/types
- [ ] Custom focus indicators have sufficient contrast

#### Typography and Layout

- [ ] Text remains readable at 200% zoom without horizontal scrolling
- [ ] Line height and spacing are adequate for readability
- [ ] Text doesn't get cut off or overlap at high zoom levels
- [ ] Content reflows properly at different viewport sizes
- [ ] No horizontal scrolling required at 320px width

#### Visual Indicators

- [ ] Focus indicators are clearly visible and don't get cut off
- [ ] Loading states are visually apparent
- [ ] Error states are clearly indicated
- [ ] Required fields are visually marked
- [ ] State changes (expanded/collapsed, selected/unselected) are clear

### Keyboard Navigation Testing

#### Basic Navigation

- [ ] All interactive elements are reachable via Tab key
- [ ] Tab order follows logical reading order (left-to-right, top-to-bottom)
- [ ] Shift+Tab moves backward through elements correctly
- [ ] No keyboard traps (focus gets stuck)
- [ ] Skip links work and are visible when focused

#### Interaction Testing

- [ ] Enter key activates buttons and links
- [ ] Space bar activates buttons and checkboxes
- [ ] Arrow keys navigate within component groups (tabs, menus, lists)
- [ ] Escape key closes modals, dropdowns, and menus
- [ ] All mouse interactions have keyboard equivalents

#### Focus Management

- [ ] Focus moves logically when content changes
- [ ] Focus returns to trigger element when modals close
- [ ] Focus doesn't get lost when content updates
- [ ] Focus is trapped within modals appropriately
- [ ] Initial focus placement is logical in dynamic content

### Screen Reader Testing

#### Content Structure

- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skipping levels)
- [ ] Lists are properly marked up with ul/ol and li elements
- [ ] Tables have proper headers and captions
- [ ] Form labels are properly associated with inputs
- [ ] Landmarks (main, nav, aside, etc.) are used appropriately

#### ARIA Implementation

- [ ] ARIA labels provide clear, concise descriptions
- [ ] ARIA descriptions add helpful context without being redundant
- [ ] Live regions announce important changes
- [ ] ARIA states (expanded, selected, checked) are accurate
- [ ] Custom components have appropriate ARIA roles

#### Screen Reader Specific Tests

**NVDA/JAWS (Windows):**

- [ ] Navigate by headings (H key)
- [ ] Navigate by landmarks (D key)
- [ ] Navigate by links (K key)
- [ ] Navigate by form elements (F key)
- [ ] Browse mode vs forms mode transitions work correctly

**VoiceOver (macOS/iOS):**

- [ ] Rotor navigation works for all content types
- [ ] Gestures work on touch devices
- [ ] Voice commands function properly
- [ ] Announcements are clear and helpful

**TalkBack (Android):**

- [ ] Explore by touch works correctly
- [ ] Linear navigation is logical
- [ ] Gestures are responsive
- [ ] Reading controls function properly

### Interactive Component Testing

#### Forms

- [ ] All form elements have associated labels
- [ ] Required fields are clearly marked and announced
- [ ] Error messages are announced and associated with fields
- [ ] Fieldsets group related inputs with descriptive legends
- [ ] Form submission feedback is announced
- [ ] Auto-complete suggestions are accessible

#### Buttons and Links

- [ ] Button vs link semantics are used correctly
- [ ] Disabled buttons are properly conveyed to assistive technology
- [ ] Loading buttons announce their state
- [ ] Icon buttons have descriptive labels
- [ ] Link purposes are clear from context or aria-label

#### Interactive Lists and Menus

- [ ] Menu items are properly announced
- [ ] Submenu relationships are clear
- [ ] Current/selected items are announced
- [ ] List navigation shortcuts work (first letter, arrows)
- [ ] Menu state changes are announced

#### Modals and Overlays

- [ ] Focus moves to modal when opened
- [ ] Background content is inert (not focusable)
- [ ] Modal title is announced
- [ ] Escape key closes modal
- [ ] Focus returns to trigger element on close

#### Dynamic Content

- [ ] Content changes are announced appropriately
- [ ] Live regions use correct politeness levels
- [ ] Loading states are announced
- [ ] Error states are announced immediately
- [ ] Success messages are announced

### Mobile Accessibility Testing

#### Touch Targets

- [ ] Interactive elements are at least 44×44px (iOS) or 48×48dp (Android)
- [ ] Adequate spacing between touch targets (8px minimum)
- [ ] Touch targets don't overlap
- [ ] Swipe gestures have alternatives

#### Mobile Screen Readers

- [ ] VoiceOver gestures work correctly (iOS)
- [ ] TalkBack gestures work correctly (Android)
- [ ] Explore by touch provides accurate information
- [ ] Reading order makes sense with gestures

#### Device Orientation

- [ ] Content works in both portrait and landscape
- [ ] No information is lost when rotating device
- [ ] Touch targets remain appropriately sized

### Performance and Motion Testing

#### Reduced Motion

- [ ] Respects prefers-reduced-motion settings
- [ ] Essential animations can be disabled
- [ ] Auto-playing content can be paused
- [ ] Parallax effects are disabled when requested

#### Performance Impact

- [ ] Page remains responsive during animations
- [ ] Screen reader performance isn't degraded
- [ ] Keyboard navigation remains smooth

## Component-Specific Checklists

### Button Component

- [ ] Uses semantic `<button>` element
- [ ] Has descriptive accessible name
- [ ] Disabled state is properly conveyed
- [ ] Loading state is announced
- [ ] Icon buttons have text alternatives
- [ ] Toggle buttons announce pressed state

### Form Components

- [ ] Labels are properly associated
- [ ] Error messages are linked to inputs
- [ ] Required fields are marked
- [ ] Help text is associated with inputs
- [ ] Validation happens at appropriate times
- [ ] Success states are announced

### Navigation Components

- [ ] Current page is identified
- [ ] Breadcrumbs show hierarchy
- [ ] Skip links are available
- [ ] Menu states are announced
- [ ] Keyboard shortcuts are available

### Data Display Components

- [ ] Tables have proper headers
- [ ] Complex data has text alternatives
- [ ] Charts have accessible descriptions
- [ ] Data relationships are clear
- [ ] Sort states are announced

## Testing Documentation

### Test Results Recording

For each component test, document:

#### Basic Information

- [ ] Component name and version
- [ ] Testing date and tester name
- [ ] Browsers and assistive technologies tested
- [ ] Testing environment details

#### Results Summary

- [ ] Overall accessibility compliance level
- [ ] Critical issues found
- [ ] Recommended improvements
- [ ] Retesting requirements

#### Detailed Findings

- [ ] Specific WCAG success criteria failed
- [ ] Steps to reproduce issues
- [ ] Screenshots or recordings of problems
- [ ] Suggested remediation approaches

### Issue Reporting Template

```markdown
## Accessibility Issue Report

**Component:** [Component Name]
**Severity:** [Critical/High/Medium/Low]
**WCAG Criteria:** [e.g., 2.1.1 Keyboard]

### Description

[Clear description of the accessibility issue]

### Steps to Reproduce

1. [Step one]
2. [Step two]
3. [Step three]

### Expected Behavior

[What should happen]

### Actual Behavior

[What actually happens]

### Assistive Technology

- **Screen Reader:** [Name and version]
- **Browser:** [Name and version]
- **Operating System:** [Name and version]

### Screenshots/Videos

[Attach any relevant media]

### Suggested Fix

[Recommended solution if known]
```

## Acceptance Criteria

### Ready for Release Checklist

A component is ready for release when:

- [ ] All automated accessibility tests pass
- [ ] Manual testing checklist is 100% complete
- [ ] No critical accessibility issues remain
- [ ] Screen reader testing passes in at least 2 different screen readers
- [ ] Keyboard navigation testing passes completely
- [ ] Color contrast meets or exceeds WCAG AA standards
- [ ] Documentation includes accessibility features and usage notes
- [ ] Code review includes accessibility specialist approval

### Regression Testing

When updating components:

- [ ] Re-run full accessibility test suite
- [ ] Test with assistive technologies if functionality changed
- [ ] Verify existing accessibility features still work
- [ ] Update documentation for any accessibility changes
- [ ] Consider impact on dependent components

## Resources and Support

### Quick Reference Links

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Screen Reader Testing Guide](https://webaim.org/articles/screenreader_testing/)
- [Accessible Name Computation](https://www.w3.org/TR/accname-1.1/)

### Getting Help

- **Accessibility Team:** accessibility@gtalumni.org
- **Design System Issues:** [GitHub Issues](https://github.com/gtalumni-la/gt-design-system/issues)
- **Community Support:** [GitHub Discussions](https://github.com/gtalumni-la/gt-design-system/discussions)

### Training Resources

- [Screen Reader Basics](https://webaim.org/articles/screenreader_testing/)
- [Keyboard Navigation Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
- [Color Contrast Guidelines](https://webaim.org/articles/contrast/)

Remember: Accessibility testing is an ongoing process, not a one-time check. Regular testing ensures that components remain accessible as they evolve and new features are added.
