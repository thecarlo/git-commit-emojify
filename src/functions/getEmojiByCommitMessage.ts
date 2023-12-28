import { Configuration } from '@interfaces/configuration';

export const getEmojiByCommitMessage = (
  configuration: Configuration,
  commitMessage: string,
): string => {
  if (!commitMessage) {
    return '';
  }

  const { emojiKeywords } = configuration;

  for (const mapping of emojiKeywords) {
    if (mapping.keywords.some((keyword) => commitMessage.includes(keyword))) {
      return mapping.emoji;
    }
  }

  return '';
};
