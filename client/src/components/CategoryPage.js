import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import SinglePost from './SinglePost.js'

export default class CategoryPage extends Component {

    state = {
        category: {},
        posts: [],
        redirectToHome: false
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
    handleDeleteCategory = (event) => {
        event.preventDefault()
        axios.delete(`/api/category/${this.props.match.params.categoryId}`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        let postList = this.state.posts.map((post) => {
            return (
                <SinglePost
                    key={post._id}
                    id={post._id}
                    createdBy={post.createdBy}
                    caption={post.caption}
                    dateCreated={post.dateCreated}
                    image={post.image}
                    categoryId={post.categoryId}
                />
            )
        })
        return (
            <div>
                <div>
                    <Link to='/'>Back to Home Page</Link>
                </div>
                <h2>{this.state.category.name}</h2>
                <button onClick={this.handleDeleteCategory}>Delete Category</button>
                <div>
                    <Link to={`/post/${this.props.match.params.categoryId}/new`}>Create New Post</Link>
                </div>
                {postList}
            </div>
        )
    }
}