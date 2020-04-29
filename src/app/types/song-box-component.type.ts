/* return data when click */
export interface SongBoxOnClickEmit {
  stopLoading: () => void;
  id: number | string;
}