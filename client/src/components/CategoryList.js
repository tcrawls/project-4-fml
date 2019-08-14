import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

export default class CategoryList extends Component {
    render() {
        let categoryList = this.props.categories.map((category) => {
            return (
                <div>
                    <Link key={category._id} to={`/category/${category._id}`}>{category.name}</Link>
                </div>
            )
        })
        return (
            <div>
                {categoryList}
            </div>
        )
    }
}
