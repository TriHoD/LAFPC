import React, { Component } from 'react';
import {MainDiv, LeftDiv, RightDiv, SecondDiv} from './style'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import { Link as LinkRoute } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div>
            <MainDiv>
                <LeftDiv>
                    <h3>STAY CONNECTED</h3>
                    <FacebookIcon style={{margin:'10px'}}/>
                    <InstagramIcon style={{margin:'10px'}}/>
                    <TwitterIcon style={{margin:'10px'}}/>
                    <Button
                        component={LinkRoute}
                        to='/SignIn'
                        color="inherit"
                        style={{ margin: '20px', color: 'white', fontWeight: 'bold' }}
                    >
                        Admin
                    </Button>
                </LeftDiv>
                <RightDiv>
                    <h3>GET INVOLVED</h3>
                    <Button variant="contained" style={{backgroundColor:'orange'}}>DONATE</Button>
                        {/* <Button
                            component={LinkRoute}
                            to='/SignIn'
                            color="inherit"
                            style={{ margin: '20px', color: 'white', fontWeight: 'bold' }}
                        >
                            Admin
                        </Button> */}
                </RightDiv>
            </MainDiv>
            <SecondDiv>
                <p>Copyright © 2018 Los Angeles Food Policy Council. All Rights Reserved</p>
            </SecondDiv>
            </div>
        )
    }
}

export default Footer