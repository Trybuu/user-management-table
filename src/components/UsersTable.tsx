import { FC } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store/AppStore'
import { User } from '../store/UsersTableReducer'
import { useDispatch } from 'react-redux'
import { FILTER_USERS } from '../store/UsersTableReducer'

const UsersTable: FC = () => {
  const users: User[] | null = useSelector(
    (state: AppState) => state.usersTable.users,
  )
  const dispatch = useDispatch()

  const table =
    users &&
    users.map((user: User) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    ))

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FILTER_USERS,
      payload: { [e.target.name]: e.target.value },
    })
  }

  if (table)
    return (
      <table>
        <thead>
          <tr>
            <th>
              <input type="text" name="name" onChange={handleFilterChange} />
            </th>
            <th>
              <input
                type="text"
                name="username"
                onChange={handleFilterChange}
              />
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
        <tbody>{table}</tbody>
      </table>
    )

  return (
    <div>
      <p>Table is empty</p>
    </div>
  )
}

export default UsersTable
