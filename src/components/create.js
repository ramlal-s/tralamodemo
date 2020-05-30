import React from "react";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}
export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      name: null,
      email: null,
      password: null,
      errors: {
        name: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange=(event=>{
    event.preventDefault();
    const {name,value} = event.target;
    let errors = this.state.errors;

    switch(name){
      case 'name':
        errors.name= value.length <5 ? 'Min 5 Chars':'';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '': 'Email not valid';
        break;
      case 'password':
        errors.password = value.length < 8 ?'pswd min 8 chars':'';
        break;
        default:
          break;
    }
    this.setState({errors,[name]:value},()=>{
      console.log(errors);
      this.setState({errors, [name]: value});

    })
  })
 
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({formValid: validateForm(this.state.errors)});
    this.setState({errorCount: countErrors(this.state.errors)});
  }

  
  render() {
    const reg={
      width: "300px",
      marginLeft: "100px"
    }
  const {errors, formValid} = this.state;
  

    return (
      <div className="wrapper" style={reg}>
        <form>
          <div class="form-group">
            <label >Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Password"
              onChange ={this.handleChange}
              noValidate
            />
             {errors.name.length > 0 && 
                <span className='error form-text text-muted'>
                  {errors.name}</span>}
          </div>

          <div className="form-group">
            <label >Email address</label>
            <input
              type="email"
              className="form-control"
             name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleChange}
              noValidate />
             {errors.email.length > 0 && 
  <span className='error'>{errors.email}</span>}

           
          </div>
          <div className="form-group">
            <label >Password</label>
            <input
              type="password"
              class="form-control"
             name="password"
              placeholder="Password"
              onChange={this.handleChange}
              noValidate
            />
            {errors.password.length > 0 && 
  <span className='error'>{errors.password}</span>}

          </div>

          <button type="submit" className="btn btn-primary submit">
            Submit
          </button>
          {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid' : 'invalid'}</p> : ''}
        </form>
      </div>
    );
  }
}
