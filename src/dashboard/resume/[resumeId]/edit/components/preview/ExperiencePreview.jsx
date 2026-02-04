import React from 'react'

const ExperiencePreview = ({resumeInfo}) => {
  return (
    <div>
        <h2 className='text-center mb-2 font-bold text-sm'
        style={{
          color: resumeInfo?.themeColor
        }}
        >
            Professional Experience
        </h2>
        <hr style={{
            color: resumeInfo?.themeColor
        }} />

        {
            resumeInfo?.experience.map((experience, index) => (
                <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                 style={{
                    color:resumeInfo?.themeColor
                }}>{experience?.title}</h2>
                <h2 className='text-xs flex justify-between'>{experience?.companyName}, 
                {experience?.city}, 
                {experience?.state}
                <span>{experience?.startDate} To {experience?.currentlyWorking?'Present':experience.endDate} </span>
                </h2>
                <p className='text-xs my-2'>
                    {experience.workSummery}
                </p>
                {/* <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience?.workSummery}} /> */}
            </div>
            ))
        }
    </div>
  )
}

export default ExperiencePreview