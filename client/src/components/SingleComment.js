import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

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
                <p>Submitter: {this.props.createdBy}</p>
                <p>Date: {this.props.dateCreated}</p>
                <p>Comment: {this.props.description}</p>
                <button onClick={this.handleDeletePost}>Delete Comment</button>
                <Link to={`/comment/${this.props.postId}/edit/${this.props.id}`}>Edit Comment</Link>
            </div>
        )
    }
}
