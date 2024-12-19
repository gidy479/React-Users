import React, { Component } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

class UsersForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

 
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.addUser(this.state);

    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
        <Card color="transparent" shadow={false}>
        <form
          onSubmit={this.handleSubmit}
          className="mt-8 mb-2 w-52 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              name="name"
              size="lg"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="John Doe"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
              size="lg"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Gen
            </Typography>
            <Input
              name="gen"
              size="lg"
              value={this.state.gen}
              onChange={this.handleChange}
              placeholder="Generation (e.g., Z, Y, X)"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Button type="submit" className="mt-6" fullWidth>
            Add User
          </Button>
        </form>
      </Card>
    );
  }
}

export default UsersForm;
