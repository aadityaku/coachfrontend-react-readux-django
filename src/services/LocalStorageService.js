const storeToken = ({access,refresh,email}) => {
    
        localStorage.setItem('access_token',access)
        localStorage.setItem('refresh_token',refresh)
        sessionStorage.setItem('user',email)

    
}

const getToken = () => {
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    let user = sessionStorage.getItem('user')

    return {access_token,refresh_token,user}
}

const removeToken = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    sessionStorage.removeItem('user')
}

export {storeToken,getToken,removeToken}