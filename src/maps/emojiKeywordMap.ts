import { EmojiKeyword } from '@interfaces/emojiKeyword';

export const emojiKeywordMap: EmojiKeyword[] = [
  /*
  1) this map is used for partial matching. keyword 'fix' will match the word 'hotfix'
  
  2) will exit on first match. put more specific keywords first
  e.g., if you have a keyword 'fix' and a keyword 'hotfix', put 'hotfix' first
  */
  {
    keywords: ['bug', 'regression'],
    emoji: '🪲',
  },
  {
    keywords: ['revert'],
    emoji: '⏪️',
  },
  {
    keywords: ['hotfix'],
    emoji: '🚑️',
  },
  {
    keywords: ['bot'],
    emoji: '🤖',
  },
  {
    keywords: ['spelling', 'typo'],
    emoji: '✏️',
  },
  {
    keywords: [
      'pr fix',
      'fix pr',
      'fixed pr',
      'pr change',
      'code review change',
      'code review issue',
      'pr issues',
    ],
    emoji: '👌',
  },
  {
    keywords: ['sonar'],
    emoji: '📡',
  },
  {
    keywords: ['build', 'broken'],
    emoji: '🚧',
  },
  {
    keywords: ['broke'],
    emoji: '❌',
  },
  {
    keywords: ['script', 'minor update', 'husky', 'hook'],
    emoji: '🔨',
  },
  {
    keywords: ['refactor', 'rewrite', 'rewrote'],
    emoji: '♻️',
  },
  {
    keywords: ['performance'],
    emoji: '⚡️',
  },
  {
    keywords: ['emergency', 'critical'],
    emoji: '🚨',
  },
  {
    keywords: ['merge', 'rebase', 'conflicts'],
    emoji: '🔀',
  },
  {
    keywords: ['wip', 'work in progress'],
    emoji: '🚧',
  },
  {
    keywords: [
      'package',
      'npm',
      'dependency',
      'dependencies',
      'library',
      'package',
      'shrinkwrap',
      'lock file',
      'upgrade',
      'upgrading',
      'downgrade',
      'downgrading',
      'package-lock',
      'payload',
    ],
    emoji: '📦',
  },
  {
    keywords: ['tests', 'unit test', 'fix test', 'fixed test'],
    emoji: '✅',
  },
  {
    keywords: [
      'sso',
      'login',
      'csp',
      'auth',
      'security',
      'optimistic lock',
      'vulnerability',
      'vulnerabilities',
    ],
    emoji: '🔒',
  },
  {
    keywords: [
      'secret',
      'sensitive data',
      'guard',
      'protect',
      'encrypt',
      'encode',
      'hash',
      'encoding',
      'secure',
      'cert',
      'token',
      'jwt',
    ],
    emoji: '🔐',
  },
  {
    keywords: ['smell', 'todo', 'bad code', 'hack', 'workaround'],
    emoji: '💩',
  },
  {
    keywords: ['logout'],
    emoji: '⬅️',
  },
  {
    keywords: [
      'json',
      'typescript',
      'javascript',
      'jenkinsfile',
      'prettierrc',
      'eslintrc',
      'sonar-project',
      'npmrc',
      'tsconfig',
      'nvmrc',
      'dockerfile',
      'security.md',
    ],
    emoji: '📄',
  },
  {
    keywords: ['documentation', 'docs', 'readme'],
    emoji: '📝',
  },
  {
    keywords: ['lint'],
    emoji: '👕',
  },
  {
    keywords: ['race condition'],
    emoji: '🏇',
  },
  {
    keywords: ['jenkins'],
    emoji: '👷',
  },
  {
    keywords: ['gitignore'],
    emoji: '🙈',
  },
  {
    keywords: ['checkout', 'cart'],
    emoji: '🛒',
  },
  {
    keywords: ['points'],
    emoji: '💯',
  },
  {
    keywords: ['prettier', 'css', 'style', 'styling'],
    emoji: '🎨',
  },
  {
    keywords: ['cookie'],
    emoji: '🍪',
  },
  {
    keywords: ['user', 'profile'],
    emoji: '👤',
  },
  {
    keywords: ['flag', 'ld', 'darkly'],
    emoji: '🚩',
  },
  {
    keywords: [
      'config',
      '.env',
      'environment var',
      'env var',
      'configuration change',
    ],
    emoji: '⚙️',
  },
  {
    keywords: ['storybook'],
    emoji: '📚',
  },
  {
    keywords: ['validation', 'validate'],
    emoji: '🦺',
  },
  {
    keywords: ['release', 'master'],
    emoji: '🚀',
  },
  {
    keywords: ['interface', 'type', 'enum', 'revision', 'version', 'bump'],
    emoji: '🏷️',
  },
  {
    keywords: ['search', 'query'],
    emoji: '🔎',
  },
  {
    keywords: ['payment'],
    emoji: '💳',
  },
  {
    keywords: ['api'],
    emoji: '🔌',
  },
  {
    keywords: ['hello world', 'initialize', 'boilerplate', 'initial setup'],
    emoji: '🌱',
  },
  {
    keywords: ['initial commit'],
    emoji: '🎉',
  },
  {
    keywords: ['analytics', 'tag manager', 'gtm'],
    emoji: '📈',
  },
  {
    keywords: ['business logic'],
    emoji: '👔',
  },
  {
    keywords: ['comments'],
    emoji: '💡',
  },
  {
    keywords: [
      'comment out',
      'commented out',
      'removed dead code',
      'remove dead code',
      'unused code',
    ],
    emoji: '⚰️',
  },
  {
    keywords: [
      'queue',
      'stack',
      'list',
      'array',
      'enum',
      'collection',
      'dictionary',
    ],
    emoji: '📜',
  },
  {
    keywords: [
      'await',
      'promise',
      'async',
      'callback',
      'latency',
      'timeout',
      'delay',
      'throttle',
      'debounce',
      'settimeout',
      'setinterval',
    ],
    emoji: '⌛',
  },
  {
    keywords: ['concurrency', 'concurrent', 'multithreading'],
    emoji: '🧵',
  },
  {
    keywords: ['version mismatch'],
    emoji: '👀',
  },
  {
    keywords: ['retry', 'reload', 'refresh'],
    emoji: '🔄',
  },
  {
    keywords: ['sqs', 'mail', 'ses'],
    emoji: '✉️',
  },
  {
    keywords: ['schedule', 'cron', 'job'],
    emoji: '⏱️',
  },
  {
    keywords: [
      'deserialise',
      'deserialize',
      'deserialization',
      'deserialisation',
      'load',
    ],
    emoji: '📤',
  },
  {
    keywords: [
      'memory',
      'save',
      'write',
      'serialise',
      'serialize',
      'serialization',
      'serialisation',
      'buffer',
    ],
    emoji: '💾',
  },
  {
    keywords: ['function', 'method', 'class'],
    emoji: '🧩',
  },
  {
    keywords: ['network', 'internet'],
    emoji: '🕸️',
  },
  {
    keywords: ['contributing'],
    emoji: '👥',
  },
  {
    keywords: ['docker'],
    emoji: '🐳',
  },
  {
    keywords: [
      'serverless',
      'lambda',
      'aws',
      'google cloud',
      'gcp',
      'cloud function',
    ],
    emoji: '☁️',
  },
  {
    keywords: ['ecs', 'server', 'cluster', 'fargate', 'ec2'],
    emoji: '🖥️',
  },
  {
    keywords: ['node'],
    emoji: '🟩',
  },
  {
    keywords: [
      'access',
      'permission',
      'role',
      'policy',
      'deny',
      'grant',
      'allow',
    ],
    emoji: '🔑',
  },
  {
    keywords: [
      'delete log',
      'remove log',
      'removed log',
      'delete log',
      'deleted log',
    ],
    emoji: '🔇',
  },
  {
    keywords: ['log'],
    emoji: '🔈',
  },
  {
    keywords: ['patch'],
    emoji: '🩹',
  },
  {
    keywords: ['fix'],
    emoji: '🔧',
  },
  {
    keywords: ['chore', 'cleanup'],
    emoji: '🧹',
  },
  {
    keywords: ['feat'],
    emoji: '✨',
  },
];
