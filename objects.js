const playlist = {michael: 'thriller', elvis: 'something'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFrommPlayList(playlist,artistName){
  delete playlist[artistName]
}