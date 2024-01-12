import { Skill } from './Skill'
import { skills } from '../data'
import { Headline } from './Headline'

export const Technical = () => {
  return (
    <div className='mr-6'>
      <Headline title='Technical Skill' />
      <h4 className=' font-bold mt-2'>Languages</h4>
      <div className=' flex flex-wrap mt-2 gap-1'>
        {skills.languages.map(language => (
          <Skill name={language} key={language} />
        ))}
      </div>
      <h4 className=' font-bold mt-2'>Technologies</h4>
      <div className=' flex flex-wrap mt-2 gap-1'>
        {skills.technologies.map(technology => (
          <Skill name={technology} key={technology} />
        ))}
      </div>
      <h4 className=' font-bold mt-2'>Tools</h4>
      <div className=' flex flex-wrap mt-2 gap-1'>
        {skills.tools.map(tool => (
          <Skill name={tool} key={tool} />
        ))}
      </div>
      <h4 className=' font-bold mt-2'>Others</h4>
      <div className=' flex flex-wrap mt-2 gap-1'>
        {skills.others.map(other => (
          <Skill name={other} key={other} />
        ))}
      </div>
    </div>
  )
}
