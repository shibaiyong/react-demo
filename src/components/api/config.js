
import axios from 'axios'

let instance = axios.create({
    baseURL:'http://t.weather.sojson.com'
})

//请求的全局拦截器
instance.interceptors.request.use( config => {
    let token = 'asdfghjklqwertyuiopzxcvbnm123456789'
    if(token){
        config.headers.Authorization = token
    }else{
        window.location.href = 'http://www.baidu.com'
    }
    console.log(config)
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use( response => {
    console.log(response)
    return response
}, err => {
    if(err.response){
        console.log(err)
        // switch(err.response.status){
        //     case 401:router.replace({
        //         path:'/login'
        //     })
        // }
    }
})

export default instance
