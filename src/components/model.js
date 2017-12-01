import React from 'react';

const Model = ({play, closeModel}) => {
    let isHide = 'hide';
    let url = '';
    if(play && play.id){
        if(play.id.videoId){
            // search result
            url = `https://www.youtube.com/embed/${play.id.videoId}?autoplay=1`;
        }else{
            url = `https://www.youtube.com/embed/${play.id}?autoplay=1`;
        }
        isHide = '';
    }

    let details = '';
    if(play.snippet){
        details = (
            <div className="details">
                <div className="title">{play.snippet.title}</div>
                <div className="descript"><pre>{play.snippet.description}</pre></div>
            </div>
        );
    }

    return (
        <div className={isHide}> 
            <div className="model-overlay" onClick={closeModel}></div>
            <div className="video-detail">
                <div className="embed-video">
                    <iframe title='test' className="" src={url} allowFullScreen></iframe>
                </div>
                {details}
            </div>
        </div>
    );
};

export default Model;