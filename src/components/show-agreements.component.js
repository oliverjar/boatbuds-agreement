import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Agreement = props => (
    <tr>
        <td>{props.agreement.agreement_firstname}</td>
        <td>{props.agreement.agreement_lastname}</td>
        <td>{props.agreement.agreement_type}</td>
        <td>{props.agreement.agreement_url}</td>
        <td>
            <Link to={"/edit/"+props.agreement._id}>Edit</Link>
        </td>
    </tr>
)

export default class AgreementList extends Component {

    constructor(props) {
        super(props);
        this.state = {agreements: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/agreements/')
            .then(response => {
                this.setState({ agreements: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    agreementList() {
        return this.state.agreements.map(function(currentAgreement, i){
            return <Agreement agreement={currentAgreement} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Agreement List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>LastName</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.agreementList() }
                    </tbody>
                </table>
            </div>
        )
    }
}