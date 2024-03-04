const appData = {
    appQuote: 'Find the best songs',
    homeScreen: {
        
        myPlaylist: {
            label: 'My Playlist',
            id: '#myPlaylist',
            isActive: true,
            items: [
                {
                    label: 'Rock',
                    key: 'rock',
                    bgImage: ''
                },
                {
                    label: 'Relaxing',
                    key: 'jazz',
                    bgImage: ''
                },
                {
                    label: 'Cinematic',
                    bgImage: '',
                    key: 'cinematic'
                },
                {
                    label: 'Accoustic',
                    key: 'accoustic',
                    bgImage: ''
                }
            ]
        },
        
        download: {
            label: 'Download',
            id: '#download',
            isActive: false,
            items: [
                {
                    label: 'Top Charts',
                    key: 'Top Charts',
                    bgImage: '',
                    url:'https://www.google.com/search?client=firefox-b-d&q=download+song'
                },
                {
                    label: 'Moods',
                    key: 'Moods',
                    bgImage: '',
                    url:'https://www.google.com/search?client=firefox-b-d&q=download+song'
                },
                {
                    label: 'New Releases',
                    key: 'New Releases',
                    bgImage: '',
                    url:'https://www.google.com/search?client=firefox-b-d&q=download+song'
                },
                {
                    label: 'Trending Now',
                    key: 'Trending Now',
                    bgImage: '',
                    url:'https://www.google.com/search?client=firefox-b-d&q=download+song'
                },
               
            ]
        },
    }
}

module.exports = {
    appData
}