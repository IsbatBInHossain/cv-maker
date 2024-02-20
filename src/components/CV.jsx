import { CVHeader } from './CVHeader'
import ElectricalCV from './Electrical/ElectricalCV'
import { MainBody } from './MainBody'
import { Sidebar } from './Sidebar'

export const CV = () => {
  return (
    <div id='cv' className=' h-[1123px] w-[794px] bg-background p-16'>
      <CVHeader />
      {/* <div className=' mt-16 grid grid-cols-3'>
        <Sidebar />
        <MainBody />
      </div> */}
      <ElectricalCV />
    </div>
  )
}
