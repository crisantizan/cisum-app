import { Asset } from './shared.type';

/** minimized data of a song */
export interface SongMin {
  album: {
    _id: string;
    coverImage: Asset;
    artist: {
      name: string;
      _id: string;
    };
  };
  id: string;
  name: string;
  _id: string;
  coverImage: Asset;
}
