module.exports = {
  get BatchedBridge() {
    return require('./32');
  },

  get ExceptionsManager() {
    return require('./97');
  },

  get Platform() {
    return require('./58');
  },

  get RCTEventEmitter() {
    return require('./161');
  },

  get ReactNativeViewConfigRegistry() {
    return require('./162');
  },

  get TextInputState() {
    return require('./163');
  },

  get UIManager() {
    return require('./75');
  },

  get deepDiffer() {
    return require('./164');
  },

  get deepFreezeAndThrowOnMutationInDev() {
    return require('./40');
  },

  get flattenStyle() {
    return require('./87');
  },

  get ReactFiberErrorDialog() {
    return require('./165');
  },
};
