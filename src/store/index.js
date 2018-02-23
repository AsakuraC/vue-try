import Vue from 'vue'
import Vuex from 'vuex';
import mutations from './mutations'

Vue.use(Vuex);

const state = mutations.initState();
const getters = {
	showMap(state) {
		return state.history[state.history.length - 1].map;
	},

	nextPlayer(state) {
		return state.history[state.history.length - 1].next;
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
})

if (module.hot) {
	// 使 action 和 mutation 成为可热重载模块
	module.hot.accept(['./mutations'], () => {
		// 获取更新后的模块
		// 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
		const newMutations = require('./mutations').default
		// 加载新模块
		store.hotUpdate({
			mutations: newMutations,
		})
	})
}

export default store;