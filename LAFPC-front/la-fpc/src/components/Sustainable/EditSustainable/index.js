import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';

import {
  Container,
  Form,
  H1,
  Cancel
} from './style'

class EditSustainable extends Component{
  render(){
    return(
      <Container>
        <Form onSubmit={this.props.closeAndEdit}>
          <Cancel onClick={this.props.cancelEdit}><CancelIcon /></Cancel>
          <H1>Edit Sustainability</H1>
          <div>
          <TextField 
              type='indicator'
              type="text" 
              placeholder="indicator" 
              name="indicator" 
              value={this.props.editData.indicator}
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='location'
              type="text" 
              placeholder="location" 
              name="location"
              value={this.props.editData.location}
              onChange={this.props.handleFormChange}
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField
              label='group'
              type="text" 
              placeholder="group" 
              name="group" 
              value={this.props.editData.group}
              onChange={this.props.handleFormChange}
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
            <div>
            <div>
            <TextField 
              label='source'
              type="text" 
              placeholder="source" 
              name="source"
              value={this.props.editData.source} 
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='2013'
              type="text" 
              placeholder="" 
              name="val2013" 
              value={this.props.editData.val2013}
              onChange={this.props.handleFormChange}
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='2017'
              type="text" 
              placeholder="" 
              name="val2017" 
              value={this.props.editData.val2017}
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='2020'
              type="text" 
              placeholder="" 
              name="val2020" 
              value={this.props.editData.val2020}
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='outcome'
              type="text" 
              placeholder="outcome" 
              name="outcome"
              value={this.props.editData.outcome} 
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
              <small>{this.props.error}</small>
            </div>
          </div>
          <Button type="submit" variant="outlined" style={{margin: "10px"}}>update</Button>
        </Form>
      </Container>
    )
  }
}

export default withRouter(EditSustainable);