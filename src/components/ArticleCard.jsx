import React from 'react';

function ArticleCard(props) {

    const { title, link } = props;
    const image = props.image ? `${props.image}` : 'https://kidsinsights.com/wp-content/uploads/2019/09/Globe-Graphic.png';

    return (
        <div className='articleCard'>
            <img src={`${image}`} 
            alt='related' 
            data-aos="zoom-in-left"
            data-aos-offset="150"
            data-aos-duration="2000"
            />
            <a href={`${link}`}>{`${title}`}<p>(external link)</p></a>
        </div>
    );
}

export default ArticleCard;