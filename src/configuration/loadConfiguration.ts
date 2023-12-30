import { lilconfig } from 'lilconfig';

import { Configuration } from '@interfaces/configuration';

import { createDefaultConfiguration } from './createDefaultConfiguration';

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
    console.log('configuration is undefined. returning default configuration');

    return defaultConfiguration;
  }

  if (
    !configuration.branchTypeRegex &&
    !configuration.branchTypes &&
    !configuration.emojiKeywords
  ) {
    console.log('configuration is undefined. returning default configuration');

    return defaultConfiguration;
  }

  const mergedConfig = { ...defaultConfiguration, ...configuration };

  return mergedConfig;
};
