import {FieldsOptions} from "../../../common/fields-options";

const fieldsOptions: FieldsOptions = {
    name: {
        id: 'name',
        label: 'Nome',
        validationMessage: {
            maxLength: 255
        }
    },
    email: {
        id: 'email',
        label: 'E-mail',
        validationMessage: {
            maxLength: 255
        }
    },
    password: {
        id: 'password',
        label: 'Senha',
        validationMessage: {
            minLength: 4,
            maxLength: 16
        }
    }
};

export default fieldsOptions;