import { reqCategoryList, reqGetBannerList} from "@/api"

const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },

    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
}
const actions = {
    async categoryList({commit}){
        let result =await reqCategoryList()
        if(result.code == 200) {
            commit('CATEGORYLIST',result.data)
        }
        
    },

    async getBannerList({commit}){
        let result  = await reqGetBannerList()
        if(result.code == 200) {
            commit('GETBANNERLIST',result.data)
        }
    }
    
}
const getters = {}
const state = {
    categoryList: [],
    bannerList:[]
}

export default {
    state,
    actions,
    mutations,
    getters
}