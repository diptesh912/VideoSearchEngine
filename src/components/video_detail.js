import React from "react";


export default class VideoDetail extends React.Component{	

	
	render() {
		if(!this.props.video)
		{
			return ( <div> Loading...</div>);
		}
		else
		{
		const video = this.props.video;
		const videoId= video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}`; 
		return(
              <div className="video-detail col-md-8 ">
                   <div className="embed-responsive embed-responsive-16by9"> 
                       <iframe src={url} className="embed-responsive-item"> </iframe>
                   </div>
                   <div className="details"> 
                   		<div> {video.snippet.title}</div>
                   		<div>{video.snippet.description}</div>
                   </div>
               </div>
			);
			}
	}
}

