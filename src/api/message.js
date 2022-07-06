import request from './request'
export async function getMessages(page = 1,limit  = 10){
    return await request.get('/api/message',{
        param:{
            page,
            limit,
        }
    })
}

export async function postMessage(msgInfo){
    return await request.post('/api/message',msgInfo)
}