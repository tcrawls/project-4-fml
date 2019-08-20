import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
// import SinglePost from './SinglePost.js'
import SinglePost3 from './SinglePost3.js'


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

        const postContainer = {
            marginBottom: "50px"
        }

        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        let postList = this.state.posts.map((post) => {
            return (
                <div>
                    <SinglePost3
                        key={post._id}
                        postId={post._id}
                        createdBy={post.createdBy}
                        caption={post.caption}
                        dateCreated={post.dateCreated}
                        image={post.image}
                        categoryId={post.categoryId}
                    />
                </div>
            )
        })
        let displayedPostList = postList.reverse()
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
                <div style={postContainer}>{displayedPostList}</div>
            </div>
        )
    }
}