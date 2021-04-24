//#region CONST

export const ACCOUNT = {
    id: 0,
    names: "",
    avatar: ""
}

export const messenger = {
    id: 0,
    content: "",
    times: "",
    accounts_id: 0,
}

//#endregion

//#region IMPORT LIBRARY
import axios from "axios";

//#endregion

//#region API

const API_ACCOUNT = "https://localhost:44367/api/Account"
const API_MESSENGER = "https://localhost:44367/api/Messenger"

//#endregion

//#region ACCOUNT

export const getAllAccounts = (account) => {
    axios
        .get(API_ACCOUNT)
        .then((response) => {
            account = response.data
            return account
        })
        .catch((err) => {
            console.log(err);
        });
}

//#endregion