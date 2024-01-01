import { Configuration } from '@interfaces/configuration';

import { getEmojiByCommitMessage } from './getEmojiByCommitMessage';

describe('getEmojiByCommitMessage', () => {
  it('returns an empty string when commit message is empty', () => {
    const config = {
      emojiKeywords: [{ keywords: ['bug'], emoji: '🐛' }],
    } as unknown as Configuration;

    const result = getEmojiByCommitMessage(config, '');

    expect(result).toBe('');
  });

  it('returns an empty string when no keywords match', () => {
    const config = {
      emojiKeywords: [{ keywords: ['bug'], emoji: '🐛' }],
    } as unknown as Configuration;

    const result = getEmojiByCommitMessage(config, 'no match here');

    expect(result).toBe('');
  });

  it('returns the correct emoji for a single keyword match', () => {
    const config = {
      emojiKeywords: [{ keywords: ['bug'], emoji: '🐛' }],
    } as unknown as Configuration;

    const result = getEmojiByCommitMessage(config, 'fix bug');

    expect(result).toBe('🐛');
  });

  it('returns the correct emoji for a a keyword phrase match', () => {
    const config = {
      emojiKeywords: [{ keywords: ['initial commit'], emoji: '✨' }],
    } as unknown as Configuration;

    const result = getEmojiByCommitMessage(config, 'initial commit');

    expect(result).toBe('✨');
  });

  it('returns the correct emoji for the first matching keyword', () => {
    const config = {
      emojiKeywords: [
        { keywords: ['bug', 'regression'], emoji: '🪲' },
        { keywords: ['revert'], emoji: '⏪️' },
      ],
    } as unknown as Configuration;

    const result = getEmojiByCommitMessage(
      config,
      'revert this change due to a regression',
    );

    expect(result).toBe('🪲');
  });

  it('returns the emoji for the first matching set of keywords', () => {
    const config = {
      emojiKeywords: [
        { keywords: ['enhance', 'improve'], emoji: '✨' },
        { keywords: ['bug', 'fix'], emoji: '🐛' },
      ],
    } as unknown as Configuration;

    const result = getEmojiByCommitMessage(config, 'enhance and fix');

    expect(result).toBe('✨');
  });
});
