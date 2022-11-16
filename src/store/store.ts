import { combineReducers, legacy_createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {ticketsReducer} from "./ticketsReducer";


const reducers = combineReducers({
    tickets: ticketsReducer

})

export const store = legacy_createStore(reducers)

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppRootActionsType = {}
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector



// @ts-ignore
window.store = store // for dev