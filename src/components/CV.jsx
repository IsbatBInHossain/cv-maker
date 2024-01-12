import { CVBody } from './CVBody'
import { CVHeader } from './CVHeader'

export const CV = () => {
  return (
    <section className=' flex justify-center items-center py-12'>
      <div id='cv' className=' h-[1173px] w-[794px] bg-background p-16'>
        <CVHeader />
        <CVBody />
      </div>
    </section>
  )
}
