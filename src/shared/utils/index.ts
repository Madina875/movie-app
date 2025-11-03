export const createImageUrl = (path: string | null) => {
  if (path) {
    return `https://image.tmdb.org/t/p/original${path}`;
  }
  return "https://t4.ftcdn.net/jpg/09/37/68/21/360_F_937682122_0ywqlMpvYBRFUxxrk6qGjFbeBZKss7td.jpg";
};
export const createImageAuthorUrl = (path: string | null) => {
  if (path) {
    return `https://image.tmdb.org/t/p/original${path}`;
  }
  return "https://favim.com/pd/s11/orig/8/876/8765/87654/moon-red-twitter-Favim.com-8765454.jpg";
};
