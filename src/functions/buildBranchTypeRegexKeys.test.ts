import { branchTypeEmojiMap } from '@maps/branchTypeEmojiMap';

import { buildBranchTypeRegexKeys } from './buildBranchTypeRegexKeys';

describe('buildBranchTypeRegexKeys', () => {
  it('should return a string with all the keys from branchTypeEmojiMap', () => {
    const result = buildBranchTypeRegexKeys();

    const joinedKeys = Object.keys(branchTypeEmojiMap).join('|');

    const expected = `^(${joinedKeys})`;

    expect(result).toEqual(expected);
  });
});
