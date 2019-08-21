import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
// import SingleComment from './SingleComment.js'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentList from './CommentList.js'
import SingleComment from './SingleComment.js'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


export default class SinglePost extends Component {

    state = {
        comments: [],
        wasDeleted: false
    }

    componentDidMount() {
        axios.get(`/api/comment/byPostId/${this.props.postId}`)
            .then((response) => {
                this.setState({ comments: response.data })
            })
    }

    handleDeletePost = (event) => {
        event.preventDefault()
        axios.delete(`/api/post/${this.props.postId}`)
            .then(() => {
                this.setState({ wasDeleted: true })
            })
    }

    render() {
        const postContainer = {
            // height: "300px",
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

        const media = {
            maxHeight: "300px",
            paddingTop: "56.25%",
            width: "600px",

        }

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

        return (
            <div>
                <Card style={postContainer}>
                    <CardHeader
                        action={
                            <div>
                                <IconButton component={Link} to={`/post/${this.props.categoryId}/edit/${this.props.postId}`} color="disable-primary" aria-label="edit post">
                                    <Icon>edit</Icon>
                                </IconButton>
                                <IconButton onClick={this.handleDeletePost} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        }
                        title={this.props.createdBy}
                    />
                    <CardMedia 
                        component={Link} 
                        to={`/post/${this.props.postId}`}
                        style={media}
                        image={this.props.image}
                        title="Post Image"
                        comments={this.state.comments}
                        postId={this.props.postId}
                        createdBy={this.props.createdBy}
                        caption={this.props.caption}
                        dateCreated={this.props.dateCreated}
                        postImage={this.props.image}
                        categoryId={this.props.categoryId}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {this.props.caption}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/comment/${this.props.postId}/new`} color="primary" size="small" variant="contained" aria-label="add comment">
                            Add Comment
                            <Icon>add_comment</Icon>
                        </Button>
                    </CardActions>

                    <CardContent>
                        <Typography>
                            {commentList}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}