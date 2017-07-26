import React from 'react';

  const Logs = ({ logs }) => {
    const renderLogs = logs.map(log =>
      <p key={log.id}>{log.title}</p>
    )

    return (
      <div>
        {renderLogs}
      </div>
    )
  }

export default Logs;
