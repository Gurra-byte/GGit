import React from 'react'
import PropTypes from 'prop-types';

const Article = ({article}) => {
    return (
        <div className='article'>
            <h3>{article.name}</h3>
            <h2>{article.price}:-</h2>
        </div>
    )
}


Article.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    description: PropTypes.string,
}
export default Article
