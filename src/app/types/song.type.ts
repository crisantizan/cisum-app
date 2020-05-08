/** minimized data of a song */
export interface SongMin {
  album: {
    _id: string;
    artist: {
      name: string;
      _id: string;
    };
  };
  id: string;
  name: string;
  _id: string;
}
