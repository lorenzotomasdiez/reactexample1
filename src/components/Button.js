import PropTypes from 'prop-types';

const Button = ({color, text, onAdd}) => {
    return (
        <button 
            style={{backgroundColor: color}} 
            className='btn'
            onClick={onAdd}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    title:'Send',
    color:'black'
}

Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button
