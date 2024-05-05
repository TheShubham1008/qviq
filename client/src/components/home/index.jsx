import React from 'react'
import { useAuth } from '../../contexts/authContext'
// {currentUser.displayName ? currentUser.displayName : currentUser.email}
const Home = () => {
    const { currentUser } = useAuth()
    return (
        <>
        <div className='text-2xl font-bold pt-14'>Name :{currentUser.displayName}</div>
        <div className='text-2xl font-bold pt-14'>email :{currentUser.email}</div>
        <div className='text-2xl font-bold pt-14'>phone :{currentUser.phone}</div>
        <div className='text-2xl font-bold pt-14'>profile photo :{currentUser.photoUrl}</div>
        </>
    )
}

export default Home