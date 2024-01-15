import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from 'react-icons/fa6'

export const HeaderList = () => {
  return (
    <ul className='grid grid-cols-3 gap-x-4 grid-rows-2 text-[9px]'>
      <li className='text-ash flex items-center gap-1 pt-3'>
        <FaEnvelope className='text-secondary' />{' '}
        <span>isbatbinhossain@gmail.com</span>
      </li>
      <li className='text-ash flex items-center gap-1 pt-3'>
        <FaPhone className='text-secondary' /> <span>+8801815-423827</span>
      </li>
      <li className='text-ash flex items-center gap-1 pt-3'>
        <FaLocationDot className='text-secondary' /> <span>Uttara, Dhaka</span>
      </li>
      <li className='text-ash flex items-center gap-1'>
        <FaLinkedin className='text-secondary' />{' '}
        <a href='https://www.linkedin.com/in/isbat-bin-hossain-94313b270/'>
          isbat-bin-hossain-94313b270/
        </a>
      </li>
      <li className='text-ash flex items-center gap-1'>
        <FaGithub className='text-secondary' />{' '}
        <a href='https://github.com/IsbatBInHossain'>IsbatBInHossain</a>
      </li>
      <li className='text-ash flex items-center gap-1'>
        <FaGlobe className='text-secondary' />{' '}
        <a href='https://isbat-bin-hossain.vercel.app/'>
          isbat-bin-hossain.vercel.app/
        </a>
      </li>
    </ul>
  )
}
