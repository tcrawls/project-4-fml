import React, { Component } from 'react'
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import Homepage from './Homepage.js'


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
        if (this.state.redirectToHome) {
            return <Homepage />
        }
        return (
            <div>
                <h2>New Category</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Category Name: </label>
                        <input type="text" id="name" name="name" onChange={this.handleInputChange} value={this.state.category.name} />
                    </div>
                    <input type="submit" value="Create Category" />
                </form>
            </div>
        )
    }
}

