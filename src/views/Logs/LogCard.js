import React from 'react'
import Likes from './Likes'
// Material-UI
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {blueGrey800} from 'material-ui/styles/colors';

const LogCard = ({ log }) => (
  <div key={log.id}>
    <Card>

      <CardHeader
        key={log.id}
        title={log.title}
        avatar={log.memory}
        actAsExpander={true}
        showExpandableButton={true}
        iconStyle={{color: blueGrey800}}
      />

      <CardMedia
        expandable={true}
        overlay={<CardTitle title={log.title} subtitle={log.location} />}
      >
        <img src={log.memory} alt={log.name} />
      </CardMedia>

      <CardText expandable={true}>
        <p>{log.description}</p>
      </CardText>

      <Likes logId={log.id} likes={log.likes}/>

    </Card>
  </div>
)

export default LogCard;
