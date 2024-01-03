import { regexConstants } from '@constants/regexConstants';
import { branchTypes } from '@maps/branchTypes';
import { emojiKeywordMap } from '@maps/emojiKeywordMap';

import { createDefaultConfiguration } from './createDefaultConfiguration';

describe('createDefaultConfiguration', () => {
  it('should return a Configuration object with the correct structure', () => {
    const config = createDefaultConfiguration();

    expect(config).toHaveProperty('branchTypes');

    expect(config).toHaveProperty('emojiKeywords');

    expect(config).toHaveProperty('branchTypeRegex');

    expect(config).toHaveProperty('prefixEmoji');

    expect(typeof config.branchTypes).toBe('object');

    expect(Array.isArray(config.emojiKeywords)).toBeTruthy();

    expect(typeof config.branchTypeRegex).toBe('string');

    expect(typeof config.prefixEmoji).toBe('boolean');
  });

  it('should have correct branchTypes mapping', () => {
    const config = createDefaultConfiguration();

    expect(config.branchTypes).toEqual(branchTypes);
  });

  it('should have correct emojiKeywordMap', () => {
    const config = createDefaultConfiguration();

    expect(config.emojiKeywords).toEqual(emojiKeywordMap);
  });

  it('should have correct branchTypeRegex pattern', () => {
    const config = createDefaultConfiguration();

    expect(config.branchTypeRegex).toEqual(regexConstants.branchTypeRegex);
  });

  it('should have correct prefixEmoji value', () => {
    const config = createDefaultConfiguration();

    expect(config.prefixEmoji).toBeTruthy();
  });
});
