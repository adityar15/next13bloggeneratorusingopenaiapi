"use client"
import React from 'react'
import { useAppSelector } from '../utils/client/store/hooks'
import { selectUser } from '../utils/client/store/userSlice'
import Image from 'next/image'


const Avatar = () => {

    const user = useAppSelector(selectUser)

  return (
    <div className="w-9 h-9 relative rounded-full overflow-hidden">
        {user && <Image alt={user.name} src={user.avatar} fill />}
    </div>
  )
}

export default Avatar