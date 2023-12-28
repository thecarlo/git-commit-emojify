import { cosmiconfig } from 'cosmiconfig';

import { Configuration } from '@interfaces/configuration';

import { createDefaultConfiguration } from './createDefaultConfiguration';

export const loadConfiguration = async (): Promise<Configuration> => {
  const explorer = cosmiconfig('git-commit-emojify', {
    searchPlaces: ['git-commit-emojify.json'],
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