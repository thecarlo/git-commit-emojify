import { branchTypeEmojiMap } from '@maps/branchTypeEmojiMap';

export const buildBranchTypeRegexKeys = (): string => {
  const branchTypes = Object.keys(branchTypeEmojiMap);

  return `^(${branchTypes.join('|')})`;
};
