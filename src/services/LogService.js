const API_URL = process.env.REACT_APP_API_URL;

const LogService = {
  fetchLogs: () => {
    return fetch(`${API_URL}/logs`)
      .then(response => response.json())
  },

  createLog(log) {
    const request = {
        method: 'POST',
        body: JSON.stringify({
          log: log
        }),
        headers: {
          'Content-Type': 'application/json',
        }
    };
    
    return fetch(`${API_URL}/logs`, request)
      .then(response => response.json())
  }
}

export default LogService;
