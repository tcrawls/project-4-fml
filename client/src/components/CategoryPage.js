import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class CategoryPage extends Component {

    state = {
        category: {},
        posts: []
    }

    componentDidMount() {
        axios.get(`/api/category/${this.props.match.params.categoryId}`)
            .then((res) => {
                this.setState({ category: res.data })
                axios.get(`/api/post/byCategoryId/${this.props.match.params.categoryId}`)
                    .then((response) => {
                        this.setState({ posts: response.data })
                    })
            })
    }
 

    render() {
        let postList = this.state.posts.map((post) => {
            return (
                <div>
                    
                    <Link key={post._id} to={`/post/${post._id}`}>
                        <p>{post.createdBy}</p>
                        <img src={post.image} alt="Post image" />
                    </Link>
                </div>
            )
        })

        return (
            <div>
                <h2>{this.state.category.name}</h2>
                {postList}
            </div>
        )
    }
}