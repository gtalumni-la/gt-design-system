// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick } from 'vue';
import './custom.css';
import './version-switcher.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Add version switching functionality
    if (typeof window !== 'undefined') {
      // Load versions after the app is mounted
      setTimeout(loadVersions, 100);
    }
  },
} satisfies Theme;

async function loadVersions() {
  try {
    const response = await fetch('/gt-design-system/versions.json');
    const versions = await response.json();

    // Make versions available globally
    (window as any).__GT_VERSIONS__ = versions;

    // Update navigation with version switcher
    updateVersionSwitcher(versions);
  } catch (error) {
    console.warn('Could not load versions.json:', error);
    // Fallback to current version only
    (window as any).__GT_VERSIONS__ = {
      current: { version: 'v0.1.0', path: '/', label: 'v0.1.0 (latest)' },
      versions: [],
    };
  }
}

function updateVersionSwitcher(versions: any) {
  // This will be called after the navigation is rendered
  nextTick(() => {
    const nav = document.querySelector('.VPNavBar .VPNavBarTitle');
    if (nav && !document.querySelector('.version-switcher')) {
      createVersionSwitcher(versions);
    }
  });
}

function createVersionSwitcher(versions: any) {
  const currentPath = window.location.pathname;
  const isVersioned = currentPath.match(/\/gt-design-system\/v[\d.]+\//);
  const currentVersion = isVersioned
    ? isVersioned[0].match(/v[\d.]+/)![0]
    : versions.current.version;

  const switcher = document.createElement('div');
  switcher.className = 'version-switcher';
  switcher.innerHTML = `
    <select class="version-select" aria-label="Select documentation version">
      <option value="${versions.current.path}" ${!isVersioned ? 'selected' : ''}>
        ${versions.current.label}
      </option>
      ${versions.versions
        .map(
          (v: any) => `
        <option value="${v.path}" ${currentVersion === v.version ? 'selected' : ''}>
          ${v.label}
        </option>
      `,
        )
        .join('')}
    </select>
  `;

  // Add change handler
  const select = switcher.querySelector('.version-select') as HTMLSelectElement;
  select.addEventListener('change', (e) => {
    const newPath = (e.target as HTMLSelectElement).value;
    const basePath = '/gt-design-system';

    if (newPath === '/') {
      // Latest version
      window.location.href = basePath + '/';
    } else {
      // Versioned path
      window.location.href = basePath + newPath;
    }
  });

  // Insert into navigation
  const nav = document.querySelector('.VPNavBar .VPNavBarTitle');
  if (nav) {
    nav.appendChild(switcher);
  }
}
