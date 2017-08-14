import React from 'react'
import { Link } from 'react-router-dom'

const LogCard = ({ log }) => (
  <div key={log.id}>
    <h3>{log.name}</h3>
    <p>{log.location}</p>
    <p>{log.description}</p>
    <img className="Memory" src={log.memory} alt={log.name} />
  </div>
)

export default LogCard;
