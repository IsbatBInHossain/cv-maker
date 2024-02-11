import PropTypes from 'prop-types'
import { FaLink, FaCode } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <div className=' mb-3'>
      <h3 className=' text-xs font-semibold'>{project.name}</h3>
      <div className='flex items-center text-secondary text-[10px]'>
        <a
          href={project.links.website}
          target='_blank'
          rel='noopener noreferrer'
          className=' font-bold flex items-center'
        >
          <FaLink className='mr-1' />
          {' Website'}
        </a>
        <span className=' font-bold mx-1'>|</span>
        <a
          href={project.links.code}
          target='_blank'
          rel='noopener noreferrer'
          className=' font-bold flex items-center'
        >
          <FaCode className='mr-1' />
          {' Code'}
        </a>
      </div>
      <ul className=' text-[10px] text-ash flex flex-col gap-2 mt-3'>
        <li>
          <span className='font-bold'>Features:</span>{' '}
          <ul className='list-disc ml-8'>
            {project.features?.map((feature, idx) => (
              <li key={idx} className=' text-[11px]'>
                {feature}
              </li>
            ))}
            {/* {project.desc} */}
          </ul>
        </li>

        <li>
          <span className='font-bold text-[11px]'>Tech Stack:</span>{' '}
          {project['tech-stack'].map((tech, index, array) => (
            <span className='text-[11px]' key={tech}>
              {index === array.length - 1 ? tech : tech + ', '}
            </span>
          ))}
        </li>
      </ul>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    'tech-stack': PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      website: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectCard
