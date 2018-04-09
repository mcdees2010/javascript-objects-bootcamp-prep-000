var playlist = {madonna: "Vogue", beyonce: "Halo", pink: "Try"}
 
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
function destructivelyUpdateObjectWithKeyAndValue(playlist, artistName, songTitle) {
  updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
  
}

playlist