import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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
        const backButton = {
            marginTop: "7px",
            marginLeft: "15px"
        }
        const formStyle = {
            marginLeft: "15px"
        }
        const inputStyle = {
            margin: "10px"
        }
        if (this.state.redirectToPostPage) {
            return <Redirect to={`/post/${this.props.match.params.postId}`} />
        }
        return (
            <div>
                <Button style={backButton} component={Link} to={'/'} color="primary" aria-label="back" >
                    <Icon>arrow_back</Icon>
                    Back to Homepage
                </Button>
                <h2 style={formStyle}>Create Comment</h2>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div style={inputStyle}>
                        <label htmlFor="createdBy">Submitted By: </label>
                        <input type="text" id="createdBy" name="createdBy" onChange={this.handleInputChange} value={this.state.comment.createdBy} />
                    </div>
                    <div style={inputStyle}>
                        <label htmlFor="dateCreated">Date Submitted: </label>
                        <input type="text" id="dateCreated" name="dateCreated" onChange={this.handleInputChange} value={this.state.comment.dateCreated} />
                    </div>
                    <div style={inputStyle}>
                        <label htmlFor="description">Comment: </label>
                        <textarea rows="4" cols="50" type="text" id="description" name="description" onChange={this.handleInputChange} value={this.state.comment.description} />
                    </div>
                    <input type="submit" value="Submit Comment" />
                </form>
            </div>
        )
    }
}
