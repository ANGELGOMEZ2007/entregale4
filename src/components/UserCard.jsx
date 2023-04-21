import React from 'react'

const UserCard = ({ user, deleteUserById,setUpdateInfo }) => {

  const handleDelete = () => {
    deleteUserById(user.id)
  }

const handleUpdate = () => {
  setUpdateInfo(user)
}

  return (
    <article>
      <h2>{user.first_name} {user.last_name}</h2>
      <ul>
        <li><span>Email</span>{user.email}</li>
        <li><span>Birthday</span>{user.birthday}</li>
      </ul>
      <footer>
        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
      </footer>
    </article>
  )
}

export default UserCard