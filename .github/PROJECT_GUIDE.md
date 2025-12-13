# GT Design System - GitHub Project Guide

## 🎯 **Project Overview**

This document describes the optimized GitHub setup for the GT Design System, specifically configured for **agentic coding workflows** with Claude Code and other AI development tools.

## 📋 **Project Structure**

### **GitHub Project Fields**

| Field | Type | Purpose | Agentic Usage |
|-------|------|---------|---------------|
| **Status** | Single Select | Todo/In Progress/Done | Tracks implementation progress |
| **Priority** | Single Select | P0/P1/P2 | Agent prioritization for task selection |
| **Size** | Single Select | XS/S/M/L/XL | Agent complexity assessment |
| **Milestone** | Reference | Q1-Q3 2026 | Release planning and dependencies |
| **Iteration** | Iteration | Sprints | Short-term planning cycles |
| **Assignees** | Reference | Human/Agent assignment | Clear ownership tracking |
| **Labels** | Reference | Type/category tags | Agent filtering and selection |
| **Estimate** | Number | Story points | Capacity planning |
| **Start/End Date** | Date | Timeline tracking | Dependency management |

### **Milestone Structure**

#### 🔴 **Q1 2026 - Foundation**
- **Focus**: Critical foundation components and accessibility infrastructure
- **Key Issues**: #45 (accessibility), #17 (colors), #33 (visual regression), #21 (typography)
- **Agent Priority**: High - automated implementation ready

#### 🟡 **Q2 2026 - Core Components**
- **Focus**: Essential component library completion and responsive design
- **Key Issues**: #35 (responsive), #4 (Input), #5 (Card), #8 (Modal)
- **Agent Priority**: Medium - requires specification refinement

#### 🟢 **Q3 2026 - Enhancement**
- **Focus**: Advanced features, theming, and developer experience improvements
- **Key Issues**: #43 (token sync), #42 (docs), #32 (dark mode), #89 (W3C)
- **Agent Priority**: Low - planning and research phase

## 🏷️ **Label System for Agentic Workflows**

### **Priority Labels**
- `priority: critical` - Must be completed for core functionality
- `priority: high` - Important for complete design system
- `priority: medium` - Enhancement and nice-to-have features

### **Type Labels**
- `component` - React component related
- `tokens` - Design tokens related
- `testing` - Testing and quality assurance
- `accessibility` - Accessibility and a11y improvements
- `documentation` - Improvements or additions to documentation
- `performance` - Performance improvements and monitoring

### **Workflow Labels (Agent-Specific)**
- `agent-ready` - Ready for AI agent implementation
- `needs-specification` - Requires detailed technical specification
- `automation-candidate` - Good candidate for automation
- `needs-triage` - Requires initial assessment and prioritization
- `status: blocked` - Waiting on dependencies or external factors

### **Scope Labels**
- `epic` - Large feature set spanning multiple issues
- `breaking change` - Changes that break existing APIs
- `good first issue` - Good for newcomers

## 🤖 **Agentic Coding Optimization**

### **Agent-Ready Criteria**

Issues are marked as `agent-ready` when they include:
- ✅ **Complete API specification** (TypeScript interfaces)
- ✅ **Detailed accessibility requirements** (WCAG 2.1 AA specifics)
- ✅ **Comprehensive testing requirements** (unit + a11y + visual)
- ✅ **Design specifications** (colors, spacing, typography)
- ✅ **Behavior specification** (states, interactions, edge cases)

### **Specialized Agents Integration**

The project is optimized for these specialized agents:

#### 🧩 **Component Generator** (`component-generator`)
- **Triggers**: Issues labeled `component` + `agent-ready`
- **Input**: Component request template with full specification
- **Output**: Complete component with tests, stories, and documentation

#### ♿ **Accessibility Auditor** (`accessibility-auditor`)
- **Triggers**: Issues labeled `accessibility` or pre-commit hooks
- **Input**: Component implementation or audit request
- **Output**: Accessibility compliance report and fixes

#### 🎨 **Penpot Sync** (`penpot-sync`)
- **Triggers**: Design-to-code conversion requests
- **Input**: Penpot design file references
- **Output**: React components matching design specifications

#### 🚀 **Release Coordinator** (`release-coordinator`)
- **Triggers**: Release milestone completion
- **Input**: Changeset requirements and version planning
- **Output**: Automated releases with proper versioning

### **Automated Workflows**

#### **Project Automation** (`.github/workflows/project-automation.yml`)
- Auto-adds issues to GitHub Project
- Auto-assigns priority based on labels
- Auto-assigns milestones for critical items
- Labels issues based on content analysis
- Notifies when issues become agent-ready

#### **Quality Gates**
- Branch protection on `main` requires CI and quality checks
- Required PR reviews with conversation resolution
- Stale review dismissal enabled
- Force push and deletion protection

## 📊 **Issue Templates**

### **🧩 Component Request** (`component_request.yml`)
**Optimized for AI agent implementation** with:
- Complete API specification requirements
- Detailed design and accessibility specs
- Testing and Storybook requirements
- Agent implementation readiness assessment

### **🚀 Epic Template** (`epic_template.yml`)
**For large initiatives** with:
- Epic scope and breakdown
- Child issue planning
- Implementation strategy
- Agent suitability assessment

### **🐛 Bug Report** (`bug_report.yml`)
**For issue tracking** with:
- Environment information
- Reproduction steps
- Package-specific details

### **✨ Feature Request** (`feature_request.yml`)
**For enhancements** with:
- API design requirements
- Breaking change assessment
- Priority classification

## 🔄 **Workflow Optimization**

### **For AI Agent Development**

1. **Issue Creation**: Use component_request template for new components
2. **Specification**: Ensure all required fields are completed
3. **Agent Assignment**: Apply `agent-ready` label when specification is complete
4. **Implementation**: Reference specialized agents in development prompts
5. **Validation**: Use accessibility-auditor for compliance checking
6. **Integration**: Merge with automated quality gate validation

### **For Human Development**

1. **Triage**: New issues auto-labeled and assigned to project
2. **Planning**: Milestone assignment based on priority and dependencies
3. **Specification**: Use templates to ensure agent-compatible details
4. **Collaboration**: Clear ownership and progress tracking
5. **Quality**: Automated checks and required reviews

## 📈 **Project Views**

### **Current Sprint View**
- Filter: Current iteration + Status != Done
- Sort: Priority (P0 → P1 → P2)
- Group: Status (Todo → In Progress → Done)

### **Agent-Ready Backlog**
- Filter: `agent-ready` label + Status = Todo
- Sort: Priority + Size
- Purpose: Quick agent task selection

### **Milestone Progress**
- Filter: Specific milestone
- Group: Status
- Purpose: Release planning and tracking

### **Accessibility Focus**
- Filter: `accessibility` label
- Sort: Priority
- Purpose: WCAG compliance tracking

## 🛠️ **Repository Settings**

### **Branch Protection (main)**
- ✅ Require status checks: `ci`, `quality-checks`
- ✅ Require PR reviews (1 approving review)
- ✅ Dismiss stale reviews
- ✅ Require conversation resolution
- ✅ Prevent force pushes and deletions

### **Repository Configuration**
- ✅ Squash merge enabled with commit messages
- ✅ Auto-delete head branches enabled
- ✅ Topics configured for discoverability
- ✅ Issues, projects, and wiki enabled

### **Security Settings**
- ✅ Private repository with organization access
- ✅ Dependabot security updates enabled
- ✅ Secret scanning configured

## 📚 **Documentation Integration**

### **Claude Code Setup**
- `.claude/settings.json` - Tool permissions and hooks
- `.claude/agents/` - Specialized agent configurations
- `AGENTS.md` - Master agent configuration
- `CLAUDE.md` - Project memory and context

### **GitHub Integration**
- `PROJECT_GUIDE.md` - This optimization guide
- `ISSUE_TEMPLATE/` - Agent-optimized templates
- `workflows/` - Automated project management
- `copilot-instructions.md` - GitHub Copilot guidance

## 🎯 **Success Metrics**

### **Agent Effectiveness**
- Issues marked `agent-ready` → Implementation time
- Automated test coverage from agents
- Accessibility compliance rate
- Component specification completeness

### **Project Velocity**
- Milestone completion rate
- Issue cycle time (creation → done)
- PR review and merge time
- Quality gate pass rate

### **Quality Indicators**
- Accessibility test coverage
- Visual regression test stability
- Bundle size monitoring
- Performance benchmark trends

---

*This setup optimizes the GT Design System for both human and AI-driven development, ensuring high quality, accessibility-first components while maximizing development velocity.*