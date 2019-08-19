import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import SingleComment from './SingleComment.js'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

export default class PostPage extends Component {

    state = {
        post: {},
        comments: [],
        categoryId: ''
    }

    componentDidMount() {
        axios.get(`/api/post/${this.props.match.params.postId}`)
            .then((res) => {
                this.setState({ post: res.data })
                this.setState({ categoryId: this.state.post.categoryId })
                axios.get(`/api/comment/byPostId/${this.props.match.params.postId}`)
                    .then((response) => {
                        this.setState({ comments: response.data })
                    })
            })
    }

    handleDeletePost = (event) => {
        event.preventDefault()
        axios.delete(`/api/post/${this.props.match.params.postId}`)
            .then(() => {
                this.setState({ wasDeleted: true })
            })
    }

    render() {
        const postContainer = {
            height: "300px",
            backgroundColor: "#fff",
            borderRadius: "3px",
            width: "95vw",
            maxWidth: "600px",
            margin: "20px auto",
            border: "1px solid #e6e6e6"
        }
        const postTop = {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        }
        const postSubmitter = {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "16px",
            width: "300px"
        }
        const postButtons = {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "16px",
            width: "300px"
        }
        const postImage = {
            maxWidth: "600px",
            margin: "0 auto"
        }
        const postTextContent = {
            padding: "5px 16px"
        }

        if (this.state.wasDeleted) {
            return <Redirect to={`/category/${this.state.categoryId}`} />
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
        let displayedCommentList = commentList.reverse()
        return (
            <div>
                <div>
                    <Link to={`/category/${this.state.post.categoryId}`}>Back to Category Page</Link>
                </div>
                <div style={postContainer}>
                    <div style={postTop}>
                        <div style={postSubmitter}>
                            Posted by: <b>{this.state.post.createdBy}</b>
                        </div>
                        <div style={postButtons}>
                            <Link to={`/post/${this.props.categoryId}/edit/${this.props.id}`}>Edit Post</Link>
                            {/* <button onClick={this.handleDeletePost}>Delete Post</button> */}
                            {/* <DeleteIcon onClick={this.handleDeletePost} /> */}
                            <IconButton onClick={this.handleDeletePost} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div>
                        <img style={postImage} src={this.state.post.image} alt="Post Image" />
                    </div>
                    <div style={postTextContent}>
                        <p>{this.state.post.caption}</p>
                        {/* <p>Comments:</p> */}
                        {/* <Link to={`/comment/${this.props.match.params.postId}/new`}>Add Comment</Link> */}
                        <IconButton component={Link} to={`/comment/${this.props.match.params.postId}/new`} color="primary" aria-label="add comment">
                            <Icon>add_comment</Icon>
                        </IconButton>
                        <div>{displayedCommentList}</div>
                    </div>
                </div>
            </div>
        )
    }
}