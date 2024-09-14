import { FC } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store/AppStore'
import { User } from '../store/UsersTableReducer'

const UsersTable: FC = () => {
  const users: User[] | null = useSelector(
    (state: AppState) => state.usersTable.users,
  )

  const table =
    users &&
    users.map((user: User, index: number) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    ))

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  if (table)
    return (
      <table>
        <thead>
          <tr>
            <th>
              <input type="text" onChange={handleFilterChange} />
            </th>
            <th>
              <input type="text" onChange={handleFilterChange} />
            </th>
            <th>
              <input type="text" onChange={handleFilterChange} />
            </th>
            <th>
              <input type="text" onChange={handleFilterChange} />
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
