import { promises as fsPromises } from 'fs';

import { getCommitEditMessagePath } from './getCommitEditMessagePath';

export const updateCurrentCommitMessage = async (
  currentMessage: string,
  text: string,
  prefixEmoji: boolean,
): Promise<void> => {
  try {
    const messageFilePath = await getCommitEditMessagePath();

    const updatedMessage = prefixEmoji
      ? `${text} ${currentMessage}`
      : `${currentMessage} ${text}`;

    await fsPromises.writeFile(messageFilePath, updatedMessage);
  } catch (error) {
    console.error(`updateCurrentCommitMessage error`, error);
  }
};
