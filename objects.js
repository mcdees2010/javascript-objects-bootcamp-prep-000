var playlist = {madonna: "Vogue"}
 
function updatePlaylist(playlist, artistName, songTitle) {
 playlist['Slowdive'] = 'Alison';
 
    return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  playlist;
}