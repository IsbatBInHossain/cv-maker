import { projects } from '../data'
import { Headline } from './Headline'
import ProjectCard from './ProjectCard'

export const MainBody = () => {
  return (
    <div className='col-span-2'>
      <Headline title='Career Objectives' />
      <p className='italic tracking-tight'>
        To work in the IT sector of different local or multinational software
        companies of Bangladesh as{' '}
        <span className='border-b-2 border-blue-500'>
          Full Stack Web Developer
        </span>{' '}
        and grow rapidly with the latest technology and increasing
        responsibilities.
      </p>
      <Headline title='Projects' classes=' mt-4 ' />
      {projects.map(project => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  )
}
