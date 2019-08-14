import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class PostPage extends Component {

    state = {
        post: {},
        comments: []
    }

    componentDidMount() {
        axios.get(`/api/post/${this.props.match.params.postId}`)
            .then((res) => {
                this.setState({ post: res.data })
                axios.get(`/api/comment/byPostId/${this.props.match.params.postId}`)
                    .then((response) => {
                        this.setState({ comments: response.data })
                    })
            })
    }


    render() {
        let commentList = this.state.comments.map((comment) => {
            return (
                <div>
                    <p>{comment.createdBy}</p>
                    <p>{comment.dateCreated}</p>
                    <p>{comment.description}</p>
                </div>
            )
        })
        return (
            <div>
                <p>{this.state.post.createdBy}</p>
                <img src={this.state.post.image} alt="Post Image" />
                <h3>Comments:</h3>
                {commentList}
            </div>
        )
    }
}