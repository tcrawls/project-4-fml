import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class EditCommentForm extends Component {
    state = {
        comment: {
            createdBy: '',
            dateCreated: '',
            description: '',
            postId: this.props.match.params.postId
        },
        redirectToPostPage: false
    }
    componentDidMount() {
        axios.get(`/api/comment/${this.props.match.params.commentId}`)
            .then((res) => {
                this.setState({ comment: res.data })
            })
    }
    handleInputChange = (event) => {
        const copiedComment = { ...this.state.comment }
        copiedComment[event.target.name] = event.target.value
        this.setState({ comment: copiedComment })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/comment/${this.props.match.params.commentId}`, this.state.comment)
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
        if (this.state.redirectToPostPage) {
            return <Redirect to={`/post/${this.props.match.params.postId}`} />
        }
        return (
            <div>
                <Button style={backButton} component={Link} to={'/'} color="primary" aria-label="back" >
                    <Icon>arrow_back</Icon>
                    Back to Homepage
                </Button>
                <h2>Edit Comment</h2>
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
                    <input type="submit" value="Update Comment" />
                </form>
            </div>
        )
    }
}
