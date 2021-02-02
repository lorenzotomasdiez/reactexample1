import PropTypes from 'prop-types';

const Button = ({color, text, addTask}) => {
    return (
        <button onClick={addTask} style={{
            backgroundColor: color}} className='btn'>
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
