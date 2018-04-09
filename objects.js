var playlist = {madonna: "Vogue"}
 
function updatePlaylist(playlist, artistName, songTitle) {
 playlist['Slowdive'] = 'Alison';
 playlist['My Bloody Valentine'] = 'Sometimes';
 return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  playlist;
}