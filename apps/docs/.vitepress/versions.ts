/**
 * Versioning configuration for GT Design System Documentation
 *
 * This file manages the different versions of documentation
 * that should be available on the site.
 */

// Get version from package.json dynamically
const getPackageVersion = () => {
  if (typeof window !== 'undefined') {
    // Client-side: will be loaded from versions.json
    return '0.1.0';
  }
  // Server-side: use package.json
  try {
    return require('../../../package.json').version;
  } catch {
    return '0.1.0';
  }
};

export const versions = {
  // Current/latest version
  current: {
    label: `v${getPackageVersion()}`,
    version: getPackageVersion(),
    path: '/',
    banner: {
      type: 'warning',
      content: 'This is an alpha release. Breaking changes may occur.',
    },
  },

  // Previous versions (dynamically loaded from versions.json)
  previous: [
    // This will be populated dynamically from versions.json
    // when the app loads on the client-side
  ],
};

export const getVersionFromPath = (path: string) => {
  // Extract version from path like '/v0.1.0/...'
  const match = path.match(/^\/v(\d+\.\d+\.\d+)\//);
  return match ? match[1] : versions.current.version;
};

export const getAllVersions = () => {
  return [versions.current, ...versions.previous];
};
