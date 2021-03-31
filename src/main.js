import Vue from 'vue';
import {Table, TableColumn, Button} from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './public-path'; // 注意需要引入public-path
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.config.productionTip = false;
let instance = null;
function render(props = {}) {
    const {container} = props;
    instance = new Vue({
        router,
        store,
        render: (h) => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
    console.log('[vue] props from main framework', props);

    render(props);
}

export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}
