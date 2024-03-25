import { FaCalendarAlt } from 'react-icons/fa'
import { jobInfo } from '../../data'
import { Headline } from '../Headline'
import { FaLocationDot } from 'react-icons/fa6'
import LanguageSkill from './LanguageSkill'

export const ElectricalBody = () => {
  return (
    <div className='col-span-2'>
      <Headline title='Career Objectives' />

      <p className='italic tracking-tight mt-2 text-[12px]'>
        {jobInfo['career-objective']}
      </p>

      <Headline title='Thesis' classes=' mt-4 ' />

      <h4 className=' font-semibold text-[14px] text-secondary  mt-4 mb-2'>
        Designing Digital FM Modulator and Demodulator Circuit
      </h4>
      <ul className=' text-[12px] list-disc'>
        <li>
          Conducted in-depth research and experimentation to design and develop
          a digital FM modulator and demodulator circuit as part of the thesis
          project.
        </li>
        <li>
          Implemented theoretical knowledge of signal processing and modulation
          techniques to design an efficient and reliable circuit for FM signal
          transmission and reception.
        </li>
        <li>
          Successfully tested and validated the functionality of the circuit
          through simulations showcasing proficiency in circuit design and
          analysis.
        </li>
      </ul>
      <Headline title='Industrial Training' classes=' mt-4 ' />

      <h4 className=' font-semibold text-[14px] text-secondary mt-4'>
        Bangladesh Betar
      </h4>
      <div className=' flex gap-6 text-[10px] text-ash mt-2'>
        <p className=' flex gap-1 items-center'>
          <FaCalendarAlt /> <span className='inline'>May,2017 - June,2017</span>
        </p>
        <p className=' flex gap-1 items-center pr-6'>
          <FaLocationDot /> <span className='inline'>Rajshahi</span>
        </p>
      </div>
      <ul className=' text-[12px] list-disc mt-2'>
        <li>
          Participated in a hands-on industrial training program at Bangladesh
          Betar, gaining practical experience in radio broadcasting and
          telecommunications.
        </li>
        <li>
          Collaborated with engineering teams in troubleshooting and maintaining
          broadcasting equipment, honing skills in equipment diagnosis and
          repair.
        </li>
      </ul>
      <LanguageSkill />

      {/* <Headline title='Field of expertise' classes=' mt-4 ' />

      <ul className='text-secondary font-semibold text-[14px] mt-4'>
        <li>Electromagnetic Field</li>
        <li>Power System</li>
        <li>Semiconductor Physics</li>
        <li>Wave Propagation</li>
      </ul> */}
    </div>
  )
}
