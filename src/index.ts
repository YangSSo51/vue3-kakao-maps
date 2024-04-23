import type { App, Plugin } from 'vue';
import { KakaoMap, MapMarker } from './components';
import useKakao from './util/useKakao';

// `app.use()`에 쓰일 수 있는 플러그인
const Vue3KakaoMaps: Plugin = {
  install: (app: App) => {
    app.component('KakaoMap', KakaoMap);
    app.component('MapMarker', MapMarker);
  }
};

export { Vue3KakaoMaps, KakaoMap, MapMarker, useKakao };
