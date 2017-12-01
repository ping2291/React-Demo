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

    return (
        <div className={isHide}> 
            <div className="model-overlay" onClick={closeModel}></div>
            <div className="video-detail">
                <div className="embed-video">
                    <iframe title='test' className="" src={url} allowFullScreen></iframe>
                </div>
                <div className="details">
                    <div>{'video.snippet.title'}</div>
                    <div>{'video.snippet.description'}</div>
                </div>
            </div>
        </div>
    );
};

export default Model;