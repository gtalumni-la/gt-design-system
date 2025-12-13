# Claude Code Agent Usage Guide
## GT Design System Optimization

This guide explains how to leverage the specialized agents and knowledge base for optimal Claude Code experience with the GT Design System.

## Quick Reference

### Primary Documents
- **`AGENTS.md`** - Main agent configuration for all AI coding tools (20+ tools compatible)
- **`CLAUDE.md`** - Comprehensive Claude Code memory and project context
- **`.claude/agents/`** - Specialized workflow agents for complex tasks

### Key Commands
```bash
# Start with comprehensive context
claude --context AGENTS.md

# Development workflow
pnpm dev                    # Start all development servers
pnpm test && pnpm --filter @gtalumni-la/react test a11y  # Run all tests

# Quality gates (run before commits)
pnpm lint && pnpm type-check && pnpm build
```

## Specialized Agent Workflows

### 1. Component Development Workflow

**New Component from Scratch:**
```
1. "Using component-generator agent, create a [ComponentName] with [requirements]"
2. "Using accessibility-auditor agent, validate the new component for WCAG 2.1 AA compliance"
3. "Using release-coordinator agent, create a changeset for the new component"
```

**Component from Penpot Design:**
```
1. "Using penpot-sync agent, analyze the [ComponentName] design and extract specifications"
2. "Using component-generator agent, implement the component based on Penpot specifications"
3. "Using accessibility-auditor agent, run comprehensive accessibility tests"
```

### 2. Quality Assurance Workflows

**Full Accessibility Audit:**
```
"Using accessibility-auditor agent, audit all components and provide prioritized remediation guidance"
```

**Pre-Release Quality Check:**
```
1. Run comprehensive test suite
2. "Using accessibility-auditor agent, validate all components meet WCAG 2.1 AA"
3. "Using release-coordinator agent, prepare release with proper changesets"
```

### 3. Design Integration Workflows

**Penpot to Code:**
```
1. "Using penpot-sync agent, list available Penpot projects and locate the design system file"
2. "Extract the [ComponentName] component structure and generate React implementation"
3. "Sync any new design tokens to the tokens package"
```

**Design Token Updates:**
```
1. "Using penpot-sync agent, extract color/spacing/typography updates from latest designs"
2. Update tokens package with new values
3. "Using accessibility-auditor agent, validate color contrast ratios meet WCAG AA"
```

## Development Context Awareness

### File Structure Navigation
When working with the monorepo, Claude Code understands:
- `packages/react/src/components/` - Component implementations
- `packages/tokens/src/` - Design token definitions
- `apps/storybook/src/stories/` - Component documentation
- `.claude/agents/` - Specialized workflow agents

### Testing Patterns
Claude Code knows to run:
- Unit tests: `*.test.tsx` files with Vitest
- Accessibility tests: `*.a11y.test.tsx` files with jest-axe
- Cross-browser a11y: Playwright with `playwright-a11y.config.js`

### Build System Awareness
Understanding of Turbo monorepo with dependencies:
1. `tokens` → Design tokens (built first)
2. `typescript` & `eslint` → Shared configurations
3. `react` → Components (depends on tokens)

## Advanced Agent Patterns

### Chained Agent Workflows
```bash
# Complete feature development pipeline
"Create a complete DatePicker component:
1. Use penpot-sync to extract design specifications
2. Use component-generator to scaffold with full accessibility
3. Use accessibility-auditor to validate WCAG compliance
4. Use release-coordinator to prepare changeset for minor release"
```

### Cross-Package Coordination
```bash
# Design token updates affecting multiple packages
"Update the primary color palette:
1. Use penpot-sync to extract new brand colors from designs
2. Update tokens package with OKLCH color space values
3. Use accessibility-auditor to validate contrast ratios
4. Use component-generator patterns to update existing components
5. Use release-coordinator to coordinate tokens + react package releases"
```

## Integration with Existing Tools

### MCP Server Integration
The Penpot MCP server enables:
- Direct design file access from Claude Code
- Real-time design-to-code synchronization
- Asset export and component generation

### GitHub Workflow Integration
Agents work with existing GitHub Actions:
- Quality gates in CI/CD pipeline
- Automated accessibility testing
- Release automation with changesets

### Development Tool Compatibility
All agents integrate with:
- Turbo build orchestration
- pnpm workspace management
- Vitest + Playwright testing
- Storybook documentation

## Best Practices for Agent Usage

### 1. Context Specificity
```bash
# ✅ Specific and actionable
"Using component-generator agent, create a Modal component with focus trapping, ESC key handling, and WCAG 2.1 AA compliance"

# ❌ Too vague
"Create a modal component"
```

### 2. Agent Sequencing
```bash
# ✅ Logical workflow sequence
1. Design analysis (penpot-sync)
2. Implementation (component-generator)
3. Quality assurance (accessibility-auditor)
4. Release preparation (release-coordinator)

# ❌ Skip quality steps
1. Design analysis → 4. Release (missing validation)
```

### 3. Quality Gate Enforcement
Always include accessibility validation:
```bash
"After creating the component, use accessibility-auditor to ensure WCAG 2.1 AA compliance before proceeding"
```

## Troubleshooting Agent Issues

### Common Problems

**Agent Not Following Patterns:**
- Ensure you reference the specific agent by name
- Provide clear requirements and context
- Reference existing component patterns

**Accessibility Failures:**
- Use accessibility-auditor agent for detailed analysis
- Check color contrast ratios against GT brand colors
- Validate ARIA attributes and keyboard navigation

**Build/Test Failures:**
- Run quality gates before requesting changes
- Ensure all dependencies are properly installed
- Check Turbo cache and clear if needed (`pnpm clean`)

### Debug Commands
```bash
# Validate project state
pnpm lint && pnpm type-check && pnpm build

# Check accessibility compliance
pnpm --filter @gtalumni-la/react test a11y

# Validate MCP server connection
.mcp/start-penpot-mcp.sh

# Reset development environment
pnpm clean && pnpm install && pnpm build
```

## Performance Optimization

### Agent Response Time
- Use specific, focused prompts
- Reference existing patterns and components
- Provide clear requirements upfront

### Context Management
- AGENTS.md provides optimal context for all tools
- CLAUDE.md offers comprehensive project memory
- Specialized agents handle complex workflows

### Resource Usage
- Agents leverage existing project infrastructure
- MCP servers provide efficient design tool integration
- Turbo caching optimizes build performance

---

*This optimization setup transforms Claude Code into a design system-aware development assistant that understands GT's accessibility-first philosophy, maintains code quality, and accelerates common workflows.*