import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class SinglePost extends Component {

    state = {
        post: {},
        comments: []
    }

    componentDidMount() {
        axios.get(`/api/post/${this.props.match.params.postId}`)
            .then((res) => {
                this.setState({ post: res.data })
                // axios.get(`/api/post/${this.props.match.params.categoryId}`)
                //     .then((response) => {
                //         this.setState({ posts: response.data })
                //     })
            })
    }


    render() {
        return (
            <div>
                <p>{this.state.post.createdBy}</p>
                <img src={this.state.post.image} alt="Post Image" />
            </div>
        )
    }
}