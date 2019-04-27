var playlist = new Object({'The Police': "So Lonely" });

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, artistName, songTitle)
}
