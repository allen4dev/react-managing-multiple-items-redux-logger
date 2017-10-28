const baseURL = 'https://api.soundcloud.com';
const CLIENT_ID = process.env.REACT_APP_SC_CLIENT_ID;

const api = {
  users: {
    async searchUsers(term) {
      const url = `${baseURL}/users?q=${term}&limit=10&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const users = response.json();

      return users;
    },
  },
};

export default api;
