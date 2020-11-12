import { defineComponent } from 'vue';

import LayoutContent from './LayoutContent';
import LayoutBottonBar from './LayoutBottonBar';

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    return () => {
      return (
        <div>
          <LayoutContent />
          <LayoutBottonBar />
        </div>
      );
    };
  },
});
