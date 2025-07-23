/**
 * Versioning configuration for GT Design System Documentation
 *
 * This file manages the different versions of documentation
 * that should be available on the site.
 */

export const versions = {
  // Current/latest version
  current: {
    label: 'v0.1.0',
    version: '0.1.0',
    path: '/',
    banner: {
      type: 'warning',
      content: 'This is an alpha release. Breaking changes may occur.',
    },
  },

  // Previous versions (add as needed)
  previous: [
    // Example of how to add previous versions:
    // {
    //   label: 'v0.0.1',
    //   version: '0.0.1',
    //   path: '/v0.0.1/',
    //   banner: {
    //     type: 'danger',
    //     content: 'This version is no longer maintained. Please upgrade to the latest version.'
    //   }
    // }
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
