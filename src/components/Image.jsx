import React from 'react';
import '../assets/styles/index.css';

const Image = ({image}) => {
    const { largeImageURL, likes, previewURL, tags, views } = image;

    const imageStyle ={
        minHeight: 'fit-content', 
        maxHeight: '160px' 
    }
    const cardStyle={
        height: '300px'
    }

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" style={cardStyle}>
                <img src={previewURL} alt={tags} className="card-img-top" style={imageStyle} />
                <div className="card-body d-flex p-0 align-items-center justify-content-around">
                    <p className="card-text badge badge-primary m-0"><span className="badge badge-light">{likes}</span> Likes</p>
                    <p className="card-text badge badge-dark m-0 "><span className="badge badge-light">{views} </span> Views</p>
                </div>
                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-danger btn-block"
                    >See Image</a>
                </div>
            </div>
        </div>
     );
}
 
export default Image;