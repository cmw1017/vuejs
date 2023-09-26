import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers/index.js'

// 앱 생성
const app = createApp(App)

// 라우터 사용 설정
app.use(routers);

// 렌더링 시작점
app.mount('#app')
