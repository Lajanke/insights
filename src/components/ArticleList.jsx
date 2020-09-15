import React, { useState, useEffect } from 'react';
import Axios from 'axios';

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
            <p>list</p>
            <p>list</p>
            <p>list</p>
        </ul>
    );
}

export default ArticleList;
