import PropTypes from 'prop-types'

export const Headline = ({ title, classes }) => {
  return (
    <div className={`${classes} `}>
      <h2 className=' text-primary text-[17px] uppercase font-bold font-serif'>
        {title}
      </h2>
      <div className=' border-b-2 border-blue-500 mt-0.5'></div>
    </div>
  )
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
}
