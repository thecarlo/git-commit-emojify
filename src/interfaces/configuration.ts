import { BranchTypeKeyValuePair } from './branchTypeKeyValuePair';
import { EmojiKeyword } from './emojiKeyword';

export interface Configuration {
  branchTypes: BranchTypeKeyValuePair;
  emojiKeywords: EmojiKeyword[];
  branchTypeRegex: string;
  prefixEmoji: boolean;
}
