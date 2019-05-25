import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { image: [] };
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 35f924528a013ca87f4d546a7b27352553684b004644d4790e3dce7774f3f5c2'
            }
        })

        this.setState({ image: response.data.results });
    }
    render() {
        return (<div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images ={this.state.image}/>
        </div>
        );
    }

}

export default App;