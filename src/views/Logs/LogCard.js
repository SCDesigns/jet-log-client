import React from 'react'
import { Link } from 'react-router-dom'

const LogCard = ({ log }) => (
  <div key={log.id}>
    {/* <Link to={`/logs/${log.id}`}> */}
      <h3>{log.name}</h3>
    {/* </Link> */}
    <p>{log.location}</p>
    <p>{log.description}</p>
  </div>
)

export default LogCard;
