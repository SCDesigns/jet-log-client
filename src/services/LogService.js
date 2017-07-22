const API_URL = process.env.REACT_APP_API_URL;

const LogService = {
  fetchLogs: () => {
    return fetch(`${API_URL}/logs`)
      .then(response => response.json())
  }
}

export default LogService;
