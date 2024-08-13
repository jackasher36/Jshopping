import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

let orginRouter = VueRouter.prototype.push;
let orginReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject) {
        orginRouter.call(this,location,resolve,reject)
    }else {
        orginRouter.call(this,location,
            () => {
            
        }),
        () => {
            
        }
    }
}

VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject) {
        orginReplace.call(this,location,resolve,reject)
    }else {
        orginReplace.call(this,location,
            () => {
            
        }),
        () => {
            
        }
    }
}

export default new VueRouter ({
    routes:[
        {
            path:'/home',
            component:Home,
            meta: {
                isShow:true
            }
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            meta: {
                isShow:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta: {
                isShow:false
            }
        },
        {
            path:'/register',
            component:Register,
            meta: {
                isShow:false
            }
        },
        {
            path:'/*',
            component:Home
        }
    ]
})