import React, { useState } from 'react'
import {PersonalDetail } from './Forms/PersonalDetail';
import { useContext } from 'react';
import {Button} from '@/components/ui/button'
import { ResumeInfoContext } from '../../../../../context/ResumeInfoContext';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';
const FormDetails = () => {
  const [activeformaction,setActiveFormIndex]=useState(0)
  return (
    <div>
      <div className='flex justify-between items-centre'>
        <Button  variant="outline"className="flex gap-2" size="sm"><LayoutGrid />Theme</Button>

        <div className='flex'>
          {activeformaction>1 && <Button size="sm" onClick={()=>setActiveFormIndex(activeformaction-1)}> <ArrowLeft /> </Button>}
          <Button className='flex gap-2' size="sm" onClick={()=>setActiveFormIndex(activeformaction+1)}>Next<ArrowRight/></Button>
  
          
        </div>
        <div>

        </div>
      </div>
      {/*  personal details */ }
      {activeformaction==1 ? 
      <PersonalDetail /> : null}
      {/* summary
      exp
      educatn details
      skills */}
    </div>
  )
}

export default FormDetails