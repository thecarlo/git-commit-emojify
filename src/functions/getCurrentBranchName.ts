import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const getCurrentBranchName = async (): Promise<string> => {
  try {
    const { stdout: branchName } = await execAsync(
      'git rev-parse --abbrev-ref HEAD',
    );

    return branchName.trim();
  } catch (error) {
    console.error('error: failed to get branch name');

    return '';
  }
};
