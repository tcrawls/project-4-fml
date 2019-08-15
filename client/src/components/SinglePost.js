import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export default class SinglePost extends Component {

    state = {
        wasDeleted: false
    }

    handleDeletePost = (event) => {
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

                {/* <Link key={post._id} to={`/post/${this.props.id}`}> */}
                    <p>{this.props.createdBy}</p>
                    <img src={this.props.image} alt="Post image" />
                {/* </Link> */}
                <p>{this.props.caption}</p>
                <button onClick={this.handleDeletePost}>Delete Post</button>

            </div>
        )
    }
}
