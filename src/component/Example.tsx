import * as React from 'react';
import {Component} from 'react';
import {assign} from 'lodash';

import {Button} from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import DatePicker from 'react-toolbox/lib/date_picker';
import Chip from 'react-toolbox/lib/chip';


export interface ExampleProps {
  colorName: string
}

interface ExampleState extends ExampleProps { }

export default class Example extends Component<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
    super(props);

    this.state = {
      colorName: props.colorName
    }
  }

  handleClick = () => {
    const colorNames = ['pink', 'red', 'violet', 'white'];
    const colorName = colorNames[Math.floor(Math.random() * colorNames.length)];

    this.setState({
      colorName
    });
  }

  handleChange = (item: string, value: any) => {
    const newState : any = {};
    newState[item] = value;
    const state : any = assign({}, this.state, newState);

    this.setState(state);
  }

  render() {
    const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

    return (<div>
      <h3 className="red-heading">Hello World! I am Frank</h3>
      <p>Todays color is <b>{this.state.colorName}</b></p>

      <h4>Buttons</h4>
      <div>
        <Button label='Change todays color' onClick={this.handleClick} primary/>
        <Button label='Show awesome dialog' onClick={this.handleClick} primary/>
      </div>

      <h4>Date picker</h4>
      <div>
        <DatePicker label='Calendar' onChange={this.handleChange.bind(this, 'date1')}/>
      </div>

      <h4>Chips</h4>
      <div>
        <Chip>Example chip</Chip>
        <Chip>
          <span style={{textDecoration: 'line-through'}}>Standard</span>
          <strong>Custom</strong> chip <small>(custom markup)</small>
        </Chip>
      </div>

      <h4>Opening calendar</h4>
      <div style={{width: '450px', marginLeft: 'auto', marginRight: 'auto'}}>
        <Card>
          <CardTitle
            avatar="https://placeimg.com/80/80/animals"
            title="Avatar style title"
            subtitle="Subtitle here"
          />
          <CardMedia
            aspectRatio="wide"
            image="https://placeimg.com/800/450/nature"
          />
          <CardTitle
            title="Title goes here"
            subtitle="Subtitle here"
          />
          <CardText>{dummyText}</CardText>
          <CardActions>
            <Button label="Action 1" />
            <Button label="Action 2" />
          </CardActions>
        </Card>
      </div>
    </div>);
  }
}
