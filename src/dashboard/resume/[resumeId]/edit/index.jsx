import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormDetails from './components/FormDetails';
import PreviewResume from './components/PreviewResume';
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext';
import Dummy from '../../../../data/Dummy';
import { resume } from 'react-dom/server';
const EditResume = () => {

  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();
   useEffect(() => {
      setResumeInfo(Dummy);
   },[])

  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        <FormDetails />
        <PreviewResume />
      </div>
    </ResumeInfoContext.Provider>
    
  )
}

export default EditResume