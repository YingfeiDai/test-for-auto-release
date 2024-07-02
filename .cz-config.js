module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat:     A new feature" },
    { value: "🐛 fix", name: "🐛 fix:      A bug fix" },
    { value: "📝 docs", name: "📝 docs:     Documentation only changes" },
    {
      value: "💄 style",
      name: "💄 style:    Changes that do not affect the meaning of the code",
    },
    {
      value: "♻️ refactor",
      name: "♻️ refactor: A code change that neither fixes a bug nor adds a feature",
    },
    {
      value: "⚡️ perf",
      name: "⚡️ perf:     A code change that improves performance",
    },
    {
      value: "✅ test",
      name: "✅ test:     Adding missing tests or correcting existing tests",
    },
    {
      value: "📦️ build",
      name: "📦️ build:    Changes that affect the build system or external dependencies",
    },
    {
      value: "👷 ci",
      name: "👷 ci:       Changes to our CI configuration files and scripts",
    },
    {
      value: "🔧 chore",
      name: "🔧 chore:    Other changes that don't modify src or test files",
    },
    { value: "⏪️ revert", name: "⏪️ revert:   Reverts a previous commit" },
  ],
  skipQuestions: ["scope", "body", "breaking", "footer"],
  subjectLimit: 100,
};
