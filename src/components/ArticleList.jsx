import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ArticleCard from './ArticleCard';
import AOS from 'aos';
import ErrorDisplayer from './ErrorDisplayer';

function ArticleList() {
    const [articleList, setList] = useState([]);
    const [err, setError] = useState(false);

    useEffect(() => {
        AOS.init();
        console.log('in effect')
        Axios.get('http://localhost:8000')
        .then((res) => {
            setList(res.data);
        })
        .catch((err) => {
            console.log(err)
            setError(true)
        })
    }, []);

    console.log(articleList)

    if (err) {
        return <ErrorDisplayer />
    } else {
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
}

export default ArticleList;
