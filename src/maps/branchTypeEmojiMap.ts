import { KeyValuePair } from '@interfaces/keyValuePair';
import { branchTypes } from '@maps/branchTypes';

export const branchTypeEmojiMap: KeyValuePair = Object.keys(branchTypes).reduce(
  (acc: KeyValuePair, key: string) => {
    acc[key] = branchTypes[key].emoji;

    return acc;
  },
  {},
);
