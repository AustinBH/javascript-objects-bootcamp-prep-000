var playlist = {
  Foreigner: "Hot Blooded",
  Ted Nugent: "Cat Scratch Fever",
  The Police: "So Lonely",
  The Cars: "My Best Friend's Girl"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, artistName, songTitle)
}
