import {FieldsOptions} from "../../../../common/fields-options";

const chatGroupFieldsOptions: FieldsOptions = {
    name: {
        id: 'name',
        label: 'Nome',
        validationMessage: {
            maxLength: 255
        }
    },
    photo: {
        id: 'photo',
        label: 'Foto'
    }
};

export default chatGroupFieldsOptions;