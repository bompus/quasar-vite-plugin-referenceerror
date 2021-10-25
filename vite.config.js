import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // *** comment the below block, and Broken1.vue and Broken2.vue do not throw a ReferenceError ***
    quasar({
      sassVariables: false,
    }),
  ],
});
