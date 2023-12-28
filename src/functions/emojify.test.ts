import * as configModule from '@configuration/loadConfiguration';

import { emojify } from './emojify';
import * as commitMsgModule from './getCurrentCommitMessage';
import * as branchEmojiModule from './getEmojiByBranchType';
import * as commitEmojiModule from './getEmojiByCommitMessage';

jest.mock('@configuration/loadConfiguration');

jest.mock('./getEmojiByBranchType');

jest.mock('./getCurrentCommitMessage');

jest.mock('./getEmojiByCommitMessage');

describe('emojify', () => {
  // Setup common variables or mock returns
  const mockConfig = { prefixEmoji: true };

  const mockCommitMessage = 'test commit message';

  beforeEach(() => {
    jest.resetAllMocks();

    (configModule.loadConfiguration as jest.Mock).mockResolvedValue(mockConfig);

    (commitMsgModule.getCurrentCommitMessage as jest.Mock).mockResolvedValue(
      mockCommitMessage,
    );
  });

  test('returns emoji based on commit message', async () => {
    const mockEmoji = ':tada:';

    (branchEmojiModule.getEmojiByBranchType as jest.Mock).mockResolvedValue('');

    (commitEmojiModule.getEmojiByCommitMessage as jest.Mock).mockReturnValue(
      mockEmoji,
    );

    const result = await emojify();

    expect(result).toEqual({
      emoji: mockEmoji,
      commitMessage: mockCommitMessage,
      prefixEmoji: mockConfig.prefixEmoji,
    });
  });

  test('returns emoji based on branch type when no commit message emoji', async () => {
    const mockEmoji = ':sparkles:';

    (commitEmojiModule.getEmojiByCommitMessage as jest.Mock).mockReturnValue(
      '',
    );

    (branchEmojiModule.getEmojiByBranchType as jest.Mock).mockResolvedValue(
      mockEmoji,
    );

    const result = await emojify();

    expect(result).toEqual({
      emoji: mockEmoji,
      commitMessage: mockCommitMessage,
      prefixEmoji: mockConfig.prefixEmoji,
    });
  });

  test('returns null when no emoji found', async () => {
    (commitEmojiModule.getEmojiByCommitMessage as jest.Mock).mockReturnValue(
      '',
    );

    (branchEmojiModule.getEmojiByBranchType as jest.Mock).mockResolvedValue('');

    const result = await emojify();

    expect(result).toBeNull();
  });
});
