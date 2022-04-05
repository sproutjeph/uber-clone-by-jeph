import React from 'react'
import ActionButtons from './ActionButtons'
import ActionHeader from './ActionHeader'

const ActionItems = () => {
  return (
    <div className="flex-1 bg-white p-4">
      <ActionHeader />
      <ActionButtons />
    </div>
  )
}

export default ActionItems
