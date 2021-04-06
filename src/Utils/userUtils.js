import { getUsers } from '../services/api/userAPI'

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validateFields = async (user) => {
    try{
        const res = await getUsers();
        const usernames = res.data.map( function(obj){ return obj["username"] })
    
        const errors = {};
        if(!user.name) errors.name = "What's your name?";
        if(!user.lastName) errors.lastName = "What's your lastname?";
        if(!user.username || usernames.includes(user.username)) errors.username = "This username is not available";
        if(!validateEmail(user.email)) errors.email = "Enter an valid email";
        if(user.password.length < 8) errors.password = "Your password must contain at least 8 letters";
        if(user.passwordConfirmation.length < 8) errors.passwordConfirmation = "Your password must contain at least 8 letters"
        if(user.password !== user.passwordConfirmation) errors.passwordConfirmation = "Passwords don't match";
        return errors;
    }
    catch(e){
        console.log(e);
    }
}

export default validateFields;