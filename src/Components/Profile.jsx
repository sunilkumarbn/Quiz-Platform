import React from 'react'

const Profile = ({name,email}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  )
}

export default Profile
