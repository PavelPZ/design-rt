import * as React from 'react';
import {Component} from 'react';
import HomeScreen from './screen/HomeScreen.tsx';
import './styles.scss';
import 'react-toolbox/lib/commons';

export class Application extends Component<{}, {}> {
  render() {
    return (<div>
      <h1>Exmaple Application</h1>
      <HomeScreen />
    </div>);
  }
}
