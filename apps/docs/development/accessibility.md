# Accessibility

The GT Design System is built with accessibility as a core principle, ensuring that all components and patterns work for users with diverse abilities and assistive technologies.

## Our Commitment

We follow **WCAG 2.1 AA** standards and test with real assistive technologies to ensure inclusive experiences for all Georgia Tech Alumni community members.

## Accessibility Standards

### WCAG 2.1 AA Compliance

All components meet or exceed Web Content Accessibility Guidelines:

- **Perceivable**: Information presented in ways users can perceive
- **Operable**: Interface components and navigation are operable
- **Understandable**: Information and UI operation are understandable
- **Robust**: Content can be interpreted by assistive technologies

### Testing Methods

We use multiple testing approaches:

- **Automated Testing**: axe-core integration in component tests
- **Manual Testing**: Keyboard navigation and screen reader testing
- **User Testing**: Feedback from users with disabilities
- **Expert Review**: Accessibility specialist audits

## Color and Contrast

### Color Contrast Ratios

All color combinations meet WCAG AA requirements:

| Text Color         | Background      | Ratio  | Grade | Use Case         |
| ------------------ | --------------- | ------ | ----- | ---------------- |
| Navy (#003057)     | White (#FFFFFF) | 15.6:1 | AAA   | Body text        |
| Navy (#003057)     | Gold (#B3A369)  | 4.8:1  | AA    | Buttons          |
| White (#FFFFFF)    | Navy (#003057)  | 15.6:1 | AAA   | Dark backgrounds |
| Gray 700 (#495057) | White (#FFFFFF) | 9.7:1  | AAA   | Secondary text   |

### Color Independence

Information is never conveyed through color alone:

```tsx
// Good: Icon + color + text
<Alert type="error">
  <ErrorIcon aria-hidden="true" />
  Error: Please fix the required fields
</Alert>

// Avoid: Color only
<div style={{ color: 'red' }}>Error occurred</div>
```

## Keyboard Navigation

### Navigation Patterns

All interactive elements support keyboard navigation:

- **Tab**: Move forward through interactive elements
- **Shift + Tab**: Move backward through interactive elements
- **Enter/Space**: Activate buttons and links
- **Arrow Keys**: Navigate within component groups
- **Escape**: Close dialogs and menus

### Focus Management

Components provide clear focus indicators:

```css
/* Focus styles for all interactive elements */
.button:focus-visible {
  outline: 2px solid var(--gt-color-primary-gold);
  outline-offset: 2px;
}
```

### Tab Order

Logical tab order follows visual layout and content hierarchy:

1. Primary navigation
2. Main content actions
3. Content links
4. Secondary actions
5. Footer links

## Screen Reader Support

### Semantic HTML

Components use appropriate semantic elements:

```tsx
// Button component uses proper button element
<button type="button" aria-pressed={isActive}>
  {children}
</button>

// Not a div styled as button
<div onClick={handleClick} role="button">
  {children}
</div>
```

### ARIA Labels and Descriptions

Components include comprehensive ARIA support:

```tsx
// Descriptive labels for screen readers
<Button
  aria-label="Save changes to user profile"
  aria-describedby="save-help-text"
>
  Save
</Button>
<div id="save-help-text" className="sr-only">
  This will update your profile information
</div>
```

### Live Regions

Dynamic content changes are announced:

```tsx
// Status updates announced to screen readers
<div role="status" aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

## Component-Specific Guidelines

### Button

**Accessibility Features:**

- Semantic `button` element
- Clear focus indicators
- Disabled state properly conveyed
- Loading state announcements

```tsx
<Button
  disabled={isLoading}
  aria-describedby={isLoading ? 'loading-message' : undefined}
>
  {isLoading ? 'Saving...' : 'Save'}
</Button>
```

### Form Components (Future)

**Planned Features:**

- Associated labels and error messages
- Required field indicators
- Input validation feedback
- Fieldset grouping for related inputs

### Navigation Components (Future)

**Planned Features:**

- Skip links for main content
- Breadcrumb navigation
- Current page indicators
- Hierarchical menu structure

## Testing Guidelines

### Automated Testing

Include accessibility tests in your component tests:

```typescript
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('Button has no accessibility violations', async () => {
  const { container } = render(<Button>Test Button</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### Manual Testing Checklist

Test components with these methods:

#### Keyboard Testing

- [ ] All interactive elements reachable via Tab
- [ ] Focus indicators clearly visible
- [ ] Logical tab order
- [ ] All functionality available via keyboard
- [ ] Escape key closes modals/dropdowns

#### Screen Reader Testing

- [ ] Content structure makes sense when read aloud
- [ ] Interactive elements properly labeled
- [ ] State changes announced
- [ ] Form validation errors clearly communicated
- [ ] Tables and lists properly structured

#### Visual Testing

- [ ] Text remains readable at 200% zoom
- [ ] No information conveyed by color alone
- [ ] Sufficient color contrast maintained
- [ ] Focus indicators don't get cut off
- [ ] Content reflows properly at different sizes

### Assistive Technology Testing

Test with real assistive technologies:

**Screen Readers:**

- **NVDA** (Windows, free)
- **JAWS** (Windows, commercial)
- **VoiceOver** (macOS/iOS, built-in)
- **TalkBack** (Android, built-in)

**Voice Control:**

- **Dragon NaturallySpeaking** (Windows)
- **Voice Control** (macOS)
- **Voice Access** (Android)

## Implementation Patterns

### Skip Links

Provide skip links for keyboard navigation:

```tsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

### Screen Reader Only Content

Include content for screen readers:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Error Handling

Provide clear error communication:

```tsx
<div role="alert" aria-live="assertive">
  <h2>Form Submission Error</h2>
  <p>Please correct the following errors:</p>
  <ul>
    {errors.map((error) => (
      <li key={error.field}>
        <a href={`#${error.field}`}>{error.message}</a>
      </li>
    ))}
  </ul>
</div>
```

## Mobile Accessibility

### Touch Targets

Ensure adequate touch target sizes:

- **Minimum Size**: 44px × 44px (iOS) / 48dp × 48dp (Android)
- **Recommended Size**: 48px × 48px minimum
- **Spacing**: At least 8px between touch targets

### Gesture Support

Support multiple interaction methods:

```tsx
// Support both touch and mouse events
<Button onPointerDown={handlePress} onKeyDown={handleKeyPress}>
  Interactive Element
</Button>
```

## Content Guidelines

### Writing for Accessibility

**Use Clear Language:**

- Write in plain language
- Use active voice
- Keep sentences concise
- Define technical terms

**Structure Content:**

- Use proper heading hierarchy (h1 → h2 → h3)
- Include descriptive link text
- Provide context for form fields
- Use lists for grouped information

### Alternative Text

Provide meaningful alt text for images:

```tsx
// Decorative images
<img src="decoration.jpg" alt="" />

// Informative images
<img
  src="chart.jpg"
  alt="Sales increased 25% from Q1 to Q2"
/>

// Functional images (icons)
<img
  src="edit-icon.svg"
  alt="Edit profile"
/>
```

## Resources and Tools

### Development Tools

**Browser Extensions:**

- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility testing
- [WAVE](https://wave.webaim.org/extension/) - Web accessibility evaluation
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance and accessibility audits

**Design Tools:**

- [Stark](https://www.getstark.co/) - Color contrast checking
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) - Desktop contrast tool

### Learning Resources

**Guidelines and Standards:**

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/) - Web accessibility resources
- [A11Y Project](https://www.a11yproject.com/) - Community-driven accessibility resources

**Testing Resources:**

- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [GOV.UK Accessibility Testing](https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility)

## Getting Help

### Accessibility Support

- 📧 **Email**: accessibility@gtalumni.org
- 🐛 **Issues**: [Report accessibility bugs](https://github.com/gtalumni-la/gt-design-system/issues/new?template=accessibility.md)
- 💬 **Discussions**: [Community support](https://github.com/gtalumni-la/gt-design-system/discussions)

### Reporting Issues

When reporting accessibility issues, include:

1. **Component/page affected**
2. **Assistive technology used** (if applicable)
3. **Expected behavior**
4. **Actual behavior**
5. **Steps to reproduce**
6. **Screenshots or screen recordings**

### Expert Review

For complex implementations, we offer expert accessibility reviews:

- Design system integration consultation
- Component accessibility audits
- User testing coordination
- WCAG compliance verification

Our commitment to accessibility ensures that the GT Design System creates inclusive experiences for all members of the Georgia Tech Alumni community.
