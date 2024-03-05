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
        
        addsong: {
            label: 'Add Songs',
            id: '#addsong',
            isActive: false,
            items: [
                {
                    label: 'Google',
                    key: 'Google',
                    bgImage: '',
                },
                {
                    label: 'YouTube',
                    key: 'YouTube',
                    bgImage: '',
                },
               
            ]
        },
    }
}

module.exports = {
    appData
}