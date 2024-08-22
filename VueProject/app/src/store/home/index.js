import { reqCategoryList } from "@/api"

const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const actions = {
    async categoryList({commit}){
        let result =await reqCategoryList()
        if(result.code == 200) {
            commit('CATEGORYLIST',result.data)
        }
        
    }
}
const getters = {}
const state = {
    categoryList: []
}

export default {
    state,
    actions,
    mutations,
    getters
}