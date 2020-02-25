import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import {HomeDiv, 
        Tiles, 
        TileDiv,
        HeaderDiv,
        DescripDiv,
        Descrip,
        UserImg,
        UserImgDiv,
        Text} from './style'

import afford from "./img/Afford.png"
import fair from "./img/Fair.png"
import health from "./img/Health.png"
import sus from "./img/Sus.png"


class AdminHome extends Component{
  render() {
    return (
            <HomeDiv>
                <HeaderDiv>
                    <h1>Admin Home Page</h1>
                </HeaderDiv>
                <TileDiv>
                    <Link to={'/sustainable'}><Tiles src={sus} alt={"logo"} /> </Link>
                    <Link to={'/healthy'}><Tiles src={health} alt={"logo"} /> </Link>
                    <Link to={'/Linkffordable'}><Tiles src={afford} alt={"logo"} /> </Link>
                    <Link to={'/fair'}><Tiles src={fair} alt={"logo"} /> </Link>
                </TileDiv>
                <Button
                style={{margin:'20px', color:'grey', fontWeight:'bold', border: '1px solid black'}}
                component={ Link } 
                to = {'/addAdmin'}
                >   
                Add User
                </Button>
                <Button
                style={{margin:'20px', color:'grey', fontWeight:'bold', border: '1px solid black'}}
                component={ Link } 
                >
                Edit User
                </Button>

            </HomeDiv>
    )
}
}

export default AdminHome;