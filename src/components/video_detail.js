import React from 'react';
import './../style/video_detail.css'

const VideoDetail = ({video}) => {

if(!video)
  return <div>Loading...</div>;

const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;
const title = video.snippet.title;
const desc = video.snippet.description;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="detail">
        <div className="video-detail-title">{title}</div>
        <div>{desc}</div>
      </div>
    </div>

  );

// return <div></div>;
};

export default VideoDetail;
