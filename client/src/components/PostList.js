import React, { Component } from 'react'
import SinglePost from './SinglePost.js'

export default class PostList extends Component {
    render() {
        const postContainer = {
            marginBottom: "50px",
            backgroundColor: "#e8eaf6"
        }
        let postList = this.props.posts.map((post) => {
            return (
                <div>
                    <SinglePost
                        key={post._id}
                        postId={post._id}
                        createdBy={post.createdBy}
                        caption={post.caption}
                        dateCreated={post.dateCreated}
                        image={post.image}
                        categoryId={post.categoryId}
                        categoryName={this.props.category.name}
                    />
                </div>
            )
        })
        let displayedPostList = postList.reverse()
        return (
            <div style={postContainer}>
                {displayedPostList}
            </div>
        )
    }
}