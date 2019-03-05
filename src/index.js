import VueScreenSizeMixin from './vue-screen-size'

const install = (Vue) => {
    Vue.mixin(VueScreenSizeMixin)
}

// Note that here we're not only exporting the install function, but
// also the mixin itself - this is so with can `Vue.use()` or
// `mixins: [],` it.
export default { install, VueScreenSizeMixin }
