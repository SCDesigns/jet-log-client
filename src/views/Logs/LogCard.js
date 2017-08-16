import React from 'react'
// Material-UI
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {tealA700} from 'material-ui/styles/colors';

const LogCard = ({ log }) => (
  <Card key={log.id}>

    <CardHeader
      title={log.title}
      avatar={log.memory}
      actAsExpander={true}
      showExpandableButton={true}
      iconStyle={{color: tealA700}}
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

  </Card>
)

export default LogCard;
