import React from 'react' ;
import Card from '../Card';

class SearchBar extends React.Component{

    state = {
        searchValue :'' 
    }

    onSearchChange = (event) => {
        this.setState({searchValue : event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault() ;
        this.props.onFormSubmit(this.state.searchValue)
    }
    render(){
        return(
            <Card>
                <div>
                    <form onSubmit = {this.onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Search Videos then press enter</label>
                            <input
                              type="text"
                              className="form-control" 
                              id="exampleInputEmail1"
                              value = {this.state.searchValue}
                              onChange = {this.onSearchChange}
                             />
                             <button type="submit" className="btn btn-primary">Search</button>
                            
                        </div>
                        
                    </form>
                </div>
            </Card>
        )
    }
}

export default SearchBar ;