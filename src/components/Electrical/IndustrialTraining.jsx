import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Headline } from '../Headline'
import { SiUdemy } from 'react-icons/si'

const IndustrialTraining = () => {
  return (
    <>
      <Headline title='Industrial Training' classes=' mt-4 ' />

      <h4 className=' text-secondary font-bold text-[12px] mt-4'>
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
      <Headline title='Thesis' classes=' mt-4 ' />

      <h4 className=' text-secondary font-bold text-[12px] mt-4 mb-2'>
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
      <Headline title='Language Skills' classes=' mt-4 ' />

      <ul className='text-[14px] mt-4'>
        <li>
          <span className='font-semibold'>English:</span> Fluent
        </li>
        <li>
          <span className='font-semibold'>Japanese:</span> Conversational
          (Self-taught, equivalent to JLPT N3 level)
        </li>
      </ul>
      <div className=' flex flex-col'>
        <h4 className=' font-semibold text-[14px] text-secondary my-2'>
          Related Experiences
        </h4>
        <ul className=' text-[12px] list-disc'>
          <li>
            Self-taught Japanese language proficiency through independent study
            and immersion in Japanese media, literature, and online resources.
          </li>
          <li>
            Actively engaged in language exchange communities and online forums
            to practice conversational Japanese and deepen cultural
            understanding.
          </li>
        </ul>
      </div>
      <Headline title='Coursework' classes=' mt-4 ' />
      <div className='flex gap-2 mt-2 items-center'>
        <SiUdemy className=' text-secondary text-5xl' />
        <div className=''>
          <h3 className=' font-semibold text-xs'>Udemy</h3>
          <a
            href='https://www.udemy.com/certificate/UC-c42fcf7d-af1f-4b07-a30c-3e43597f74de/'
            target='_blank'
            rel='noopener noreferrer'
            className=' text-ash text-[14px]'
          >
            Digital Signal Processing (DSP) From Ground Up™ in Python
          </a>
        </div>
      </div>
      {/* <Headline title='Field of expertise' classes=' mt-4 ' />

      <ul className='text-secondary font-semibold text-[14px] mt-4'>
        <li>Electromagnetic Field</li>
        <li>Power System</li>
        <li>Semiconductor Physics</li>
        <li>Wave Propagation</li>
      </ul> */}
    </>
  )
}

export default IndustrialTraining
