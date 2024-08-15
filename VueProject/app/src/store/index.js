import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const state = {
    count: 1
}
const mutation = {}
const action = {}
const getter = {}

export default new Vuex.Store({
    state,
    mutation,
    action,
    
    getter
})