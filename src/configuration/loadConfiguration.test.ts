import { lilconfig } from 'lilconfig';

import { createDefaultConfiguration } from './createDefaultConfiguration';
import { loadConfiguration } from './loadConfiguration';

jest.mock('lilconfig');

const mockLilconfig = lilconfig as jest.MockedFunction<typeof lilconfig>;

const mockSearch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  mockLilconfig.mockReturnValue({ search: mockSearch } as any);
});

describe('loadConfiguration', () => {
  it('should return default configuration when no custom configuration is found', async () => {
    mockSearch.mockResolvedValue(null);

    const defaultConfig = createDefaultConfiguration();

    const config = await loadConfiguration();

    expect(config).toEqual(defaultConfig);
  });

  it('should return default configuration when custom configuration is undefined', async () => {
    mockSearch.mockResolvedValue({ config: undefined });

    const defaultConfig = createDefaultConfiguration();

    const config = await loadConfiguration();

    expect(config).toEqual(defaultConfig);
  });

  it('should return default configuration when required properties are missing', async () => {
    mockSearch.mockResolvedValue({ config: {} });

    const defaultConfig = createDefaultConfiguration();

    const config = await loadConfiguration();

    expect(config).toEqual(defaultConfig);
  });

  it('should override default configuration with custom configuration for non-array fields', async () => {
    const customConfig = {
      branchTypeRegex: 'custom regex',
    };

    mockSearch.mockResolvedValue({ config: customConfig });

    const config = await loadConfiguration();

    expect(config.branchTypeRegex).toBe(customConfig.branchTypeRegex);
  });

  it('should merge custom configuration with default configuration with arrays', async () => {
    const customConfig = {
      branchTypes: { fix: { emoji: '🔧', description: 'Custom fix' } },
      emojiKeywords: [{ keywords: ['new'], emoji: '✨' }],
    };

    mockSearch.mockResolvedValue({ config: customConfig });

    const config = await loadConfiguration();

    expect(config.branchTypes.fix).toEqual(customConfig.branchTypes.fix);

    expect(config.emojiKeywords).toEqual([customConfig.emojiKeywords[0]]);
  });

  it('should handle overriding array values', async () => {
    const customConfig = {
      emojiKeywords: [{ keywords: ['unique'], emoji: '🔧' }],
    };

    mockSearch.mockResolvedValue({ config: customConfig });

    const config = await loadConfiguration();

    expect(config.emojiKeywords).toEqual([...customConfig.emojiKeywords]);
  });
});
