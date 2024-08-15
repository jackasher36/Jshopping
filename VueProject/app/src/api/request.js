
//对axois封装
import axios from 'axios'
import nProgress from 'nprogress';
import "nprogress/nprogress.css";



const requests=  axios.create({
    baseURL: "http://gmall-h5-api.atguigu.cn/api",
    timeout:5000,

})

requests.interceptors.request.use((config) => {
    //进度条开始动
    nProgress.start()
    return config;
})

requests.interceptors.response.use((res) => {

    nProgress.done()
    return res.data;
},(error) => {
    return Promise.reject(new Error('fail'));
})


export default requests;