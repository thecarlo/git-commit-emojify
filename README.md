# git-commit-emojify

> A `commit-msg` git hook script to automatically add emojis to git commit messages

For example, `git commit -m "hotfix to fix caching"`

//=> `🚑 hotfix to fix caching`

or

in branch `feature-implement-caching`

`git commit -m "implemented caching"` (uses branch name to determine which emoji to use if not enough context in the commit message)

//=> `✨ implemented caching`

## Usage

Install and configure [Husky](https://www.npmjs.com/package/husky)

`.husky/commit-msg`

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --yes @humankode/git-commit-emojify
```

## Zero config by default

Zero configuration by default.

If no configuration specified, it will

- map a commit message to an emoji using [emojiKeywordMap.ts](src/maps/emojiKeywordMap.ts)
- if unable to map a message to an emoji, it will attempt to map the branch name to an emoji using [branchTypes.ts](src/maps/branchTypes.ts)

## Configuration

Place a file `gitEmojify.json` in your root directory.

Refer to the [Configuration](src/interfaces/configuration.ts) interface for all options.

### Example configurations

#### 1. Override branch type configuration

`gitEmojify.json`

```
{
  "branchTypes": {
    "build": {
      "emoji": "👷"
    },
    "bugfix": {
      "emoji": "🐛"
    }
  }
}

```

#### 2. Suffix the emoji

`gitEmojify.json`

```
{
  "prefixEmoji": false
}

```

This will place the emoji at the end of the commit message.

#### 3. Override emoji keywords

`gitEmojify.json`

```
{
  "emojiKeywords": [
    {
      "keywords": ['bug'],
      "emoji": "🪲",
    },
    {
      keywords: ["revert"],
      emoji: "⏪️",
    }
  ]
}
```

#### 4. Complete configuration example

`gitEmojify.json`

```
{
  "prefixEmoji": true,
  "branchTypes": {
    "build": {
      "emoji": "👷"
    },
    "bugfix": {
      "emoji": "🐛"
    }
  },
  "emojiKeywords": [
    {
      "keywords": ['bug'],
      "emoji": "🪲",
    },
    {
      keywords: ["revert"],
      emoji: "⏪️",
    }
  ]
}
```

This will override the configuration for `emojiKeywords` and will match the keywords `bug` and `revert` to commit messages.

## Maintainers

- [Carlo van Wyk](https://github.com/thecarlo)
