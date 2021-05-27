import React from 'react';
import Article from './Article'


const ArticleWindow = ({artilces}) => {
    return (
        <div className='articleWindow'>
            {artilces.map((article)=>(
                <Article 
                    key={article.id}
                    article={article}
                />
            )
            
            )}
            
        </div>
    )
}


export default ArticleWindow
