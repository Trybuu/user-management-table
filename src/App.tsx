import { FC, useEffect } from 'react'
import './App.css'
import UsersTable from './components/UsersTable'
import { useDispatch } from 'react-redux'
import { FETCH_USERS } from './store/UsersTableReducer'

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getUsersData()
  })

  const getUsersData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()

      dispatch({ type: FETCH_USERS, payload: users })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
      <UsersTable />
    </div>
  )
}

export default App
