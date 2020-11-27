import { combineReducers } from "redux";
import { User , Album} from "../interfaces";
import { AppActions } from "./actions";

export interface AlbumsAndUsersState {
    users : User[] ;
    albums : Album[];
    isFetched : boolean;
}
const initialState :AlbumsAndUsersState ={
    users: [],
    albums : [],
    isFetched : false
} 

export function reducer(state:AlbumsAndUsersState = initialState, action : AppActions) {
    switch (action.type) {
        case "DATA_FETCHED":
            return{
                ...state,
                users : action.payload.users,
                albums : action.payload.albums,
                isFetched : true
            }
    
        default:
            return state;
    }
}