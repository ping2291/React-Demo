import React from 'react';
import VideoList from './video_list';

const Content = ({videos}) => {
    return (
        <div className='content'>
            <div className='result'>
                <VideoList videos={videos} />
            </div>
        </div>
    );
}

export default Content;