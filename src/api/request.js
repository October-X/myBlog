import axios from 'axios';
import showMessage from '../utils/showMessage'

const ins = axios.create();
ins.interceptors.response.use(function (resp){
    if(resp.data.code !== 0){
        console.log('error')
        showMessage({
            content:resp.data.msg,
            type:'error',
        })
        return null;
    }
    // console.log('success')
    // console.log(resp.data.data);
    return resp.data.data
})
export default ins;