import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '../Button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility Tests', () => {
  describe('WCAG 2.1 AA Compliance', () => {
    it('should not have any accessibility violations - default button', async () => {
      const { container } = render(<Button>Default Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have any accessibility violations - primary variant', async () => {
      const { container } = render(
        <Button variant="primary">Primary Button</Button>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have any accessibility violations - secondary variant', async () => {
      const { container } = render(
        <Button variant="secondary">Secondary Button</Button>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have any accessibility violations - outline variant', async () => {
      const { container } = render(
        <Button variant="outline">Outline Button</Button>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have any accessibility violations - disabled button', async () => {
      const { container } = render(<Button disabled>Disabled Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have any accessibility violations - different sizes', async () => {
      const { container } = render(
        <div>
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('ARIA Attributes', () => {
    it('should not have accessibility violations with aria-label', async () => {
      const { container } = render(
        <Button aria-label="Close dialog">×</Button>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with aria-describedby', async () => {
      const { container } = render(
        <div>
          <Button aria-describedby="help-text">Submit</Button>
          <div id="help-text">This will submit the form</div>
        </div>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with aria-expanded', async () => {
      const { container } = render(
        <Button aria-expanded="false" aria-haspopup="true">
          Menu
        </Button>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with aria-pressed', async () => {
      const { container } = render(
        <Button aria-pressed="false" role="button">
          Toggle
        </Button>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Form Context', () => {
    it('should not have accessibility violations in form context', async () => {
      const { container } = render(
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
          <Button type="submit">Submit Form</Button>
          <Button type="reset">Reset Form</Button>
        </form>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with fieldset', async () => {
      const { container } = render(
        <form>
          <fieldset>
            <legend>User Preferences</legend>
            <label>
              <input type="checkbox" />
              Email notifications
            </label>
            <Button type="submit">Save Preferences</Button>
          </fieldset>
        </form>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Complex Interactions', () => {
    it('should not have accessibility violations with icon buttons', async () => {
      const { container } = render(
        <div>
          <Button aria-label="Edit item">
            <span aria-hidden="true">✏️</span>
          </Button>
          <Button aria-label="Delete item">
            <span aria-hidden="true">🗑️</span>
          </Button>
        </div>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations in button group', async () => {
      const { container } = render(
        <div role="group" aria-label="Text formatting">
          <Button aria-pressed="false">Bold</Button>
          <Button aria-pressed="false">Italic</Button>
          <Button aria-pressed="true">Underline</Button>
        </div>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with loading state', async () => {
      const { container } = render(
        <Button disabled aria-describedby="loading-text">
          <span aria-hidden="true">⟳</span>
          Loading...
          <span id="loading-text" className="sr-only">
            Please wait while we process your request
          </span>
        </Button>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Color Contrast', () => {
    it('should pass color contrast requirements - primary button', async () => {
      const { container } = render(
        <Button variant="primary">Primary Button</Button>,
      );
      const results = await axe(container, {
        rules: {
          'color-contrast': { enabled: true },
        },
      });
      expect(results).toHaveNoViolations();
    });

    it('should pass color contrast requirements - secondary button', async () => {
      const { container } = render(
        <Button variant="secondary">Secondary Button</Button>,
      );
      const results = await axe(container, {
        rules: {
          'color-contrast': { enabled: true },
        },
      });
      expect(results).toHaveNoViolations();
    });

    it('should pass color contrast requirements - outline button', async () => {
      const { container } = render(
        <Button variant="outline">Outline Button</Button>,
      );
      const results = await axe(container, {
        rules: {
          'color-contrast': { enabled: true },
        },
      });
      expect(results).toHaveNoViolations();
    });
  });

  describe('Focus Management', () => {
    it('should not have accessibility violations with focus styles', async () => {
      const { container } = render(
        <div>
          <Button>First Button</Button>
          <Button>Second Button</Button>
        </div>,
      );
      const results = await axe(container, {
        rules: {
          'focus-order-semantics': { enabled: true },
        },
      });
      expect(results).toHaveNoViolations();
    });
  });
});
