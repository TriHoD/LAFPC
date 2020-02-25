import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import { display } from '@material-ui/system';

import {
  Container,
  Form,
  Input,
  DivInput,
} from './style'

class FairData extends Component{

  state = {
    pillar: 'fair',
    indicator: '',
    location: '',
    group: '',
    source: '',
    val2013: '',
    val2017: '',
    val2020: '',
    outcome: '',
    error: ''
  }

  onInputChange = (e) => { this.setState({ [e.target.name]: e.target.value }) 
  };

  validate = () => {
    if(
      (this.state.indicator.length < 1) ||
      (this.state.location.length < 1) ||
      (this.state.group.length < 1) ||
      (this.state.source.length < 1) ||
      (this.state.val2013.length < 1) ||
      (this.state.val2017.length < 1) ||
      (this.state.val2020.length < 1) ||
      (this.state.outcome.length < 1) 
      ) {
      this.setState({
        error: 'must fill out form, put N/A in empty spaces'
      })
        return false
      } else {
        return true
      }
  };

  submit = async (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid) {
        const dataCall = this.props.addData(this.state);
        dataCall.then((data) => {
          this.props.history.push('/fair')
        })
    }
  }

  render(){
    return(
      <Container>
        <Form>
          <DivInput>
            <Button onClick={this.submit} style={{width: '100%'}}><PublishIcon /></Button>
          </DivInput>
          <DivInput>
            <Input 
              type="text" 
              placeholder="indicator" 
              name="indicator" 
              onChange={this.onInputChange} 
            />
          </DivInput>
          <DivInput>
            <Input 
              type="text" 
              placeholder="location" 
              name="location" 
              onChange={this.onInputChange}
            />
          </DivInput>
          <DivInput>
            <Input
              type="text" 
              placeholder="group" 
              name="group" 
              onChange={this.onInputChange}
            />
          </DivInput>
          <DivInput>
            <Input
              type="text" 
              placeholder="source" 
              name="source" 
              onChange={this.onInputChange} 
            />
          </DivInput>
          <DivInput>
            <Input 
              type="text" 
              placeholder="0" 
              name="val2013" 
              onChange={this.onInputChange} 
            />
          </DivInput>
          <DivInput>
            <Input 
              type="text" 
              placeholder="0" 
              name="val2017" 
              onChange={this.onInputChange} 
            />
          </DivInput>
          <DivInput>
            <Input 
              type="text" 
              placeholder="0" 
              name="val2020" 
              onChange={this.onInputChange} 
            />
          </DivInput>
          <DivInput>
            <Input 
              type="text" 
              placeholder="outcome" 
              name="outcome" 
              onChange={this.onInputChange} 
            />
          </DivInput>
        </Form>
      </Container>
    )
  }
}

export default withRouter(FairData);