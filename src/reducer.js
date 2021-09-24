export const initialState = {
  user: null,
  supported: true,
  playlist: [],
  playling: false,
  item: null,
  token: null,
  recentlyPlayed: null,
  artists: null,
  songs: null,
  currentTrack: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_SUPPORT":
      return {
        ...state,
        supported: action.supported,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_RECENTLY_PLAYED":
      return {
        ...state,
        recentlyPlayed: action.recentlyPlayed,
      };
    case "SET_ARTISTS":
      return {
        ...state,
        artists: action.artists,
      };
    case "SET_SONGS":
      return {
        ...state,
        songs: action.songs,
      };
    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrack: action.currentTrack,
      };

    default:
      return state;
  }
};

export default reducer;
