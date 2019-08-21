import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class CreatePostForm extends Component {

    state = {
        categories: [],
        post: {
            createdBy: '',
            dateCreated: '',
            image: '',
            caption: '',
            categoryId: this.props.match.params.categoryId
        },
        redirectToCategoryPage: false
    }

    handleInputChange = (event) => {
        const copiedPost = { ...this.state.post }
        copiedPost[event.target.name] = event.target.value
        this.setState({ post: copiedPost })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/post', this.state.post)
            .then((res) => {
                this.setState({
                    post: res.data,
                    redirectToCategoryPage: true
                })
            })
    }

    render() {
        const backButton = {
            marginTop: "7px",
            marginLeft: "15px"
        }
        if (this.state.redirectToCategoryPage) {
            return <Redirect to={`/category/${this.props.match.params.categoryId}`} />
        }
        return (
            <div>
                <Button style={backButton} component={Link} to={`/`} color="primary" aria-label="back" >
                    <Icon>arrow_back</Icon>
                    Back to Homepage
            </Button>
                <h2>New Post</h2>
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
                        <textarea type="text" id="caption" name="caption" onChange={this.handleInputChange} value={this.state.post.caption} />
                    </div>
                    <input type="submit" value="Create Post" />
                </form>
            </div>
        )
    }
}
