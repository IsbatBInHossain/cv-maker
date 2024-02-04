import { jobInfo, personalInfo } from '../data'
import { HeaderList } from './HeaderList'

export const CVHeader = () => {
  return (
    <div className='relative items-center flex '>
      <div className='rounded-full border-2 border-lines overflow-hidden w-32 h-32 absolute'>
        <img
          src='/images/Profile.png'
          alt='profile'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-col ml-[200px]'>
        <h2 className='text-[25px] font-serif text-primary font-bold uppercase'>
          {personalInfo.name}
        </h2>
        <p className='font-bold capitalize text-primary text-[17px]'>
          {jobInfo.title}
        </p>
        <HeaderList />
      </div>
    </div>
  )
}
