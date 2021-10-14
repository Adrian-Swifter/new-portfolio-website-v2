import React, { Component } from 'react';
import ViewSDKClient from '../components/ViewSDKClient';
  
  class Main extends Component {
      componentDidMount() {
          const viewSDKClient = new ViewSDKClient();
          viewSDKClient.ready().then(() => {
              /* Invoke file preview */
              /* By default the embed mode will be Full Window */
              viewSDKClient.previewFile("pdf-div", {});
          });
      }
  
      render() {
          return <div id="pdf-div" className="full-window-div"/>;
      }
  }
  
  export default Main;
}
