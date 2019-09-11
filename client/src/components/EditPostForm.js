import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class EditPostForm extends Component {
    state = {
        post: {
            createdBy: '',
            dateCreated: '',
            image: '',
            caption: '',
            categoryId: this.props.match.params.categoryId
        },
        redirectToPostPage: false
    }
    componentDidMount() {
        axios.get(`/api/post/${this.props.match.params.postId}`)
            .then((res) => {
                this.setState({ post: res.data })
            })
    }
    handleInputChange = (event) => {
        const copiedPost = { ...this.state.post }
        copiedPost[event.target.name] = event.target.value
        this.setState({ post: copiedPost })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/post/${this.props.match.params.postId}`, this.state.post)
            .then((res) => {
                this.setState({
                    post: res.data,
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
            margin: "15px"
        }
        const buttonStyle = {
            marginLeft: "15px"
        }
        if (this.state.redirectToPostPage) {
            return <Redirect to={`/category/${this.state.post.categoryId}`} />
        }
        return (
            <div>
                <Button style={backButton} component={Link} to={`/category/${this.state.post.categoryId}`} color="primary" aria-label="back" >
                    <Icon>arrow_back</Icon>
                    Back to Album Page
                </Button>
                <h2 style={formStyle}>Edit Album</h2>
                <form onSubmit={this.handleSubmit} style={formStyle}>
                    <div style={inputStyle}>
                        <label htmlFor="createdBy">Posted By: </label>
                        <input type="text" id="createdBy" name="createdBy" onChange={this.handleInputChange} value={this.state.post.createdBy} />
                    </div>
                    <div style={inputStyle}>
                        <label htmlFor="dateCreated">Date Posted: </label>
                        <input type="text" id="dateCreated" name="dateCreated" onChange={this.handleInputChange} value={this.state.post.dateCreated} />
                    </div>
                    <div style={inputStyle}>
                        <label htmlFor="image">Image: </label>
                        <input type="text" id="image" name="image" onChange={this.handleInputChange} value={this.state.post.image} />
                    </div>
                    <div style={inputStyle}>
                        <label htmlFor="caption">Caption: </label>
                        <input type="text" id="caption" name="caption" onChange={this.handleInputChange} value={this.state.post.caption} />
                    </div>
                    <input style={buttonStyle} type="submit" value="Update Post" />
                </form>
            </div>
        )
    }
}
