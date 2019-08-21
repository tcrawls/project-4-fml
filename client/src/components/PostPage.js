import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import SingleComment from './SingleComment.js'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

export default class PostPage extends Component {

    state = {
        post: {},
        comments: [],
        categoryId: '',
        wasDeleted: false
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
        const backButton = {
            marginTop: "7px",
            marginLeft: "15px"
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
        return (
            <div>
                {/* <Link to={`/category/${this.state.post.categoryId}`} /> */}
                <Button style={backButton} component={Link} to={`/category/${this.state.post.categoryId}`} color="primary" aria-label="back" >
                    <Icon>arrow_back</Icon>
                    Back to album
                </Button>
                <Card style={postContainer}>
                    <CardHeader
                        action={
                            <div>
                                <IconButton component={Link} to={`/post/${this.state.post.categoryId}/edit/${this.props.match.params.postId}`} color="disable-primary" aria-label="edit post">
                                    <Icon>edit</Icon>
                                </IconButton>
                                <IconButton onClick={this.handleDeletePost} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        }
                        title={this.state.post.createdBy}
                    />
                    <CardMedia
                        style={media}
                        image={this.state.post.image}
                        title="Post Image"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {this.state.post.caption}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/comment/${this.props.match.params.postId}/new`} color="primary" size="small" variant="contained" aria-label="add comment">
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