const LogService = {
  fetchLogs: () => {
    return fetch('/logs')
      .then(response => response.json())
  }
}

export default LogService;
