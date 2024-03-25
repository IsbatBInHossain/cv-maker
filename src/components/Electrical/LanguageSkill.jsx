import { Headline } from '../Headline'

const LanguageSkill = () => {
  return (
    <>
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
    </>
  )
}

export default LanguageSkill
