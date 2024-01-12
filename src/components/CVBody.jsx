import { MainBody } from './MainBody'
import { Sidebar } from './Sidebar'

export const CVBody = () => {
  return (
    <div className=' mt-16 grid grid-cols-3'>
      <Sidebar />
      <MainBody />
    </div>
  )
}
