var playlist = {madonna: "Vogue"}
 
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {'Slowdive': 'Alison'})
  Object.assign({}, playlist, {'My Bloody Valentine': 'Sometimes'})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  playlist;
}