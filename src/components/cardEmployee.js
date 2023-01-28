import React, {Component} from 'react';
import {Grid, Label, Segment} from "semantic-ui-react";
import CardItemEmployee from "./cardItemEmployee";

import {
    findEmployeesById,
    retrieveEmployees,
} from "../redux/slices/employees";
import {connect} from "react-redux";

class CardEmployee extends Component  {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.retrieveEmployees();
    }
    render() {
        const {employees} = this.props;
        return (

            <div>

                            <Segment raised>
                                <Label as='a' color='red' ribbon>
                                    List Employees
                                </Label>
                                <Grid columns={3} >
                                {employees?.map((cl, index) => (


                                            <Grid.Column key={index}>
                                            <CardItemEmployee
                                                _id={cl._id}
                                                firstName={cl.firstName}
                                                lastName={cl.lastName}
                                                age={cl.age}
                                                email={cl.email}
                                                occupation={cl.occupation}
                                            />
                                            </Grid.Column>
                                ))}
                                </Grid>
                            </Segment>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        employees: state.employees,
    };
};
export default connect(mapStateToProps, {
    retrieveEmployees,
    findEmployeesById
})(CardEmployee);
