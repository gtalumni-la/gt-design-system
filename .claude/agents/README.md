# GT Design System - Specialized Agents

This directory contains specialized Claude Code agents for the GT Design System. Each agent is optimized for specific workflows and tasks.

## Available Agents

### Core Development Agents

**🔧 [component-generator.md](./component-generator.md)**
- Scaffolds complete React components with all required files
- Generates unit tests, accessibility tests, and Storybook documentation
- Enforces GT Design System patterns and WCAG 2.1 AA compliance
- **Use when:** Creating new components from scratch

**♿ [accessibility-auditor.md](./accessibility-auditor.md)**
- Comprehensive accessibility testing and compliance checking
- WCAG 2.1 AA validation with automated and manual testing guidance
- Cross-browser accessibility testing with Playwright
- **Use when:** Auditing components for accessibility compliance

### Design Integration Agents

**🎨 [penpot-sync.md](./penpot-sync.md)**
- Bridges Penpot UI designs with React implementation
- Extracts design specifications and generates matching components
- Synchronizes design tokens between Penpot and code
- **Use when:** Converting Penpot designs to React components

### Release Management Agents

**🚀 [release-coordinator.md](./release-coordinator.md)**
- Manages complete release lifecycle with changesets
- Coordinates multi-package releases in monorepo
- Automates version bumping, changelog generation, and publishing
- **Use when:** Managing releases, version bumps, or publishing

## How to Use Specialized Agents

### Method 1: Direct Reference
In your prompts, reference specific agents:
```
Using the component-generator agent, create a Card component with title, content, and action areas.
```

### Method 2: Claude Code Task Tool
Use the Task tool with custom agent specifications:
```
I need to create a new component. Use the component-generator agent patterns to scaffold a complete Modal component.
```

### Method 3: Workflow Integration
Agents are designed to work together:
1. **penpot-sync** → Convert design to component
2. **component-generator** → Scaffold complete implementation
3. **accessibility-auditor** → Validate WCAG compliance
4. **release-coordinator** → Publish new component

## Agent Design Principles

### Accessibility First
All agents enforce WCAG 2.1 AA compliance as a foundation, not an afterthought.

### GT Design System Integration
Agents automatically use GT design tokens, brand colors, and established patterns.

### Quality Assurance
Each agent includes comprehensive testing strategies and validation steps.

### Developer Experience
Agents reduce repetitive tasks while maintaining code quality and consistency.

## Workflow Examples

### Creating a New Component
```bash
# 1. Start with Penpot design
"Using penpot-sync agent, analyze the Button design in our Penpot file and extract component specifications"

# 2. Generate complete component
"Using component-generator agent, create a Button component based on these Penpot specifications"

# 3. Validate accessibility
"Using accessibility-auditor agent, run comprehensive accessibility tests on the new Button component"

# 4. Prepare for release
"Using release-coordinator agent, create a changeset for the new Button component"
```

### Accessibility Audit Workflow
```bash
# Full accessibility review
"Using accessibility-auditor agent, audit all components in the react package and provide remediation guidance"

# Specific component testing
"Using accessibility-auditor agent, test the Modal component for WCAG 2.1 AA compliance"
```

### Release Management
```bash
# Regular release
"Using release-coordinator agent, prepare a minor release with the new Card and Modal components"

# Emergency hotfix
"Using release-coordinator agent, create an emergency patch release for the Button accessibility fix"
```

## Integration with Existing Tools

### Claude Code Settings
Agents are integrated with `.claude/settings.json` tool permissions and hooks.

### CI/CD Pipeline
Agents leverage existing GitHub Actions workflows for quality gates and deployment.

### MCP Servers
Penpot sync agent uses the configured MCP server for direct design tool access.

### Development Tools
All agents work with the existing toolchain: Turbo, pnpm, Vitest, Playwright, Storybook.

## Customization

### Adding New Agents
1. Create new `.md` file in this directory
2. Follow the established agent format and structure
3. Update this README with the new agent description
4. Test with representative workflows

### Modifying Existing Agents
- Agents are versioned through git history
- Update agent documentation when workflows change
- Maintain backward compatibility when possible

## Best Practices

### Agent Invocation
- Be specific about which agent and what task
- Provide context about the component or feature
- Reference existing patterns when relevant

### Quality Assurance
- Always run accessibility tests after component creation
- Validate changes against design system standards
- Test across multiple browsers and assistive technologies

### Documentation
- Keep agent documentation updated with project changes
- Include examples of successful agent usage
- Document any limitations or edge cases

---

*These specialized agents help maintain the high quality and accessibility standards of the GT Design System while streamlining common development workflows.*