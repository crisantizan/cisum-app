// _id: '5e948c09b6065a001e40f2c5';
// coverImage: {
//   id: 'cisum/artists/5e948c09b6065a001e40f2c5/vcz1gsfuxt9og6rrsfja';
//   path: 'https://res.cloudinary.com/crisantizan/image/upload/c_fill,h_350,w_250/v1/cisum/artists/5e948c09b6065a001e40f2c5/vcz1gsfuxt9og6rrsfja';
// };
// name: 'Trivium';
// description: 'Trivium is an American heavy metal band from Orlando, Florida, formed in 1999.';
// createdAt: '2020-04-13T15:58:01.785Z';
// updatedAt: '2020-04-13T15:58:01.785Z';

import { Asset } from './shared.type';

export interface Artist {
  _id: string;
  coverImage: Asset;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
