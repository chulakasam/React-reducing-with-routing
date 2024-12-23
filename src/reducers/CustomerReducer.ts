import { Customer } from "../assets/Customer.ts";

export const initialState: Customer[] = [];

export function CustomerReducer(state: Customer[] = initialState, action: { type: string, payload: Customer }): Customer[] {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            // Add the new customer to the existing state array
            return [...state, action.payload];
        default:
            return state;
    }
}
