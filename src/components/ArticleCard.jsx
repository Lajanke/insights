import React from 'react';

function ArticleCard(props) {

    const { title, link } = props;
    const image = props.image ? `${props.image}` : 'https://kidsinsights.com/wp-content/uploads/2019/09/Globe-Graphic.png';

    return (
        <div>
            <img src={`${image}`} alt='related' />
            <a href={`${link}`}>{`${title}`}<p>(external link)</p></a>
        </div>
    );
}

export default ArticleCard;