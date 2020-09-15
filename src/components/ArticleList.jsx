import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ArticleCard from './ArticleCard';

function ArticleList() {
    const [articleList, setList] = useState([]);

    useEffect(() => {
        console.log('in effect')
        Axios.get('http://localhost:8000')
        .then((res) => {
            setList(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    console.log(articleList)

    return (
        <ul>
           {articleList.map((article, index) => {
               return <li key={index}>
                   <ArticleCard title={article.title} image={article.image} link={article.link} num={index} key={index}/>
               </li>
           })}
        </ul>
    );
}

export default ArticleList;
