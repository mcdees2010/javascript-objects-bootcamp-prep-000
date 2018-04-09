var playlist = {madonna: "Vogue"}
 
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  playlist;
}