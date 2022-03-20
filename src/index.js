import VueScreenSizeMixin from './vue-screen-size';

const install = (app) => {
  app.mixin(VueScreenSizeMixin);
};

export default install;

// Also export the actual mixing so users can use it on a single component
export { VueScreenSizeMixin };
