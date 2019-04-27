import React from 'react' ;
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.css';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

    state = {
        searchValue :'' ,
        videos : [] ,
        currentVideo : null
    }

    onFormSubmit = async(keyWord) =>{
        const response = await youtube.get('/search' , {
            params : {
                q : keyWord
            }
        })
        this.setState({
            videos : response.data.items ,
             currentVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({currentVideo : video}) ;
        console.log('from app' , video) ;
    }

    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <SearchBar onFormSubmit = {this.onFormSubmit} />    
                    </div>

                    <div className='col-md-8' style={{marginTop:5}}>
                        
                        <VideoDetail video={this.state.currentVideo} />
                        
                    </div>

                    <div className='col-md-4' style={{marginTop:5}}>
                        <VideoList 
                            videos = {this.state.videos} 
                            onVideoSelect = {this.onVideoSelect}
                        />
                    </div>

                    
                </div>
            </div>
        )  ;
    }
}

export default App ;