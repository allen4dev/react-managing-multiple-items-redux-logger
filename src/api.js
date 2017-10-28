const baseURL = 'https://api.soundcloud.com';
const CLIENT_ID = process.env.REACT_APP_SC_CLIENT_ID;

const api = {
  users: {
    async searchUsers(term) {
      const url = `${baseURL}/users?q=${term}&limit=12&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const users = response.json();

      return users;
    },

    async getUserTracks(id) {
      const url = `${baseURL}/users/${id}/tracks?limit=20&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const tracks = response.json();

      return tracks;
    },
  },
};

export default api;
