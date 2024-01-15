import { Skill } from './Skill'
import { skills } from '../data'
import { Headline } from './Headline'

export const Technical = () => {
  return (
    <div className='mr-6'>
      <Headline title='Technical Skill' />
      {Object.entries(skills).map(([type, skillSet]) => (
        <>
          <h4 className=' font-bold text-xs mt-2 capitalize'>{type}</h4>
          <div className=' flex flex-wrap mt-2 gap-1'>
            {skillSet.map(skill => (
              <Skill name={skill} key={skill} />
            ))}
          </div>
        </>
      ))}
    </div>
  )
}
