window.axios = require('axios')
var endpoint = `http://kopacentafrica.com/api/web/v1`
// let notification = require('./assets/vue/notifications/notifications')

export default class Request{
    constructor(){

    }

    getParsedUrl(path){
        return endpoint+path;
    }

    callServer(data){
        return new Promise((resolve,reject) => {
            axios.post(endpoint, data)
                .then(response => {
                    resolve(response)
                }).catch(error=> {
                    if(error.response != undefined && error.response.status === 500){
                        // notification.notifyError(
                        //     'Error Occured',
                        //     `An internal server error occured. We are working to resolve it`
                        // );
                    }else{
                        // notification.notifyError(
                        //     'Error Occured',
                        //     `An error occured. We are working to resolve it`
                        // );
                    }
                    reject(error)
                });
        })
    }

    callServerMultipart(data){
        return new Promise((resolve,reject) => {
            // axios.defaults.headers.common['Content-Type'] = token
            axios.post(endpoint, data, {headers: {
                'Content-Type': 'multipart/form-data',
            }})
                .then(response => {
                    resolve(response)
                }).catch(error=> {
                    if(error.response != undefined && error.response.status === 500){
                        // notification.notifyError(
                        //     'Error Occured',
                        //     `An internal server error occured. We are working to resolve it`
                        // );
                    }else{
                        // notification.notifyError(
                        //     'Error Occured',
                        //     `An error occured. We are working to resolve it`
                        // );
                    }
                    reject(error)
                });
        })
    }
    
    callServerWithToken(data){
        return new Promise((resolve,reject) => {
            axios.defaults.headers.common['token'] = data.token
            axios.post(endpoint, data)
                .then(response => {
                    resolve(response)
                }).catch(error=> {
                    if(error.response != undefined && error.response.status === 500){
                        // notification.notifyError(
                        //     'Error Occured',
                        //     `An internal server error occured. We are working to resolve it`
                        // );
                    }else{
                        // notification.notifyError(
                        //     'Error Occured',
                        //     `An error occured. We are working to resolve it`
                        // );
                    }
                    if(error.response.data.Error.code === '11111'){window.location.replace("/log-in");}
                    reject(error)
                });
        })
    }
    
    callServerIndependent(action, resource, data, metadata){
        return new Promise((resolve,reject) => {
            axios.defaults.headers.common['token'] = this.$session.get('user').token
            axios.post(endpoint, {
                action: action,
                resource: resource,
                data: data,
                metadata: metadata,
            })
                .then(response => {
                    resolve(response)
                }).catch(error=> {
                    if(error.response != undefined && error.response.status === 500){
                        // notification.notifyError(
                        //     'Error Occured',
                        //     `An internal server error occured. We are working to resolve it`
                        // );
                    }else{
                        // notification.notifyError(
                        //     'Error Occured',
                        //     `An error occured. We are working to resolve it`
                        // );
                    }
                    reject(error)
                });
        })
    }
}