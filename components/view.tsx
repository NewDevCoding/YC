import React from 'react'
import Ping from '@/components/ping'

const View = ({ id } : {id: string}) => {
  return (
    <div className='view-container'>

        <div className='absolute -top-2 -right-2'>
            <Ping />
        </div>

        <p className='view-text'>
            <span className='font-black-300'>100 views</span>
        </p>

    </div>
  )
}

export default View