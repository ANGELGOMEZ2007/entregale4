import { useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'

function App() {


  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])
  


  return (
    <div className="App">
      <div className="">
        {
          users?.map(user => (
            <UserCard key={user.id} user={user} />
          ))
        }
      </div>
    </div>
  )
}

export default App
