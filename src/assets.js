export default {
    'audio': {
        boom: {
            key: 'sound',
            args: ['assets/boom.wav']
        },
        enemyshot: {
            key: 'enemyshot',
            args: ['assets/enemyshot.wav']
        },
        pop: {
            key: 'pop',
            args: ['assets/pop1.wav', 'assets/pop2.wav', 'assets/pop3.wav', 'assets/pop4.wav', 'assets/pop5.wav', 'assets/pop6.wav', 'assets/pop7.wav', 'assets/pop8.wav']
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