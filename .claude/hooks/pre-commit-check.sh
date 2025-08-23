#!/bin/bash

# GT Design System Pre-commit Quality Check
# This hook runs before git commits to ensure code quality

echo "🔍 Running GT Design System quality checks..."

# Run linting
echo "📋 Running ESLint..."
if ! pnpm lint; then
    echo "❌ Linting failed. Please fix linting errors before committing."
    exit 1
fi

# Run type checking
echo "🔤 Running TypeScript type check..."
if ! pnpm type-check; then
    echo "❌ Type checking failed. Please fix type errors before committing."
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
if ! pnpm test; then
    echo "❌ Tests failed. Please fix failing tests before committing."
    exit 1
fi

# Run accessibility tests specifically
echo "♿ Running accessibility tests..."
if ! pnpm --filter @gtalumni-la/react test a11y; then
    echo "❌ Accessibility tests failed. Please ensure WCAG compliance before committing."
    exit 1
fi

# Check for TODO comments in staged files
echo "📝 Checking for TODO comments..."
staged_files=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx|js|jsx)$' || true)
if [ -n "$staged_files" ]; then
    for file in $staged_files; do
        if grep -q "TODO\|FIXME\|XXX" "$file"; then
            echo "⚠️  Warning: Found TODO/FIXME comments in $file"
        fi
    done
fi

echo "✅ All quality checks passed! Ready to commit."
exit 0