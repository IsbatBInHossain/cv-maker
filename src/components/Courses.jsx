import { Headline } from './Headline'
import { SiHackerrank, SiUdemy } from 'react-icons/si'

export const Courses = () => {
  return (
    <div className=' mr-6 mt-4'>
      <Headline title='Certifications' />
      <div className='flex gap-2 mt-2'>
        <SiUdemy className=' text-secondary text-5xl' />
        <div className=''>
          <h3 className=' font-semibold text-xs'>Udemy</h3>
          <a
            href='https://www.udemy.com/certificate/UC-8ebeba26-bf0d-42f9-9663-12195d7fe629/'
            target='_blank'
            rel='noopener noreferrer'
            className=' text-ash text-[10px] leading-tight'
          >
            The Complete 2023 Web Development Bootcamp by Dr. Angela Yu
          </a>
        </div>
      </div>
      <div className='flex gap-2 mt-4'>
        <SiHackerrank className=' text-secondary text-2xl' />
        <div className=''>
          <h3 className=' font-semibold text-xs'>HackerRank</h3>
          <a
            href='https://www.hackerrank.com/certificates/96b4d9b9e147'
            target='_blank'
            rel='noopener noreferrer'
            className=' text-ash text-[10px] leading-tight'
          >
            Software Engineer Certificate
          </a>
        </div>
      </div>
    </div>
  )
}
