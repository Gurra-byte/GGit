import React from 'react';
import Article from './Article';
import {useState, useEffect} from 'react';


const ArticleWindow = ({artilces}) => {

    const [page, setPage] = useState(1);
    const [articleList, setArticleList] = useState([]);

    
    const renderArticles = (articleList, page) =>{
        let output = [];
        switch(page)
        {
            case 1:
                for (let index = 0; index < 12; index++) {
                   output.push(articleList[index]);
                    
                }
                
                break;
            case 2:
                for (let index = 16; index < 32; index++) {
                    output.push(articleList[index]);
                     
                 }
                
                break;
            case 3:
                for (let index = 32; index < 48; index++) {
                    output.push(articleList[index]);
                     
                 }

                break;
            case 4:
                for (let index = 48; index < 64; index++) {
                    output.push(articleList[index]);
                     
                 }

                break;
            default:
                for (let index = 0; index < 16; index++) {
                    output.push(articleList[index]);
                     
                 }

                break;
        }
        return output;
    }
    
    useEffect(()=>{
        setArticleList(
            artilces.map((article)=>(
            <Article 
                key={article.id}
                article={article}
            />
            )
        ))

    },[])

    return (
        <div className='articleWindow'>
            {renderArticles(articleList, page)}
            
        </div>
    )

    
}


export default ArticleWindow
