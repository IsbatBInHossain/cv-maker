import PropTypes from 'prop-types'
import { FaLink, FaCode } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <div className=' mb-3'>
      <h3 className=' text-xl font-semibold'>{project.name}</h3>
      <div className='flex items-center text-secondary'>
        <a
          href={project.links.website}
          className=' font-bold flex items-center'
        >
          <FaLink className='mr-1' />
          {' Website'}
        </a>
        <span className=' font-bold mx-1'>|</span>
        <a href={project.links.code} className=' font-bold flex items-center'>
          <FaCode className='mr-1' />
          {' Code'}
        </a>
      </div>
      <ul className=' list-disc text-sm text-ash flex flex-col gap-2 mt-3'>
        <li>
          <span className='font-bold'>Features:</span>{' '}
          <p className='inline'>{project.desc}</p>
        </li>

        <li>
          <span className='font-bold'>Tech Stack:</span>{' '}
          {project['tech-stack'].map(tech => `${tech}, `)}
        </li>
      </ul>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    // features: PropTypes.arrayOf(PropTypes.string).isRequired,
    'tech-stack': PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      website: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectCard