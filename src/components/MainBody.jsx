import { jobInfo, projects } from '../data'
import { Headline } from './Headline'
import ProjectCard from './ProjectCard'

export const MainBody = () => {
  return (
    <div className='col-span-2'>
      <Headline
        title={jobInfo['career-objective'] ? 'Career Objective' : 'About me'}
      />

      <p className='italic tracking-tight mt-2 text-[12px]'>
        {jobInfo['career-objective']
          ? jobInfo['career-objective']
          : jobInfo.about}
      </p>
      <Headline title='Projects' classes=' mt-4 mb-4' />
      {projects.map(project => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  )
}
