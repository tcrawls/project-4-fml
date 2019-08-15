import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreateCategoryForm from './CreateCategoryForm.js'
import CategoryList from './CategoryList.js'


export default class Homepage extends Component {

    state = {
        categories: [],
        formIsDisplayed: false
    }

    componentDidMount() {
        axios.get('/api/category')
            .then((res) => {
                this.setState({ categories: res.data, formIsDisplayed: false })
            })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState({ formIsDisplayed: !this.state.formIsDisplayed })
    }

    render() {
        if (this.state.formIsDisplayed) {
            return (
                <div>
                    <CreateCategoryForm />
                    <CategoryList
                        categories={this.state.categories}
                    />
                </div>
            )
        }
        return (
            <div>
                <h2>All Categories</h2>
                <button onClick={this.handleClick}>Create New</button>
                {/* <h2><a href="#" onClick={handleClick}>+</a></h2> */}
                <CategoryList
                    categories={this.state.categories}
                />
            </div>
        )
    }
}

