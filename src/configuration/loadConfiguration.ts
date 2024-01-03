import { mergeWith } from 'lodash';

import { lilconfig } from 'lilconfig';

import { Configuration } from '@interfaces/configuration';

import { createDefaultConfiguration } from './createDefaultConfiguration';
import { customMerge } from './customMerge';

export const loadConfiguration = async (): Promise<Configuration> => {
  const explorer = lilconfig('git-commit-emojify', {
    searchPlaces: ['gitEmojify.json'],
  });

  const jsonConfiguration = await explorer.search();

  const defaultConfiguration = createDefaultConfiguration();

  if (!jsonConfiguration) {
    return defaultConfiguration;
  }

  const configuration: Configuration = jsonConfiguration.config;

  if (!configuration) {
    return defaultConfiguration;
  }

  if (
    !configuration.branchTypeRegex &&
    !configuration.branchTypes &&
    !configuration.emojiKeywords
  ) {
    return defaultConfiguration;
  }

  const mergedConfig = mergeWith(
    {},
    defaultConfiguration,
    configuration,
    customMerge,
  );

  return mergedConfig;
};
