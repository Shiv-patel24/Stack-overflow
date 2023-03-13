import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/Rightasidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
        <div className='home-container-2'>
          <RightSidebar />
          <QuestionsDetails />
        </div>
    </div>
  )
}

export default DisplayQuestion
