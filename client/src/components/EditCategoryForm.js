import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Homepage from './Homepage.js'


export default class EditCategoryForm extends Component {
    state = {
        category: {},
        redirectToHomepage: false
    }
    
    componentDidMount() {
        axios.get(`/api/category/${this.props.match.params.categoryId}`)
            .then((res) => {
                this.setState({ category: res.data })
            })
    }
    handleInputChange = (event) => {
        const copiedCategory = { ...this.state.category }
        copiedCategory[event.target.name] = event.target.value
        this.setState({ category: copiedCategory })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/category/${this.props.match.params.categoryId}`, this.state.category)
            .then((res) => {
                this.setState({
                    category: res.data,
                    redirectToHomepage: true
                })
            })
    }

    render() {
        const backButton = {
            marginTop: "7px",
            marginLeft: "15px"
        }
        if (this.state.redirectToHomepage) {
            // return <Redirect to={`/post/${this.state.category._id}/new`} />
            return <Homepage />
        }
        return (
            <div>
                <Button style={backButton} component={Link} to={`/`} color="primary" aria-label="back" >
                    <Icon>arrow_back</Icon>
                    Back to Homepage
                </Button>
                <h2>Edit Album</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Album Name: </label>
                        <input type="text" id="name" name="name" onChange={this.handleInputChange} value={this.state.category.name} />
                    </div>
                    <div>
                        <label htmlFor="previewImage">Preview Image: </label>
                        <input type="text" id="previewImage" name="previewImage" onChange={this.handleInputChange} value={this.state.category.image} />
                    </div>
                    <input type="submit" value="Update Album" />
                </form>
            </div>
        )
    }
}