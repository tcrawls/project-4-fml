import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

export default class SingleComment extends Component {
    state = {
        wasDeleted: false
    }
    handleDeletePost = (event) => {
        event.preventDefault()
        axios.delete(`/api/comment/${this.props.id}`)
            .then(() => {
                this.setState({ wasDeleted: true })
            })
    }
    render() {
        const userName = {
            paddingRight: "7px"
        }
        const commentContainer = {
            backgroundColor: "#fff"
        }
        const commentContent = {
            display: "flex",
            justifyContent: "flex-start"
        }
        const commentButtons = {
            margin: "2px 2px",
            display: "flex",
            justifyContent: "flex-end"
        }
        const commentText = {
            width: "550px"
        }
        if (this.state.wasDeleted) {
            return <Redirect to={`/post/${this.props.postId}`} />
        }
        return (
            <div style={commentContainer}>
                <div style={commentContent}>
                    <div style={commentText}>
                        <p><strong style={userName}>{this.props.createdBy}</strong>{this.props.description}</p>
                    </div>
                    <div style={commentButtons}>
                        <IconButton component={Link} to={`/comment/${this.props.postId}/edit/${this.props.id}`} color="disable-primary" aria-label="edit comment">
                            <Icon>edit</Icon>
                        </IconButton>
                        <IconButton onClick={this.handleDeletePost} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
}
