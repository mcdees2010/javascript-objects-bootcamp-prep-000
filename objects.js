var playlist = {madonna: "Vogue"}

var playlist = {aristName, songTitle}
 
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {'Slowdive': 'Alison'})
  Object.assign({}, playlist, {'My Bloody Valentine': 'Sometimes'})
  Object.assign({}, playlist, {'Phil Ochs': "Here's to the State of Mississippi"})
  playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  playlist;
}