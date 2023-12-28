import { BranchTypeKeyValuePair } from '@interfaces/branchTypeKeyValuePair';

export const branchTypes: BranchTypeKeyValuePair = {
  chore: {
    emoji: '🧹',
    description: `An older, less specific type. Historically used for changes that doesn't modify src or test files`,
  },
  bugfix: { emoji: '🪲', description: 'A bug fix' },
  hotfix: {
    emoji: '🚑️',
    description:
      'A change made directly to the production branch to fix a critical issue that cannot wait for a regular release cycle',
  },
  revert: {
    emoji: '⏪️',
    description: 'A commit that undoes the changes of a previous commit',
  },
  release: {
    emoji: '🚀',
    description: 'A branch used to merge into the main branch for a release',
  },

  // commit types based on angular convention
  // https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit
  build: {
    emoji: '👷',
    description:
      'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
  },
  ci: {
    emoji: '💚',
    description:
      'Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)',
  },
  docs: {
    emoji: '📝',
    description: 'Documentation only changes',
  },
  feat: {
    emoji: '✨',
    description: ' A new feature',
  },
  fix: {
    emoji: '🪲',
    description: ' A bug fix',
  },
  perf: {
    emoji: '⚡️',
    description: 'A change that improves performance',
  },
  refactor: {
    emoji: '♻️',
    description:
      'A change that restructures existing code but does not change its functionality',
  },
  test: {
    emoji: '✅',
    description: 'Adding or fixing tests',
  },
};
