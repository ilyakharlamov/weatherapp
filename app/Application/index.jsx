import React from 'react';
import FluxComponent from 'flummox/component'
import NewCityForm from './NewCityForm';
import Tiles from './Tiles';

require('./style.sass');

export default class Application extends React.Component {
  render() {
    return <FluxComponent
      connectToStores="weatherapp"
      render={storeState => {
        return <div className="Application">
          <h1 className="Application__header">Weatherapp by ilya.kharlamov@gmail.com</h1>
          <Tiles {...storeState} />
          <NewCityForm {...storeState} />
        </div>;
      }} />;
  }
}
