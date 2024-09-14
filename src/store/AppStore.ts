import { combineReducers } from 'redux'
import { UsersTableReducer } from './UsersTableReducer'

export const rootReducer = combineReducers({ usersTable: UsersTableReducer })
export type AppState = ReturnType<typeof rootReducer>
