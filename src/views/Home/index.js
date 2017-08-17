import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={require('./welcome.png')} alt={"welcome"} width={"100%"} height={"100%"}/>
      </div>
    )
  }
}

export default Home;
