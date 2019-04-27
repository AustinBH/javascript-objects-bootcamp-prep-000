var playlist = new Object({'The Police': "So Lonely" });

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist[artistName]
  return playlist
}
