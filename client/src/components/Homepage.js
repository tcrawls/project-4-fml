import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Homepage extends Component {

    state = {
        categories: [],
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

        return (
            <div>
                <h2>All Categories</h2>
                {categoryList}
            </div>
        )
    }
}
