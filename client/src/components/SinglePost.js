import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import SingleComment from './SingleComment.js'


export default class SinglePost extends Component {

    state = {
        comments: [],
        wasDeleted: false
    }

    componentDidMount() {
        axios.get(`/api/comment/byPostId/${this.props.id}`)
            .then((response) => {
                this.setState({ comments: response.data })
            })
    }

    handleDeletePost = (event) => {
        event.preventDefault()
        axios.delete(`/api/post/${this.props.id}`)
            .then(() => {
                this.setState({ wasDeleted: true })
            })
    }

    render() {
        if (this.state.wasDeleted) {
            return <Redirect to={`/category/${this.props.categoryId}`} />
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
        let sortedCommentList = commentList.reverse()
        let displayedComment = sortedCommentList[0]
        return (
            <div>
                <p>Posted by {this.props.createdBy} on {this.props.dateCreated}:</p>
                <Link key={this.props.id} to={`/post/${this.props.id}`}>
                    <img src={this.props.image} alt="Post image" />
                </Link>
                <p>{this.props.caption}</p>
                <button onClick={this.handleDeletePost}>Delete Post</button>
                <Link to={`/post/${this.props.categoryId}/edit/${this.props.id}`}>Edit Post</Link>
                <h3>Comments:</h3>
                {displayedComment}
            </div>
        )
    }
}
