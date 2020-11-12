import { defineComponent } from 'vue';

import { RouterView, RouteLocation } from 'vue-router';

export default defineComponent({
  setup() {
    return () => {
      return (
        <RouterView>
          {{
            default: ({ Component, route }: { Component: any; route: RouteLocation }) => {
              return <Component key={route.path} />;
            },
          }}
        </RouterView>
      );
    };
  },
});
