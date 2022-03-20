(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VueScreenSize = {}));
}(this, (function (exports) { 'use strict';

  var VueScreenSizeMixin = {
    data: function data() {
      return {
        event: null,
        vssWidth: null,
        vssHeight: null,
      };
    },
    computed: {
      $vssEvent: function $vssEvent() {
        return this.event;
      },
      $vssWidth: function $vssWidth() {
        return this.vssWidth || this.getScreenWidth();
      },
      $vssHeight: function $vssHeight() {
        return this.vssHeight || this.getScreenHeight();
      },
    },
    methods: {
      getScreenWidth: function getScreenWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      },
      getScreenHeight: function getScreenHeight() {
        return (
          window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        );
      },
      handleResize: function handleResize(event) {
        this.event = event;
        this.vssWidth = this.getScreenWidth();
        this.vssHeight = this.getScreenHeight();
      },

      $vssDestroyListener: function $vssDestroyListener() {
        window.removeEventListener('resize', this.handleResize);
      },
    },
    mounted: function mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    destroyed: function destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
  };

  var install = function (app) {
    app.mixin(VueScreenSizeMixin);
  };

  exports.VueScreenSizeMixin = VueScreenSizeMixin;
  exports.default = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
