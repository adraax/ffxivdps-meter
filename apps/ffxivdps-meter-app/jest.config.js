module.exports = {
  name: 'ffxivdps-meter-app',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    }
  },
  coverageDirectory: '../../coverage/apps/ffxivdps-meter-app'
};
