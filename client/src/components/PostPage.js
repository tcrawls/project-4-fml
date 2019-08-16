import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import SingleComment from './SingleComment.js'


export default class PostPage extends Component {

    state = {
        post: {},
        comments: []
    }

    componentDidMount() {
        axios.get(`/api/post/${this.props.match.params.postId}`)
            .then((res) => {
                this.setState({ post: res.data })
                axios.get(`/api/comment/byPostId/${this.props.match.params.postId}`)
                    .then((response) => {
                        this.setState({ comments: response.data })
                    })
            })
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        let commentList = this.state.comments.map((comment) => {
            return (
                <SingleComment
                    key={comment._id}
                    id={comment._id}
                    createdBy={comment.createdBy}
                    dateCreated={comment.dateCreated}
                    description={comment.description}
                    postId={comment.postId}
                />
            )
        })
        return (
            <div>
                <div>
                    <Link to={`/category/${this.state.post.categoryId}`}>Back to Category Page</Link>
                </div>
                <p>Posted by {this.state.post.createdBy} on {this.state.post.dateCreated}:</p>
                <img src={this.state.post.image} alt="Post Image" />
                <p>{this.state.post.caption}</p>
                <h3>Comments:</h3>
                <Link to={`/comment/${this.props.match.params.postId}/new`}>Add Comment</Link>
                {commentList}
            </div>
        )
    }
}