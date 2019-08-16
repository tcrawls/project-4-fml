import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class CreateCommentForm extends Component {

    state = {
        categories: [],
        comment: {
            createdBy: '',
            dateCreated: '',
            description: '',
            postId: this.props.match.params.postId
        },
        redirectToPostPage: false
    }

    handleInputChange = (event) => {
        const copiedComment = { ...this.state.comment }
        copiedComment[event.target.name] = event.target.value
        this.setState({ comment: copiedComment })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/comment', this.state.comment)
            .then((res) => {
                this.setState({
                    comment: res.data,
                    redirectToPostPage: true
                })
            })
    }

    render() {
        if (this.state.redirectToPostPage) {
            return <Redirect to={`/post/${this.props.match.params.postId}`} />
        }
        return (
            <div>
                <h2>Create Comment</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="createdBy">Submitted By: </label>
                        <input type="text" id="createdBy" name="createdBy" onChange={this.handleInputChange} value={this.state.comment.createdBy} />
                    </div>
                    <div>
                        <label htmlFor="dateCreated">Date Submitted: </label>
                        <input type="text" id="dateCreated" name="dateCreated" onChange={this.handleInputChange} value={this.state.comment.dateCreated} />
                    </div>
                    <div>
                        <label htmlFor="description">Comment: </label>
                        <input type="text" id="description" name="description" onChange={this.handleInputChange} value={this.state.comment.description} />
                    </div>
                    <input type="submit" value="Submit Comment" />
                </form>
            </div>
        )
    }
}
