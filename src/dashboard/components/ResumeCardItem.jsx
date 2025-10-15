import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeCardItem = ({item}) => {
  return (
    <div>
        <Link to={`/dashboard/resume/${item.resumeId}/edit`}>
        <div className='p-14 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-lg
        hover:scale-105 transition-all hover:shadow-md shadow-primary'>
            <Notebook />
        </div>
        <h2 className='text-center my-1'>{item.title}</h2>
    </Link>
    </div>
  )
}

export default ResumeCardItem