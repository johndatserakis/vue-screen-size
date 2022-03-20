export default {
  data() {
    return {
      event: null,
      vssWidth: null,
      vssHeight: null,
    };
  },
  computed: {
    $vssEvent() {
      return this.event;
    },
    $vssWidth() {
      return this.vssWidth || this.getScreenWidth();
    },
    $vssHeight() {
      return this.vssHeight || this.getScreenHeight();
    },
  },
  methods: {
    getScreenWidth() {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    },
    getScreenHeight() {
      return (
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      );
    },
    handleResize(event) {
      this.event = event;
      this.vssWidth = this.getScreenWidth();
      this.vssHeight = this.getScreenHeight();
    },

    $vssDestroyListener() {
      window.removeEventListener('resize', this.handleResize);
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
};
