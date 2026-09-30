import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()

  return (
    <div className="bg-gray-100 mx-auto w-full max-w-7xl">
      User: {userid}
    </div>
  )
}

export default User
