import { FC } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store/AppStore'
import { User } from '../store/UsersTableReducer'
import { useDispatch } from 'react-redux'
import { filterUsers } from '../store/UsersTableReducer'

const UsersTable: FC = () => {
  const users: User[] = useSelector(
    (state: AppState) => state.usersTable.filteredUsers,
  )
  const dispatch = useDispatch()

  const table = users.map((user: User) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  ))

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterUsers({ [e.target.name]: e.target.value }))
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="text" name="name" onChange={handleFilterChange} />
          </th>
          <th>
            <input type="text" name="username" onChange={handleFilterChange} />
          </th>
          <th>
            <input type="text" name="email" onChange={handleFilterChange} />
          </th>
          <th>
            <input type="text" name="phone" onChange={handleFilterChange} />
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {table.length > 0 ? (
          table
        ) : (
          <tr>
            <td colSpan={4}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UsersTable
