import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

/**
 * Cross-browser accessibility tests for Storybook components
 * Tests all stories against WCAG 2.1 AA standards
 */

test.describe('Storybook Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Storybook iframe with all stories
    await page.goto('/iframe.html');
  });

  test('Button - Default story has no accessibility violations', async ({
    page,
  }) => {
    // Navigate to specific story
    await page.goto('/iframe.html?path=/story/components-button--default');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Button - Primary variant has no accessibility violations', async ({
    page,
  }) => {
    await page.goto('/iframe.html?path=/story/components-button--primary');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Button - Secondary variant has no accessibility violations', async ({
    page,
  }) => {
    await page.goto('/iframe.html?path=/story/components-button--secondary');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Button - Outline variant has no accessibility violations', async ({
    page,
  }) => {
    await page.goto('/iframe.html?path=/story/components-button--outline');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Button - Disabled state has no accessibility violations', async ({
    page,
  }) => {
    await page.goto('/iframe.html?path=/story/components-button--disabled');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Button - Different sizes have no accessibility violations', async ({
    page,
  }) => {
    const sizes = ['small', 'medium', 'large'];

    for (const size of sizes) {
      await page.goto(`/iframe.html?path=/story/components-button--${size}`);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    }
  });

  test('Button - Focus management and keyboard accessibility', async ({
    page,
  }) => {
    await page.goto('/iframe.html?path=/story/components-button--default');

    // Test keyboard navigation
    await page.keyboard.press('Tab');
    const focusedElement = await page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Test enter key activation
    await page.keyboard.press('Enter');

    // Run accessibility scan specifically for keyboard navigation
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'keyboard'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Color contrast compliance across all button variants', async ({
    page,
  }) => {
    const variants = ['default', 'primary', 'secondary', 'outline'];

    for (const variant of variants) {
      await page.goto(`/iframe.html?path=/story/components-button--${variant}`);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2aa', 'color-contrast'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    }
  });

  test('Mobile accessibility compliance', async ({ page, browserName }) => {
    // Only run mobile-specific tests on mobile browsers
    test.skip(
      browserName !== 'Mobile Chrome' && browserName !== 'Mobile Safari',
      'Mobile test',
    );

    await page.goto('/iframe.html?path=/story/components-button--default');

    // Test touch target size and mobile accessibility
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('High contrast mode compatibility', async ({ page }) => {
    // Simulate high contrast mode
    await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
    await page.goto('/iframe.html?path=/story/components-button--default');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Reduced motion preferences', async ({ page }) => {
    // Test with reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/iframe.html?path=/story/components-button--default');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
