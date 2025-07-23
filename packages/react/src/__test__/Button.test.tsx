import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Button } from '../Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders button with text', () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole('button', { name: /click me/i }),
      ).toBeInTheDocument();
    });

    it('renders button with custom className', () => {
      render(<Button className="custom-class">Test</Button>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders with data-testid', () => {
      render(<Button data-testid="test-button">Test</Button>);
      expect(screen.getByTestId('test-button')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: 'rgb(179, 163, 105)' }); // Tech Gold
    });

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: 'rgb(0, 48, 87)' }); // Tech Navy
    });

    it('renders outline variant', () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        border: '2px solid rgb(179, 163, 105)', // Tech Gold
      });
    });
  });

  describe('Sizes', () => {
    it('renders medium size by default', () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        padding: '0.75rem 1rem',
        fontSize: '1rem',
      });
    });

    it('renders small size', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
      });
    });

    it('renders large size', () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        padding: '1rem 1.5rem',
        fontSize: '1.125rem',
      });
    });
  });

  describe('Button Types', () => {
    it('renders as button type by default', () => {
      render(<Button>Default</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('renders as submit type when specified', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('renders as reset type when specified', () => {
      render(<Button type="reset">Reset</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
  });

  describe('Disabled State', () => {
    it('renders disabled button', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('applies disabled styles', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ cursor: 'not-allowed' });
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>,
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Clickable</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick with mouse event', () => {
      const handleClick = vi.fn();

      render(<Button onClick={handleClick}>Clickable</Button>);

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
      expect(handleClick.mock.calls[0][0].type).toBe('click');
    });

    it('supports keyboard interaction (Enter)', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Keyboard</Button>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('supports keyboard interaction (Space)', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Keyboard</Button>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has proper button role', () => {
      render(<Button>Accessible</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      render(<Button aria-label="Save document">Save</Button>);
      expect(screen.getByLabelText('Save document')).toBeInTheDocument();
    });

    it('supports aria-describedby', () => {
      render(
        <div>
          <Button aria-describedby="help-text">Action</Button>
          <div id="help-text">This performs an action</div>
        </div>,
      );
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-describedby',
        'help-text',
      );
    });

    it('is focusable', () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('is not focusable when disabled', () => {
      render(<Button disabled>Not Focusable</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).not.toHaveFocus();
    });
  });

  describe('Form Integration', () => {
    it('submits form when type is submit', () => {
      const handleSubmit = vi.fn((e) => e.preventDefault());

      render(
        <form onSubmit={handleSubmit}>
          <Button type="submit">Submit Form</Button>
        </form>,
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('resets form when type is reset', () => {
      render(
        <form>
          <input defaultValue="test" />
          <Button type="reset">Reset Form</Button>
        </form>,
      );

      const input = screen.getByRole('textbox');
      const resetButton = screen.getByRole('button');

      fireEvent.change(input, { target: { value: 'changed' } });
      expect(input).toHaveValue('changed');

      fireEvent.click(resetButton);
      expect(input).toHaveValue('test');
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined onClick gracefully', () => {
      render(<Button>No onClick</Button>);
      expect(() => {
        fireEvent.click(screen.getByRole('button'));
      }).not.toThrow();
    });

    it('handles empty children', () => {
      render(<Button></Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles complex children', () => {
      render(
        <Button>
          <span>Icon</span>
          <span>Text</span>
        </Button>,
      );
      expect(screen.getByRole('button')).toHaveTextContent('IconText');
    });
  });

  describe('Style Combinations', () => {
    it('combines variant and size styles correctly', () => {
      render(
        <Button variant="secondary" size="lg">
          Large Secondary
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        backgroundColor: 'rgb(0, 48, 87)', // Secondary variant
        padding: '1rem 1.5rem', // Large size
        fontSize: '1.125rem', // Large font
      });
    });

    it('maintains styles with custom className', () => {
      render(
        <Button className="custom" variant="outline">
          Styled
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom');
      expect(button).toHaveStyle({ border: '2px solid rgb(179, 163, 105)' });
    });
  });
});
