import { education } from '../data'
import { Headline } from './Headline'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

export const Education = () => {
  return (
    <div className='mr-6'>
      <Headline title='Education' classes='mt-4' />
      {education.map(edu => (
        <div className='mt-2' key={edu.degree}>
          <h3 className=' font-semibold'>{edu.degree}</h3>
          <h4 className=' text-secondary font-bold text-xs'>
            {edu.institution}
          </h4>
          <div className=' flex justify-between text-xs text-ash mt-2'>
            <p className=' flex gap-1 items-center'>
              <FaCalendarAlt /> <span className='inline'>{edu.duration}</span>
            </p>
            <p className=' flex gap-1 items-center pr-6'>
              <FaLocationDot /> <span className='inline'>{edu.location}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
