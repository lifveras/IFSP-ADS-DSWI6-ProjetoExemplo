// https://medium.com/swlh/jwt-authentication-in-vue-nuxt-the-right-way-486e333b1d71
export const state = ()=>{
    return {
        authenticationToken: ""
    }
}

export const mutations = {
    setToken(state, token){
        state.authenticationToken = token;
    }
}

export const getters = {
    token(state){
        return state.authenticationToken;
    }
}

export const actions = {
    setToken(state, token){
        state.commit(state, token);
    }
}