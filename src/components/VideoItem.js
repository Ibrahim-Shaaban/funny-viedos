import React from 'react' ;
import './VideoItem.css' ;

class VideoItem extends React.Component {

    onVideoClick = () => {
        this.props.onVideoChange(this.props.video)
    }

    render(){
        const {video} = this.props ;
        // console.log(video) ;
        return(
            <div className='row video-item' onClick ={this.onVideoClick}>
                <div className='col-md-7'>
                    <img 
                        className='item-img'
                        title={video.snippet.title} 
                        src={video.snippet.thumbnails.medium.url}
                        alt = {video.snippet.description}
                    />
                </div>
                <h6 className='col-md-5'>
                    {video.snippet.title}
                </h6>
                

            </div>
        )
    }
}

export default VideoItem;