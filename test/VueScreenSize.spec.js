let emptyComponent = {
  template: `
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet, quidem veniam. Excepturi provident at soluta, minus quasi similique fuga, eum eligendi autem magni qui modi pariatur esse tenetur vel!
        </div>
    `,
  data() {
    return {};
  },
};

import { shallowMount } from '@vue/test-utils';
import { VueScreenSizeMixin } from '@/index.js';

describe('vue-screen-size.js', () => {
  it('Sets $vssWidth and $vssHeight correctly', async () => {
    const wrapper = shallowMount(emptyComponent, {
      mixins: [VueScreenSizeMixin],
    });

    expect(wrapper.vm.$vssWidth).toBeGreaterThan(1);
    expect(wrapper.vm.$vssHeight).toBeGreaterThan(1);
  });
});
