import {FieldsSortColumn} from "./fields-sort-column";

export interface FieldsSearchParams {
    page?: number;
    all?: any;
    search?: string;
    sort?: FieldsSortColumn;
}