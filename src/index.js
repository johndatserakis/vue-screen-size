import VueScreenSizeMixin from './vue-screen-size';

const install = (app) => {
  app.mixin(VueScreenSizeMixin);
};

export default install;

// Also export the actual mixin so consumers can use it on a single component if they choose
export { VueScreenSizeMixin };
