import PropTypes from 'prop-types'

export const Skill = ({ name }) => {
  return (
    <div className=' border border-box text-box rounded-md text-[10px] px-1 mt-1 py-0.5'>
      {name}
    </div>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
}
