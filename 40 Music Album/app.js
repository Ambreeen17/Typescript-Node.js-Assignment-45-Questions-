function favorite_albums(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(favorite_albums("Sami Yusuf", "Al Mu'allim", 5));
console.log(favorite_albums("Atif Aslam", "Ehsaas", 7));
console.log(favorite_albums("Abida Perven", "Heer", 12));
