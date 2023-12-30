#!/usr/bin/env node

import { emojify } from '@functions/emojify';
import { updateCurrentCommitMessage } from '@functions/updateCurrentCommitMessage';

(async () => {
  const emojifyResult = await emojify();

  if (emojifyResult) {
    const { emoji, commitMessage, prefixEmoji } = emojifyResult;

    await updateCurrentCommitMessage(commitMessage, emoji, prefixEmoji);
  }
})();
