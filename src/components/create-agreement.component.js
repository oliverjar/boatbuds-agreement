import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeAgreementFirstname = this.onChangeAgreementFirstname.bind(this);
        this.onChangeAgreementLastname = this.onChangeAgreementLastname.bind(this);
        this.onChangeAgreementType = this.onChangeAgreementType.bind(this);
        this.onChangeAgreementUrl = this.onChangeAgreementUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            agreement_firstname: '',
            agreement_lastname: '',
            agreement_type: '',
            agreement_url: '',
            todo_completed: false
        }
    }

    onChangeAgreementFirstname(e) {
        this.setState({
            agreement_firstname: e.target.value
        });
    }

    onChangeAgreementLastname(e) {
        this.setState({
            agreement_lastname: e.target.value
        });
    }

    onChangeAgreementType(e) {
        this.setState({
            agreement_type: e.target.value
        });
    }

    onChangeAgreementUrl(e) {
        this.setState({
            agreement_url: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.agreement_firstname}`);
        console.log(`Todo Responsible: ${this.state.agreement_lastname}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        const newAgreement = {
            agreement_firstname: this.state.agreement_firstname,
            agreement_lastname: this.state.agreement_lastname,
            agreement_type: this.state.agreement_type,
            agreement_url: this.state.agreement_url
        }

        axios.post('http://localhost:4000/agreements/add', newAgreement)
            .then(res => console.log(res.data));

        
        this.setState({
            agreement_firstname: '',
            agreement_lastname: '',
            agreement_type: '',
            agreement_url: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Firstname: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.agreement_firstname}
                                onChange={this.onChangeAgreementFirstname}
                                />
                    </div>
                    <div className="form-group">
                        <label>Lastname: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.agreement_lastname}
                                onChange={this.onChangeAgreementLastname}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityPicture" 
                                    value="Picture"
                                    checked={this.state.agreement_type==='Picture'} 
                                    onChange={this.onChangeAgreementType}
                                    />
                            <label className="form-check-label">Picture</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityVideo" 
                                    value="Video" 
                                    checked={this.state.agreement_type==='Video'} 
                                    onChange={this.onChangeAgreementType}
                                    />
                            <label className="form-check-label">Video</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>URL: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.agreement_url}
                                onChange={this.onChangeAgreementUrl}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit Agreement" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}