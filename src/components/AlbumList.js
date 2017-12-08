import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] }
    
    componentWillMount() {
        const sAPIUrl = 'https://rallycoding.herokuapp.com/api/music_albums';
        
        axios.get(sAPIUrl)
        .then(response => {
            console.log('got data from server ok');
            return this.setState({ albums: response.data });
        });
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList
;
