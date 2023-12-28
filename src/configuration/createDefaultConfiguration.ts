import { regexConstants } from '@constants/regexConstants';
import { Configuration } from '@interfaces/configuration';
import { branchTypes } from '@maps/branchTypes';
import { emojiKeywordMap } from '@maps/emojiKeywordMap';

export const createDefaultConfiguration = (): Configuration => {
  return {
    branchTypes,
    emojiKeywords: emojiKeywordMap,
    branchTypeRegex: regexConstants.branchTypeRegex,
    prefixEmoji: true,
  };
};
