import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from 'react-icons/fa6'
import { personalInfo } from '../data'

export const HeaderList = () => {
  const { email, github, linkedin, portfolio, phone, location } = personalInfo
  return (
    <ul className='grid grid-cols-3 gap-x-4 grid-rows-2 text-[9px]'>
      <li className='text-ash flex items-center gap-1 pt-3'>
        <FaEnvelope className='text-secondary' /> <span>{email}</span>
      </li>
      <li className='text-ash flex items-center gap-1 pt-3'>
        <FaPhone className='text-secondary' /> <span>{phone}</span>
      </li>
      <li className='text-ash flex items-center gap-1 pt-3'>
        <FaLocationDot className='text-secondary' /> <span>{location}</span>
      </li>
      <li className='text-ash flex items-center gap-1'>
        <FaLinkedin className='text-secondary' />{' '}
        <a href={`https://www.linkedin.com/in/${linkedin}`}>{linkedin}</a>
      </li>
      <li className='text-ash flex items-center gap-1'>
        <FaGithub className='text-secondary' />{' '}
        <a href={`https://github.com/${github}`}>{github}</a>
      </li>
      <li className='text-ash flex items-center gap-1'>
        <FaGlobe className='text-secondary' />{' '}
        <a href={`https://${portfolio}`}>Portfolio</a>
      </li>
    </ul>
  )
}
