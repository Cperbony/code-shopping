import {FieldsOptions} from "../../../../common/fields-options";

const productOutputFieldsOptions: FieldsOptions = {
    product_id: {
        id: 'product_id',
        label: 'Produto'
    },
    amount: {
        id: 'amount',
        label: 'Quantidade',
        validationMessage: {
            min: 1
        }
    }
};

export default productOutputFieldsOptions;