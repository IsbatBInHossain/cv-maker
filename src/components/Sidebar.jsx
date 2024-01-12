import { Courses } from './Courses'
import { Education } from './Education'
import { Technical } from './Technical'

export const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <Technical />
      <Education />
      <Courses />
    </div>
  )
}
