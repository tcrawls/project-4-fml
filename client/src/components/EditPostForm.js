import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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
        if (this.state.redirectToPostPage) {
            return <Redirect to={`/post/${this.props.match.params.postId}`} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="createdBy">Posted By: </label>
                    <input type="text" id="createdBy" name="createdBy" onChange={this.handleInputChange} value={this.state.post.createdBy} />
                </div>
                <div>
                    <label htmlFor="dateCreated">Date Posted: </label>
                    <input type="text" id="dateCreated" name="dateCreated" onChange={this.handleInputChange} value={this.state.post.dateCreated} />
                </div>
                <div>
                    <label htmlFor="image">Image: </label>
                    <input type="text" id="image" name="image" onChange={this.handleInputChange} value={this.state.post.image} />
                </div>
                <div>
                    <label htmlFor="caption">Caption: </label>
                    <input type="text" id="caption" name="caption" onChange={this.handleInputChange} value={this.state.post.caption} />
                </div>
                <input type="submit" value="Update Post" />
            </form>
        )
    }
}
