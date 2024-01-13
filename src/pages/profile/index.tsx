import { useSession } from 'next-auth/react'
import React from 'react'

const ProfilePage = () => {
    const {data}: any = useSession();

  return (
    <>
    <h1>ProfilePage</h1>
    <h2>{data?.user.fullname}</h2>
    </>

  )
}

export default ProfilePage