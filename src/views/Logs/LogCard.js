import React from 'react'
// Material-UI
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {blueGrey800} from 'material-ui/styles/colors';

const LogCard = ({ log }) => (
  <div key={log.id}>
    <Card>

      <CardHeader
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

    </Card>
  </div>
)

export default LogCard;
