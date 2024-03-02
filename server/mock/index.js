const appData = {
    appQuote: 'Find the best songs',
    homeScreen: {
        
        freelicense: {
            label: 'Free License',
            id: '#free-license',
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
        commercial: {
            label: 'Commercial',
            id: '#commercial',
            isActive: false,
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
                    label: 'Trending Now',
                    key: 'Trending Now',
                    bgImage: ''
                },
               
            ]
        },
    }
}

module.exports = {
    appData
}