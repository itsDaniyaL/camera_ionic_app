import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'camera_app',
  webDir: 'www',
  server: {
    url: "http://192.168.10.14:8100",
    cleartext: true
  }
};

export default config;
