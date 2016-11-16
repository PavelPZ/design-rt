import * as React from 'react';
import {Component} from 'react';
import {Button} from 'react-toolbox/lib/button';

import Example from '../component/Example.tsx';


export default class HomeScreen extends Component<{}, {}> {
  render() {
    return (<div>
      <h2>Application</h2>
      <Example colorName="red" />
    </div>);
  }
}
