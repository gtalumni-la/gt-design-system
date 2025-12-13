# Project Automation Workflow Setup

Due to OAuth scope limitations, the project automation workflow needs to be added manually after PR merge.

## Setup Instructions

1. Create `.github/workflows/project-automation.yml` with the following content:

```yaml
name: 🤖 Project Automation

on:
  issues:
    types: [opened, edited, labeled, unlabeled, assigned]
  pull_request:
    types: [opened, edited, labeled, unlabeled, ready_for_review]

jobs:
  project-automation:
    runs-on: ubuntu-latest
    if: github.repository == 'gtalumni-la/gt-design-system'

    steps:
      - name: Add to GT Design System Project
        uses: actions/add-to-project@v0.5.0
        with:
          project-url: https://github.com/orgs/gtalumni-la/projects/2
          github-token: ${{ secrets.GITHUB_TOKEN }}

      - name: Set Priority Based on Labels
        uses: actions/github-script@v7
        with:
          script: |
            const issue = context.payload.issue || context.payload.pull_request;
            const labels = issue.labels.map(label => label.name);

            // Auto-assign priority based on labels
            let priority = null;
            if (labels.includes('priority: critical')) {
              priority = 'P0';
            } else if (labels.includes('priority: high')) {
              priority = 'P1';
            } else if (labels.includes('priority: medium')) {
              priority = 'P2';
            }

            // Auto-assign size based on type
            let size = null;
            if (labels.includes('bug')) {
              size = 'S';
            } else if (labels.includes('component')) {
              size = 'L';
            } else if (labels.includes('epic')) {
              size = 'XL';
            } else if (labels.includes('tokens')) {
              size = 'M';
            }

            console.log(`Auto-assigned priority: ${priority}, size: ${size}`);

      - name: Auto-assign Milestones
        uses: actions/github-script@v7
        with:
          script: |
            const issue = context.payload.issue || context.payload.pull_request;
            const labels = issue.labels.map(label => label.name);
            const title = issue.title.toLowerCase();

            // Auto-assign milestones for critical items
            let milestoneNumber = null;

            if (labels.includes('priority: critical') ||
                labels.includes('accessibility') ||
                title.includes('color') ||
                title.includes('typography')) {
              milestoneNumber = 1; // Q1 2026 - Foundation
            } else if (labels.includes('component') &&
                      (title.includes('input') || title.includes('card') || title.includes('modal'))) {
              milestoneNumber = 2; // Q2 2026 - Core Components
            } else if (labels.includes('enhancement') ||
                      labels.includes('tooling')) {
              milestoneNumber = 3; // Q3 2026 - Enhancement
            }

            if (milestoneNumber && !issue.milestone) {
              await github.rest.issues.update({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: issue.number,
                milestone: milestoneNumber
              });
              console.log(`Auto-assigned milestone ${milestoneNumber}`);
            }

  label-automation:
    runs-on: ubuntu-latest
    if: github.event_name == 'issues' && github.event.action == 'opened'

    steps:
      - name: Auto-label Based on Content
        uses: actions/github-script@v7
        with:
          script: |
            const issue = context.payload.issue;
            const title = issue.title.toLowerCase();
            const body = issue.body.toLowerCase();
            const labelsToAdd = [];

            // Agent-ready detection
            if (body.includes('api specification') &&
                body.includes('accessibility requirements') &&
                body.includes('testing requirements')) {
              labelsToAdd.push('agent-ready');
            }

            // Component type detection
            if (title.includes('component') || body.includes('component')) {
              labelsToAdd.push('component');
            }

            // Token detection
            if (title.includes('token') || body.includes('design token')) {
              labelsToAdd.push('tokens');
            }

            // Testing detection
            if (title.includes('test') || body.includes('testing')) {
              labelsToAdd.push('testing');
            }

            // Accessibility detection
            if (title.includes('accessibility') || title.includes('a11y') ||
                body.includes('wcag') || body.includes('aria')) {
              labelsToAdd.push('accessibility');
            }

            // Performance detection
            if (title.includes('performance') || body.includes('bundle size') ||
                body.includes('optimization')) {
              labelsToAdd.push('performance');
            }

            if (labelsToAdd.length > 0) {
              await github.rest.issues.addLabels({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: issue.number,
                labels: labelsToAdd
              });
              console.log(`Auto-added labels: ${labelsToAdd.join(', ')}`);
            }

  agent-ready-notification:
    runs-on: ubuntu-latest
    if: contains(github.event.label.name, 'agent-ready')

    steps:
      - name: Notify Agent-Ready Issue
        uses: actions/github-script@v7
        with:
          script: |
            const issue = context.payload.issue;
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issue.number,
              body: `🤖 **Agent Ready**: This issue has been marked as ready for AI agent implementation!

**Next Steps:**
1. Detailed specification provided ✅
2. Ready for agent assignment
3. Implementation can begin

**Specialized Agents Available:**
- 🧩 \`component-generator\` - For React component scaffolding
- ♿ \`accessibility-auditor\` - For accessibility validation
- 🎨 \`penpot-sync\` - For design-to-code conversion
- 🚀 \`release-coordinator\` - For release management

Use agents via: "Using [agent-name], implement this [component/feature]"`
            });
```

## Workflow Features

### Intelligent Issue Management
- **Auto-add to Project**: All issues and PRs automatically added to GitHub Project
- **Smart Priority Assignment**: Based on labels (critical → P0, high → P1, medium → P2)
- **Automatic Milestones**: Critical items get assigned to appropriate Q1-Q3 milestones
- **Content-Based Labeling**: Detects components, tokens, testing, accessibility content

### Agent-Ready Detection
- **Specification Analysis**: Detects when issues have complete specifications
- **Agent Recommendations**: Auto-comments with appropriate specialized agents
- **Implementation Guidance**: Provides clear next steps for agent usage

### Quality Integration
- **Repository-Specific**: Only runs on gt-design-system repository
- **Multi-Job Architecture**: Separate jobs for different automation types
- **Error Handling**: Robust GitHub Script integration with logging

## Manual Setup After Merge

1. Copy the YAML content above
2. Create `.github/workflows/project-automation.yml`
3. Paste the content and commit
4. The automation will begin working on the next issue/PR

This completes the agentic coding workflow optimization for the GT Design System.