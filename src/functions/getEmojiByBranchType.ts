import { Configuration } from '@interfaces/configuration';
import { branchTypeEmojiMap } from '@maps/branchTypeEmojiMap';

import { getCurrentBranchName } from './getCurrentBranchName';

export const getEmojiByBranchType = async (
  configuration: Configuration,
): Promise<string> => {
  const branch = await getCurrentBranchName();

  if (!branch) {
    return '';
  }

  const branchTypeRegex = new RegExp(configuration.branchTypeRegex, 'i');

  const match = RegExp(branchTypeRegex).exec(branch);

  if (!match) {
    return '';
  }

  const branchType = match[0]?.toLowerCase();

  return branchTypeEmojiMap[branchType] || '';
};
