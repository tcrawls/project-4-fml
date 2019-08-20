import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
// import SingleComment from './SingleComment.js'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentList from './CommentList.js'



export default class SinglePost2 extends Component {

    state = {
        comments: [],
        wasDeleted: false
        // categoryId: ''
    }

    componentDidMount() {
        axios.get(`/api/comment/byPostId/${this.props.postId}`)
            .then((response) => {
                this.setState({ comments: response.data })
            })
    }

    // componentDidMount() {
    //     axios.get(`/api/post/${this.props.match.params.postId}`)
    //         .then((res) => {
    //             this.setState({ post: res.data })
    //             this.setState({ categoryId: this.state.post.categoryId })
    //             axios.get(`/api/comment/byPostId/${this.props.match.params.postId}`)
    //                 .then((response) => {
    //                     this.setState({ comments: response.data })
    //                 })
    //         })
    // }

    handleDeletePost = (event) => {
        event.preventDefault()
        axios.delete(`/api/post/${this.props.postId}`)
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
            marginBottom: "10px",
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
            width: "600px",
            height: "300px",
            margin: "0 auto"
        }
        const postTextContent = {
            padding: "5px 16px"
        }

        // const commentButton = {
        //     // padding: "10px"
        // }

        // const commentIcon = {
        //     padding: "5px"
        // }

        if (this.state.wasDeleted) {
            return <Redirect to={`/category/${this.props.categoryId}`} />
        }

        // let commentList = this.state.comments.map((comment) => {
        //     return (
        //         <SingleComment
        //             key={comment._id}
        //             id={comment._id}
        //             createdBy={comment.createdBy}
        //             dateCreated={comment.dateCreated}
        //             description={comment.description}
        //             postId={comment.postId}
        //         />
        //     )
        // })
        // let displayedCommentList = commentList.reverse()

        //if commentList.length > 0, render the first comment and a link to 

        return (
            <div>
                {/* <div>
                    <Link to={`/category/${this.state.post.categoryId}`}>Back to Category Page</Link>
                </div> */}
                <div style={postContainer}>
                    <div style={postTop}>
                        <div style={postSubmitter}>
                            <b>{this.props.createdBy}</b>:
                        </div>
                        <div style={postButtons}>
                            <IconButton component={Link} to={`/post/${this.props.categoryId}/edit/${this.props.postId}`} color="disable-primary" aria-label="edit post">
                                <Icon>edit</Icon>
                            </IconButton>
                            <IconButton onClick={this.handleDeletePost} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* <div>
                        <img style={postImage} src={this.props.image} alt="Post Image" />
                    </div> */}
                    <div>
                        <Link key={this.props.postId} to={`/post/${this.props.postId}`}>
                            <img style={postImage} src={this.props.image} alt="Post image" />
                        </Link>
                    </div>
                    <div style={postTextContent}>
                        <div>{this.props.caption}</div>
                        {/* <IconButton style={commentButton} component={Link} to={`/comment/${this.props.postId}/new`} color="primary" size="small" variant="contained" aria-label="add comment">
                            Add Comment
                            <Icon style={commentIcon}>add_comment</Icon>
                        </IconButton> */}
                        {/* <div>
                            <CommentList
                                comments={this.state.comments}
                                postId={this.props.postId}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}