import React from 'react'
import PropTypes from 'prop-types';

const Article = ({article}) => {
    return (
        <div className='article'>
            <h4>{article.name}</h4>
            {/* //börja här nedan fungerar ej. */}
            <p id='stock' style={article.stock != 0 ? {color:green}:{color:red}}>{article.stock != 0 ? 'In Stock' : 'Out of Stock'}</p>
            <h3>{article.price}:-</h3>
            
        </div>
    )
}


Article.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    description: PropTypes.string,
}
export default Article
