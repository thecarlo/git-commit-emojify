import { buildBranchTypeRegexKeys } from '@functions/buildBranchTypeRegexKeys';
import { RegexConstants } from '@interfaces/regexConstants';

const branchTypeRegexKeys = buildBranchTypeRegexKeys();

export const regexConstants: RegexConstants = {
  branchTypeRegex: `\\b(${branchTypeRegexKeys})\\b`,
};
