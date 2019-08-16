import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export default class SinglePost extends Component {

    state = {
        wasDeleted: false
    }

    handleDeletePost = (event) => {
        event.preventDefault()
        axios.delete(`/api/post/${this.props.id}`)
            .then(() => {
                this.setState({ wasDeleted: true })
            })
    }

    render() {
        if (this.state.wasDeleted) {
            return <Redirect to={`/category/${this.props.categoryId}`} />
        }
        
        return (
            <div>
                <p>Posted by {this.props.createdBy} on {this.props.dateCreated}:</p>
                <Link key={this.props.id} to={`/post/${this.props.id}`}>
                    <img src={this.props.image} alt="Post image" />
                </Link>
                <p>{this.props.caption}</p>
                <button onClick={this.handleDeletePost}>Delete Post</button>
                <Link to={`/post/${this.props.categoryId}/edit/${this.props.id}`}>Edit Post</Link>
                
            </div>
        )
    }
}
