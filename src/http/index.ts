import axios from "axios";

export const $axios=axios.create({
    baseURL:'http://localhost:4200/'
})

$axios.interceptors.request.use((config)=>{
    const token=localStorage.getItem('token')
    if(token && config.headers){
        config.headers['authorization']=token
    }
    return config
})