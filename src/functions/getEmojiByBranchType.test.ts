import { Configuration } from '@interfaces/configuration';
import { branchTypeEmojiMap } from '@maps/branchTypeEmojiMap';

import * as getCurrentBranchNameModule from './getCurrentBranchName';
import { getEmojiByBranchType } from './getEmojiByBranchType';

describe('getEmojiByBranchType', () => {
  const mockGetCurrentBranchName = jest.spyOn(
    getCurrentBranchNameModule,
    'getCurrentBranchName',
  );

  const configuration = {
    branchTypeRegex: '^(bugfix|feat|chore)',
  } as unknown as Configuration;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns empty string if undefined', async () => {
    mockGetCurrentBranchName.mockResolvedValue(undefined as unknown as any);

    const emoji = await getEmojiByBranchType(configuration);

    expect(emoji).toBe('');
  });

  it('returns empty string if no current branch', async () => {
    mockGetCurrentBranchName.mockResolvedValue('');

    const emoji = await getEmojiByBranchType(configuration);

    expect(emoji).toBe('');
  });

  it('returns empty string if branch does not match regex', async () => {
    mockGetCurrentBranchName.mockResolvedValue('unknown');

    const emoji = await getEmojiByBranchType(configuration);

    expect(emoji).toBe('');
  });

  it('returns correct emoji for bugfix branch', async () => {
    mockGetCurrentBranchName.mockResolvedValue('bugfix/fix-some-issue');

    const emoji = await getEmojiByBranchType(configuration);

    expect(emoji).toBe(branchTypeEmojiMap['bugfix']);
  });

  it('returns correct emoji for feat branch', async () => {
    mockGetCurrentBranchName.mockResolvedValue('feat/add-new-feature');

    const emoji = await getEmojiByBranchType(configuration);

    expect(emoji).toBe(branchTypeEmojiMap['feat']);
  });

  it('returns correct emoji for chore branch', async () => {
    mockGetCurrentBranchName.mockResolvedValue('chore/update-docs');

    const emoji = await getEmojiByBranchType(configuration);

    expect(emoji).toBe(branchTypeEmojiMap['chore']);
  });
});
