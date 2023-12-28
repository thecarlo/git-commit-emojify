import { loadConfiguration } from '@configuration/loadConfiguration';
import { EmojifyResult } from '@interfaces/emojifyResult';

import { getCurrentCommitMessage } from './getCurrentCommitMessage';
import { getEmojiByBranchType } from './getEmojiByBranchType';
import { getEmojiByCommitMessage } from './getEmojiByCommitMessage';

export const emojify = async (): Promise<EmojifyResult | null> => {
  const configuration = await loadConfiguration();

  const { prefixEmoji } = configuration;

  const branchTypeEmoji = await getEmojiByBranchType(configuration);

  const commitMessage = await getCurrentCommitMessage();

  const messageEmoji = getEmojiByCommitMessage(configuration, commitMessage);

  if (messageEmoji) {
    return {
      emoji: messageEmoji,
      commitMessage,
      prefixEmoji,
    };
  }

  if (branchTypeEmoji) {
    return {
      emoji: branchTypeEmoji,
      commitMessage,
      prefixEmoji,
    };
  }

  return null;
};
