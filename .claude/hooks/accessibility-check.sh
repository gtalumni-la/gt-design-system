#!/bin/bash

# GT Design System Accessibility Validation Hook
# Runs comprehensive accessibility checks

echo "♿ Running comprehensive accessibility validation..."

# Run accessibility unit tests
echo "🧪 Running jest-axe accessibility tests..."
if ! pnpm --filter @gtalumni-la/react test a11y; then
    echo "❌ Accessibility unit tests failed"
    exit 1
fi

# Build Storybook for accessibility auditing
echo "📚 Building Storybook for accessibility audit..."
if ! pnpm --filter @gtalumni-la/storybook docs:build; then
    echo "❌ Storybook build failed"
    exit 1
fi

# Run axe audit on Storybook (if requested)
if [ "$1" = "--full-audit" ]; then
    echo "🔍 Running full Storybook accessibility audit..."
    
    # Start server in background
    cd apps/storybook/storybook-static
    python3 -m http.server 8080 &
    SERVER_PID=$!
    
    # Wait for server to start
    sleep 5
    
    # Run axe audit
    cd ../../..
    if npx axe http://localhost:8080 --chrome-options="--no-sandbox,--disable-dev-shm-usage" --tags wcag2a,wcag2aa; then
        echo "✅ Storybook accessibility audit passed"
    else
        echo "❌ Storybook accessibility audit found violations"
        kill $SERVER_PID 2>/dev/null || true
        exit 1
    fi
    
    # Clean up
    kill $SERVER_PID 2>/dev/null || true
fi

echo "✅ All accessibility checks passed!"
exit 0