declare module 'vue-screen-size' {
  class VueScreenSizeMixin {
    $vssEvent: UIEvent;
    $vssWidth: number;
    $vssHeight: number;
    getScreenWidth(): number;
    getScreenHeight(): number;
    handleResize(event: UIEvent): void;
    $vssDestroyListener(): void;
  }
}
