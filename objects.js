var playlist = {madonna: "Vogue", beyonce: "Halo", pink: "Try"}
 
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
function destructivelyUpdateObjectWithKeyAndValue(playlist, artistName, songTitle) {
  playlist['Slowdive'] = 'Alison'
  playlist['My Bloody Valentine'] = 'Sometimes'
  return playlist
}