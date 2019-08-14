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
                this.setState({ categories: res.data })
            })
    }


    render() {
        let categoryList = this.state.categories.map((category) => {
            return (
                <div>
                    <Link key={category._id} to={`/category/${category._id}`}>{category.name}</Link>
                </div>
            )
        })

        if (this.state.formIsDisplayed) {
            return (
                <div>
                    <h2>New Category</h2>
                    <CreateCategoryForm />
                </div>
            )
        }

        return (
            <div>
                <h2>All Categories</h2>
                <h2><a href="#">+</a></h2>
                <CategoryList 
                    categories={this.state.categories}
                />
            </div>
        )
    }
}
