import { Headline } from './Headline'
import { FaTrophy } from 'react-icons/fa6'

export const Courses = () => {
  return (
    <div className=' mr-6 mt-4'>
      <Headline title='Certifications' />
      <div className='flex gap-2 mt-2'>
        <FaTrophy className=' text-secondary text-5xl' />
        <div className=''>
          <h3 className=' font-semibold text-xs'>Udemy</h3>
          <p className=' text-ash text-[10px]'>
            The Complete 2023 Web Development Bootcamp by Dr. Angela Yu
          </p>
        </div>
      </div>
    </div>
  )
}
