const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validateFields = (user,usernames) => {
    const errors = {};
    if(!user.name) errors.name = "What's your name?";
    if(!user.lastName) errors.lastName = "What's your lastname?";
    if(usernames.includes(user.username)) errors.username = "This username is not available";
    if(!validateEmail(user.email)) errors.email = "Email is not valid";
    if(user.password.length < 5) errors.password = "Your password must contain at least 5 letters";
    if(user.password !== user.passwordConfirmation) errors.passwordConfirmation = "Passwords don't match";
    return errors;
}

export default validateFields;