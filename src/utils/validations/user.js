import { getUsers } from '../../services/api/user-api'
import { validateFieldsInputs } from '../user-utils'


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