import { Customer } from "../assets/Customer.ts";

export const initialState: Customer[] = [];

export function CustomerReducer(state: Customer[] = initialState, action: { type: string, payload: Customer }): Customer[] {
    switch (action.type) {
            case 'ADD_CUSTOMER':
            // Add the new customer to the existing state array
                return [...state, action.payload];
            case 'REMOVE_CUSTOMER':
                return [...state.filter((customer) => customer.email !== action.payload)];
            case 'UPDATE_CUSTOMER':
                return state.map((customer) => customer.email === action.payload.email ? { ...customer, ...action.payload } : customer);
            default:
                return state;
    }
}

