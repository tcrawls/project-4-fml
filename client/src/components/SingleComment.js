import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
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
        if (this.state.wasDeleted) {
            return <Redirect to={`/post/${this.props.postId}`} />
        }
        return (
            <div>
                <p><strong>{this.props.createdBy}</strong>    {this.props.description}</p>
                {/* <button onClick={this.handleDeletePost}>Delete Comment</button> */}
                <IconButton onClick={this.handleDeletePost} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <Link to={`/comment/${this.props.postId}/edit/${this.props.id}`}>Edit Comment</Link>
            </div>
        )
    }
}
