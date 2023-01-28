import {Button, Card, Image} from "semantic-ui-react";
import React, {Component} from 'react';
import {Link} from "react-router-dom";


class cardItemEmployee extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>

                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        />
                        <Card.Header>{this.props.firstName} {this.props.lastName}</Card.Header>
                        <Card.Meta>{this.props.occupation}</Card.Meta>
                        <Card.Description>
                            <strong>Age :</strong> {this.props.age} <br/>
                            <strong>Email :</strong> {this.props.email}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className=' button'>
                         <Link to={'/employee/'+this.props._id} state={{ email: this.props.email ,firstName: this.props.firstName+' '+this.props.lastName ,age :this.props.age , occupation: this.props.occupation}}>
                             <Button basic color='green' >
                                Details
                         </Button> </Link>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default cardItemEmployee;
