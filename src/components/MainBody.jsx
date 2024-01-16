import { jobDetails, projects } from '../data'
import { Headline } from './Headline'
import ProjectCard from './ProjectCard'

export const MainBody = () => {
  return (
    <div className='col-span-2'>
      <Headline title='Career Objectives' />

      <p className='italic tracking-tight mt-2 text-[12px]'>
        {jobDetails['career-objective']}
      </p>
      <Headline title='Projects' classes=' mt-4 ' />
      {projects.map(project => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  )
}
