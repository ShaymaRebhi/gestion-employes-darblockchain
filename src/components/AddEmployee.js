import {Button, Input ,Form} from "semantic-ui-react";
import React, {Component} from "react";
import {createEmployee} from "../redux/slices/employees";
import {connect} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import validator from 'validator'
class  AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeage = this.onChangeage.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeoccupation = this.onChangeoccupation.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.newEmployee = this.newEmployee.bind(this);

        this.state = {
            id: null,
            firstName: "",
            lastName: "",
            age: 0,
            email: "",
            occupation: "",
            errorEmail:'',
            errorAge:'',
            submitted :false
        };
    }
        onChangefirstName(e) {
        this.setState({
            firstName: e.target.value,

        });
    }
    onChangelastName(e) {
        this.setState({
            lastName: e.target.value,
        });

    }
    onChangeage(e) {
        let errors='';

        if (e.target.value<=19){
            errors=<strong style={{color:'red'}}>*Age should be greater than 19</strong>;

        }
        this.setState({errorAge:errors});
        this.setState({
            age: e.target.value,
        });

    }
    onChangeemail(e) {
        let error='';

        if (!validator.isEmail(e.target.value)){
            error=<strong style={{color:'red'}}>*email is not valid</strong>;

        }
        this.setState({errorEmail:error});
        this.setState({
            email: e.target.value,
        });

    }
    onChangeoccupation(e) {
        this.setState({
            occupation: e.target.value,
        });
    }
     success  (){
        toast.success('Employee added successfuly',{ className: 'toast-message'})
    }
    error (){
        toast.error('There is an error ',{ className: 'toast-message'})
    }

    saveEmployee() {
        const { firstName, lastName,age,email,occupation } = this.state;
        if(this.state.errorAge==='' && this.state.errorEmail===''){
        this.props
            .createEmployee({ firstName, lastName,age,email,occupation })
            .unwrap()
            .then((data) => {
                this.setState({
                    id: data.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    occupation: data.email,
                });
                console.log(data);
                this.success()
                this.newEmployee()

            })}
else{
    this.error()
        }
    }
    newEmployee() {
        this.setState({
            id: null,
            firstName: "",
            lastName: "",
            email: "",
            occupation: "",
            age:0
        });
    }


    render() {


        return(
          <div>
            <h3>Add Employee</h3>
             <br/>
                        <Form >
                            <Form.Group widths="equal">
                                <Form.Field
                                    control={Input}
                                    label="FirstName"
                                    placeholder="FirstName"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.onChangefirstName}
                                />
                                <Form.Field
                                    control={Input}
                                    label="LastName"
                                    placeholder="LastName"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.onChangelastName}
                                />
                                <Form.Field
                                    control={Input}
                                    label="Email"
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeemail}
                                    error={this.state.errorEmail}
                                />

                                <Form.Field
                                    control={Input}
                                    label="Age"
                                    placeholder="Age"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.onChangeage}
                                    error={this.state.errorAge}
                                />

                                <Form.Field
                                    control={Input}
                                    label="Occupation"
                                    placeholder="Occupation"
                                    name="occupation"
                                    value={this.state.occupation}
                                    onChange={this.onChangeoccupation}
                                />
                            </Form.Group>
                            <Form.Group>

                            </Form.Group>
                            <Form.Group>
                            </Form.Group>
                            <Button.Group floated="right">
                                <Button >
                                    Cancel
                                </Button>
                                <Button.Or />
                                <Button  onClick={this.saveEmployee}  color="blue" type="submit" >
                                    Save
                                </Button>

                            </Button.Group>
                        </Form>
                <ToastContainer position="top-right"/>

            </div>

        )
}


}
    export default connect(null, { createEmployee  })(AddEmployee);


