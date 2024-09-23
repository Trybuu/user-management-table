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
  users: User[] // Pełna lista użytkowników
  filteredUsers: User[] // Lista przefiltrowanych użytkowników
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
  filteredUsers: [],
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
        filteredUsers: action.payload,
      }
    case FILTER_USERS:
      const updatedFilters = {
        ...state.filters,
        ...action.payload,
      }

      const filteredUsers = state.users.filter((user) => {
        const matchName = user.name
          .toLowerCase()
          .includes(updatedFilters.name.toLowerCase())
        const matchUsername = user.username
          .toLowerCase()
          .includes(updatedFilters.username.toLowerCase())
        const matchEmail = user.email
          .toLowerCase()
          .includes(updatedFilters.email.toLowerCase())
        const matchPhone = user.phone
          .toLowerCase()
          .includes(updatedFilters.phone.toLowerCase())

        return matchName && matchUsername && matchEmail && matchPhone
      })

      return {
        ...state,
        filters: updatedFilters,
        filteredUsers,
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

export const filterUsers = (filters: Partial<Filters>) => {
  return {
    type: FILTER_USERS,
    payload: filters,
  }
}
