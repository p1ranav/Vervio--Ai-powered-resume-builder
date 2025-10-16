import React, { useContext } from 'react'
import  PersonalDetailsPreview  from './preview/PersonalDetailsPreview.jsx';
import { ResumeInfoContext } from '../../../../../../src/context/ResumeInfoContext.jsx';
import Summary from './preview/Summary.jsx';
import ExperiencePreview from './preview/ExperiencePreview.jsx';
import EducationPreview from './preview/EducationPreview.jsx';
import SkillsPreview from './preview/SkillsPreview.jsx';

const PreviewResume = () => {

    const {resumeInfo} = useContext(ResumeInfoContext);

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
     style={{
        borderColor: resumeInfo?.themeColor
     }}>
        {/* personal details */}
        <PersonalDetailsPreview resumeInfo = {resumeInfo} />
        {/* summary */}
        <Summary resumeInfo={resumeInfo} />
        {/* experience */}
        <ExperiencePreview resumeInfo={resumeInfo} />
        {/* education */}
        <EducationPreview resumeInfo={resumeInfo} />
        {/* skills */}
        <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  )
}

export default PreviewResume