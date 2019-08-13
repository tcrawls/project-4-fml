import React, { Component } from 'react'
import axios from 'axios'


export default class Categories extends Component {

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
                <p>{category.name}</p>
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
