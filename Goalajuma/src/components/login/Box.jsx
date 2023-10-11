import PropTypes from 'prop-types'

const Box = ({children, className}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired, 
  className: PropTypes.string,
};


export default Box