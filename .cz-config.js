module.exports = {
  types: [
    { value: '✨特性', name: 'feat:    一个新的特性' },
    { value: '🐛修复', name: 'fix:    修复一个Bug' },
    { value: '📝文档', name: 'docs:    变更的只有文档' },
    { value: '💄格式', name: 'style:    空格, 分号等格式修复' },
    { value: '♻️重构', name: 'refactor:    代码重构，注意和特性、修复区分开' },
    { value: '⚡️性能', name: 'perf:    提升性能' },
    { value: '✅测试', name: 'test:    添加一个测试' },
    { value: '🔧工具', name: 'chore:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪回滚', name: 'revert:    代码回退' },
  ],
  scopes: [{ name: '其他修改' }, { name: '代码合并' }, { name: '样式修复' }],
  // it needs to match the value for field type. Eg.: 'fix'
  /* scopeOverrides: {
    fix: [
      { name: "merge" },
      { name: "style" },
      { name: "e2eTest" },
      { name: "unitTest" }
    ]
  }, */
  // override the messages, defaults are as follows
  // path: "@commitlint/config-conventional",
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // limit subject length
  subjectLimit: 100,
};
