import { jobInfo, projects } from '../data'
import { Headline } from './Headline'
import ProjectCard from './ProjectCard'

export const MainBody = () => {
  return (
    <div className='col-span-2'>
      <Headline title='Career Objectives' />

      <p className='italic tracking-tight mt-2 text-[12px]'>
        {jobInfo['career-objective']}
      </p>
      <Headline title='Projects' classes=' mt-4 mb-2 ' />
      {projects.map(project => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  )
}
