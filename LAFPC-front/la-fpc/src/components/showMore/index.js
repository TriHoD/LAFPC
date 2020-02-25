import React, { Component } from 'react'
import { Card, Icon, Label, Button, Grid, Transition, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import MyPopup from '../util/MyPopup';

export default class ShowMore extends Component {
    state = {
        healthyData:[],
        isLoading: true
    };

    componentDidMount() {
        this.getData()
    };

    getData = async () => {
        try { 
            const data = await fetch(`http://localhost:3030/data/get-data`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const oldData = await data.json()
            const healthData = oldData.data.filter(data => data.pillar === 'healthy')
            this.setState({
                healthyData: healthData
            })
    
        }catch (err) {
            console.log(err)
        }
    };

    render() {
        const { healthyData } = this.state;
        return (
        <Container>
            <Grid columns={3}>
                <Grid.Row>
                    {
                        <Transition.Group>
                            {
                                healthyData && healthyData.map((data) => {
                                    return (
                                        <Grid.Column key={data._id} style={{ marginBottom: 20 }}>
                                            <Card color="violet" fluid>
                                                <Card.Content>
                                                    <Card.Header>{data.outcome}</Card.Header>
                                                    <Card.Description>{data.outcome}</Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <MyPopup content="Detail">
                                                        {/* <Button labelPosition='right' floated='right' as={Link} to={`/home`}>
                                                            <Button color='green' basic>
                                                                <Icon name='add' size='large'/>
                                                            </Button>
                                                            <Label basic color='blue' pointing='right'>
                                                            </Label>
                                                        </Button> */}
                                                        <Button floated='right' as={Link} to={`/healthy`} color='blue'>
                                                            <Icon name='add' color='white' size='large'/>
                                                        </Button>
                                                    </MyPopup>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                    )
                                })
                            }
                        </Transition.Group>
                    }
                </Grid.Row>
            </Grid>
        </Container>
        )
    }
}

