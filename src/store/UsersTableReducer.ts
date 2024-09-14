export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export interface Filters {
  name: string
  username: string
  email: string
  phone: string
}

export interface UsersTableState {
  users: User[]
  filters: Filters
}

export interface FetchUsersActions {
  type: typeof FETCH_USERS
  payload: User[]
}

export interface FilterUsersActions {
  type: typeof FILTER_USERS
  payload: Partial<Filters>
}

export const FETCH_USERS = 'FETCH_USERS'
export const FILTER_USERS = 'FILTER_USERS'

const initialState: UsersTableState = {
  users: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
}

export const UsersTableReducer = (
  state: UsersTableState = initialState,
  action: FetchUsersActions | FilterUsersActions,
): UsersTableState => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}

export const fetchUsers = (users: User[]) => {
  return {
    type: FETCH_USERS,
    payload: users,
  }
}

export const filterUsers = (filters: Filters) => {
  return {
    type: FILTER_USERS,
    payload: filters,
  }
}
