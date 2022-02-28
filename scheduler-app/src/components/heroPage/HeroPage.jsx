import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { UserPage } from '../userPage/UserPage';

export const HeroPage = () => {
  
  const {userState} = useContext(UserContext);
  
  if(userState)
  return (
    <UserPage />
  )
  else
  return(
    <div className='heroPage'>
      <h2 className='pageName'>Scheduler</h2>
      <p className='pageDescription'>Quick way to fill out the schedule and <span>compare</span> it with others</p>
    </div>
  )
}
