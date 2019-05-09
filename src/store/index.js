import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export const SOME_MUTATION = 'SOME_MUTATION'
const ADD_AGE = 'ADD_AGE'
const REDUCE_AGE = 'REDUCE_AGE'

export default new Vuex.Store({
    state: {
        userInfo: {
            name: '张三',
            age: 18
        },
        todo:[
            {
                id: '1',
                thing: "吃饭",
                done: true
            },
            {
                id: '2',
                thing: "睡觉",
                done: false
            }
        ]
    },
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation, 必须是同步函数
    mutations: {
        [ADD_AGE](state,payload) {
            state.userInfo.age = payload.age
        },
        [REDUCE_AGE](state) {
            state.userInfo.age -= state.userInfo.age
        }
    },
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，
    // 或者通过 context.state 和 context.getters 来获取 state 和 getters。
    // 当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。
    actions: {
        // increment (context) {
        //     context.commit('increment')
        // },
        increment ({ commit,state },payload) {
            commit('ADD_AGE' , payload)
        },
        async actionA ({ commit },payload) {
            // commit('ADD_AGE', await getData())
            try {
                //
                // const res = await rankGender(opts);
                // if (res) {
                //     commit(ADD_AGE, payload);
                // }
                commit(ADD_AGE, payload);
            } catch (e) {
                console.log(e)
            }
        },
        async actionB ({ dispatch, commit }, payload) {
            try {
                // const res = await rankGender(opts);
                // if (res) {
                //     commit(REDUCE_AGE, res);
                // }
                commit(REDUCE_AGE, payload);
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        doneTodo: state => {
            return state.todo.filter(todo => todo.done)
        },
        // getTodoById: (state) => (id) => {
        //     return state.todo.find(todo => todo.id === id)
        // },
        getTodoById:function(state) {
            return function (id) {
                return state.todo.find(todo => todo.id == id)
            }
        }
    }
})
