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

        const commentContent = {
            margin: "3px"
        }

        const commentContainer = {
            backgroundColor: "#fff",
            borderRadius: "3px",
            // margin: "5px auto",
            border: "1px solid #e6e6e6"
        }

        const commentButtons = {
            margin: "2px 2px"
        }

        if (this.state.wasDeleted) {
            return <Redirect to={`/post/${this.props.postId}`} />
        }
        return (
            <div style={commentContainer}>
                <p style={commentContent}><strong style={userName}>{this.props.createdBy}</strong>{this.props.description}</p>
                <div style={commentButtons}>
                    <IconButton component={Link} to={`/comment/${this.props.postId}/edit/${this.props.id}`} color="disable-primary" aria-label="edit comment">
                        <Icon>edit</Icon>
                    </IconButton>
                    <IconButton onClick={this.handleDeletePost} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        )
    }
}
