import React, { Component } from 'react'
import axios from 'axios'


export default class CreatePostForm extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        axios.get('/api/category')
            .then((res) => {
                this.setState({ categories: res.data })
            })
    }

    render() {
        let categories = this.state.categories.map((category) => {
            return (
                <div>
                    {category.name}
                </div>
            )
        })
        return (
            <div>
                {categories}
            </div>
        )
    }
}
