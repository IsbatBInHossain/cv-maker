import { projects } from '../data'
import { Headline } from './Headline'
import ProjectCard from './ProjectCard'

export const MainBody = () => {
  return (
    <div className='col-span-2'>
      <Headline title='Career Objectives' />

      <p className='italic tracking-tight mt-2'>
        Results-driven{' '}
        <span className='border-b-2 border-blue-500'>
          Full Stack Web Developer
        </span>{' '}
        with a passion for creating dynamic and user-centric applications.
        Seeking opportunities to leverage strong technical skills and creative
        problem-solving abilities in a challenging environment.
      </p>
      <Headline title='Projects' classes=' mt-4 ' />
      {projects.map(project => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  )
}
