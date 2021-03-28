import React, { Component } from 'react'

export default class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: "",
            newPassword: "",
            confirmPassword: "",
            showChangaPassword: false
        }
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('UPDATING PASSWORD');
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
        // const newErrors = this.state.errors;
        // newErrors[name] = '';
        // this.setState({errors: newErrors});
    }

    toggleShowChangePassword = () => {
        this.setState({showChangaPassword: !this.state.showChangaPassword});
    } 

    render() {
        return (
            <>
                <div className="form-group">
                    <button className="btn btn-primary" type="button" onClick={this.toggleShowChangePassword}>Change password</button>
                </div>
                {this.state.showChangaPassword ? 
                    <div className="card card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input type="password" required className="form-control" id="passwordInput" name="password" placeholder="You're actual password" value={this.state.password} onChange={this.handleChange} />                    
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPasswordInput">New password</label>
                                <input type="password" required className="form-control" id="newPasswordInput" name="newPassword" placeholder="You're new password" value={this.state.newPassword} onChange={this.handleChange} />              
                            </div>
                            <div className="form-group">                            
                                <label htmlFor="confirmPasswordInput">New password</label>
                                <input type="confirmPassword" required className="form-control" id="confirmPasswordInput" name="confirmPassword" placeholder="Confirm your password" value={this.state.confirmPassword} onChange={this.handleChange} />
                            </div>
                        </form>
                    </div>
                    : null
                }
            </>
        )
    }
}
