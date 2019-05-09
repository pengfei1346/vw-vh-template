// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

import cart from './module/carts';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cart,
    },
    plugins: [createPersistedState()],
})