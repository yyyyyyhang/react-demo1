/**
 * Created by Apple on 2018/10/30.
 */
/*
import qs from 'qs'
import axios from 'axios'

let http={
    post:"",
    get:""
}

http.post=(api,data)=>{
    let params=qs.stringify(data)
    return new Promise((resolve,reject)=>{
        axios.post(api,params).then((res)=>{
            resolve(res)
        })
    })
}

http.get=(api,data)=>{
    let params=qs.stringify(data)
    return new Promise((resolve,reject)=>{
        axios.get(api,params).then((res)=>{
            resolve(res.data)
        })
    })
}

export default http*/
import qs from "qs";
import axios from "axios";
// react 中使用antd  此处自定义
// import { message } from "antd";
// vue中使用element-ui 此处自定义
// import { Loading} from "element-ui";

// 创建axios默认请求
// axios.defaults.baseURL = "http://xxxxxx.com";
axios.defaults.baseURL = " ";
// 配置超时时间
axios.defaults.timeout = 1000*2*60;
// 配置请求拦截
axios.interceptors.request.use(config => {
    // config.setHeaders([
    //   // 在这里设置请求头与携带token信息
    // ]);
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
/**
 * get请求
 * @method get
 * @param {url, params, loading} 请求地址，请求参数，是否需要加载层
 */
let http={
    post:"",
    get:""
}
http.get = function(url, params, loading) {

    return new Promise((resolve, reject) => {
        let data = {
            params:{}
        }
        data.params=params;
        axios
            .get(url, data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};
/**
 * post请求
 * @method post
 * @param {url, params} 请求地址，请求参数，是否需要加载层
 */
http.post = function(url, data) {
    return new Promise((resolve, reject) => {
        // qs.stringify(data)
        axios
            .post(url, data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

export default http;