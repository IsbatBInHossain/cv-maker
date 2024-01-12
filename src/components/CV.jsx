import { CVHeader } from './CVHeader'
import { MainBody } from './MainBody'
import { Sidebar } from './Sidebar'

export const CV = () => {
  return (
    <section className=' flex justify-center items-center py-12'>
      <div id='cv' className=' h-[1173px] w-[794px] bg-background p-16'>
        <CVHeader />
        <div className=' mt-16 grid grid-cols-3'>
          <Sidebar />
          <MainBody />
        </div>
      </div>
    </section>
  )
}
