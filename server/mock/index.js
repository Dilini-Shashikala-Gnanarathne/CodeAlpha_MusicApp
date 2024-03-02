const appData = {
    appQuote: 'Find the best music for your code',
    homeScreen: {
        commercial: {
            label: 'Commercial',
            id: '#commercial',
            isActive: true,
            items: [
                {
                    label: 'Top Charts',
                    key: 'Top Charts',
                    bgImage: ''
                },
                {
                    label: 'Moods',
                    key: 'Moods',
                    bgImage: ''
                },
                {
                    label: 'New Releases',
                    key: 'New Releases',
                    bgImage: ''
                },
                {
                    label: 'Personalized ',
                    key: 'Personalized Playlists',
                    bgImage: ''
                },
                {
                    label: 'Instrumental',
                    bgImage: ''
                },
                {
                    label: 'Trending Now',
                    key: 'Trending Now',
                    bgImage: ''
                },
                {
                    label: 'Regional Music',
                    key: 'Regional Music',
                    bgImage: ''
                }
            ]
        },
        freelicense: {
            label: 'Free License',
            id: '#free-license',
            isActive: false,
            items: [
                {
                    label: 'Rock',
                    key: 'rock',
                    bgImage: ''
                },
                {
                    label: 'Jazz',
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
        }
    }
}

module.exports = {
    appData
}