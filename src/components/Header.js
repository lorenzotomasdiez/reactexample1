import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, addTask}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='ADD' addTask = {addTask}/>
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
    title:PropTypes.string.isRequired
}
export default Header
