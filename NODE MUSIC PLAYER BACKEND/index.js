import express from 'express';
import bodyParse from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var songs = [];

// GET ALL SONGS
app.get('/songs', (req, res) => {
  res.json(songs);
});

// ADD RANDOM SONG
app.get("/random", (req, res) => {
    const randomIndex= Math.floor(Math.random() * songs.length);
    res.json(songs[randomIndex]);
});

// GET SPECIFIC SONG
app.get("/songs/:id", (req, res) => {
    const songId = parseInt(req.params.id);
    const foundSong = jokes.find((song) => song.id === songId);
    res.json(foundSong);
});

// GET SAME GENRE SONGS
app.get("/filter", (req, res) => {
    const type = req.query.type;
    const filteredSongs = songs.filter((song) => song.songType === type);
    res.json(filteredSongs);
});
  

// ADD A SONG
app.post("/create", (req, res) => {
    const newSong = {
        id: songs.length + 1,
        songName: req.body.songName,
        artist: req.body.artist,
        songType: req.body.songType,
        songLength: req.body.songLength,
};
    jokes.push(newSong);
    res.json(newSong);
      
});
    
// EDIT A SONG

