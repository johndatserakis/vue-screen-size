declare module 'vue-screen-size' {

    class VueScreenSizeMixin extends Vue {

        $vssEvent: UIEvent;
        $vssWidth: number;
        $vssHeight: number;

        getScreenWidth(): number;
        getScreenHeight(): number;

        handleResize(event: UIEvent = null): void;

        $vssDestroyListener(): void;

    }

}
