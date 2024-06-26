interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number
}
 
const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 35,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}




// ##### destructuring objects #####

const song = 'New Song';

const {song: anotherSong, songDuration: duration, details 
                                                // details: {author}    
                                                            } = audioPlayer;
const { author } = details

// console.log('Song: ', audioPlayer.song);
console.log('Song ', anotherSong)
// console.log('Duration: ', audioPlayer.songDuration);
console.log('Duration ', duration);
// console.log('Author: ', audioPlayer.details.author);
console.log('Author ', author)




// ##### destructuring arrays #####

const [ , , Goku = 'Not Found' ]: string[] = [ 'Vegeta', 'Trunks'];

console.error('Personaje 3:', Goku)

export {}