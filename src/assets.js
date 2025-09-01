export default {
    'audio': {
        boom: {
            key: 'sound',
            args: ['assets/boom.wav']
        },
    },
    // 'image': {
    //     spikes: {
    //         key: 'spikes',
    //         args: ['assets/spikes.png']
    //     },
    // },
    'spritesheet': {
        mech: {
            key: 'mech',
            args: ['assets/orangemech64.png', {
                frameWidth: 64,
                frameHeight: 64,
            }]
        },
        ships: {
            key: 'ships',
            args: ['assets/ships.png', {
                frameWidth: 64,
                frameHeight: 64,
            }]
        },
        tiles: {
            key: 'tiles',
            args: ['assets/tiles.png', {
                frameWidth: 32,
                frameHeight: 32
            }]
        },
    }
};