// var sampleNote = "C#*2";

var parseNote = function(noteGiven){
  var note = noteGiven.split("*");
  var beats = parseInt(note[1]) || 1;
  var noteObject = {}
  noteObject["pitch"] = note[0];
  noteObject["beats"] = beats;
  return noteObject
};

// var newSong = prompt("Please enter a song consisting of a string of notes:")
// var newSong = "C#*2 C#*2 C#*2 C#*2 C#*2";

var songArray = undefined;
var parseSong = function(songGiven) {
  var song = songGiven.split(" ");
  songArray = [];
  for(i=0; i < song.length; i++) {
    songArray.push(parseNote(song[i]));
  };
  return songArray
};

// playSong(parseSong(newSong), 400);

var loopSong = function(){
  var newSong = prompt("Please enter a song consisting of a string of notes:");
  if (!newSong) {
    alert("Seriously? You're no fun.")
  } else {
    playSong(parseSong(newSong), 400, loopSong);
  }
};

