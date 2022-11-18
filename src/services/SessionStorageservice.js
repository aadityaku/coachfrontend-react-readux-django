const storeSession = (value) => {
    if(value){
        
        const {email} = value
        // console.log(email);
        sessionStorage.setItem('user',email)
    }
}
const getSession = () => {
    let email = sessionStorage.getItem('user')
    return {email}
}
const removeSession = () => {
    sessionStorage.removeItem('user')
}
export {storeSession,getSession,removeSession}