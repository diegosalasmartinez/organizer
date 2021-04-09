import { getUsers } from '../../services/api/user'
import { validateFieldsInputs } from '../user'


const validateFields = async (user) => {
    try{
        const usernamesDB = await getUsers();
        const usernames = usernamesDB.map( function(obj){ return obj["username"] });
        const errors = validateFieldsInputs(user, usernames);
        return errors;
    }
    catch(e){
        console.log(e);
    }
}

export { validateFields }