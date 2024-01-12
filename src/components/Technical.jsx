import { Skill } from './Skill'
import { skills } from '../data'

export const Technical = () => {
  return (
    <div className='mr-9'>
      <h3 className=' text-primary text-xl uppercase font-bold font-serif'>
        Technical skill
      </h3>
      <div className=' border border-lines'></div>
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
    </div>
  )
}
