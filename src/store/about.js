import {getAbout} from '@/api/about'
import loading from '@/directives/loading'
export default{
    namespaced: true,
    state:{
        loading:false,
        data:null,
    },
    mutations: {
        setLoading(state,payload) {
            state.loading = payload
        },
        setData(state,payload) {
            state.data = payload;
        }
    },
    actions:{
        async fetchAbout(ctx){
            ctx.commit('setLoading',true)
            const resp = await getAbout();
            ctx.commit('setData',resp)
            ctx.commit('setLoading',false);
        }
    }
}