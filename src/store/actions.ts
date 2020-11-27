import { ThunkAction } from "redux-thunk";
import { Album, User } from "../interfaces";
import { RootState } from "./store";

const FETCH_DATA = "FETCH_DATA";
interface FetchDataAction {
    type: typeof FETCH_DATA;
}

const DATA_FETCHED = "DATA_FETCHED";
interface FetchedDataAction {
    type: typeof DATA_FETCHED;
    payload: {
        isSuccess: boolean;
        users: User[];
        albums: Album[];
    }
}

export type AppActions = FetchDataAction | FetchedDataAction;


export const fetchData = function (): ThunkAction<void, RootState, unknown, AppActions> {
    return async (dispatch) => {
        console.log("ggg")
        await Promise
            .all([fetchUsers(), fetchAlbums()])
            .then(data => {
                dispatch({
                    type: "DATA_FETCHED",
                    payload: {
                        isSuccess: true,
                        users: data[0],
                        albums: data[1]
                    }
                })
            });
    };
}

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data as User[];
}

async function fetchAlbums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    return data as Album[];
}