import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Homepage from './Homepage.js'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


export default class CreateCategoryForm extends Component {

    state = {
        category: {},
        redirectToHome: false
    }

    handleInputChange = (event) => {
        const copiedCategory = { ...this.state.category }
        copiedCategory[event.target.name] = event.target.value
        this.setState({ category: copiedCategory })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/category', this.state.category)
            .then(() => {
                this.setState({
                    redirectToHome: true
                })
            })
    }

    render() {
        const backButton = {
            marginTop: "7px",
            marginLeft: "15px"
        }
        if (this.state.redirectToHome) {
            return <Homepage />
        }
        return (
            <div>
                <Button style={backButton} component={Link} to={`/`} color="primary" aria-label="back" >
                    <Icon>arrow_back</Icon>
                    Back to Homepage
                </Button>
                <h2>New Album</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Album Name: </label>
                        <input type="text" id="name" name="name" onChange={this.handleInputChange} value={this.state.category.name} />
                    </div>
                    <input type="submit" value="Create Album" />
                </form>
            </div>
        )
    }
}

