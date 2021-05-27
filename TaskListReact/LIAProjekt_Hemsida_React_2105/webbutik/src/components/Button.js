import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {


    return (
        <button className='btn'
        onClick = {onClick} 
        style={{backgroundColor: color}}>
            {text}
        </button>  
    )
}

Button.deafaultProps = {
    color: 'steelBlue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
export default Button

//https://www.youtube.com/watch?v=w7ejDZ8SWv8
//39:11