import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
// import SingleComment from './SingleComment.js'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import SingleComment from './SingleComment.js'



export default class CommentList extends Component {

    render() {

        const commentButton = {
            // padding: "10px"
        }

        const commentIcon = {
            // padding: "5px"
        }

        const postComments = {
            padding: "5px 16px"
        }

        let commentSection = this.props.comments.map((comment) => {
            return (
                <SingleComment
                    key={comment._id}
                    id={comment._id}
                    createdBy={comment.createdBy}
                    dateCreated={comment.dateCreated}
                    description={comment.description}
                    postId={comment.postId}
                />
            )
        })

        //if commentList.length > 0, render Add Comment button + CommentList 
        //otherwise, just render Add Comment button


        return (
            <div style={postComments}>
                <div>
                    <IconButton style={commentButton} component={Link} to={`/comment/${this.props.postId}/new`} color="primary" size="small" variant="contained" aria-label="add comment">
                        Add Comment
                        <Icon style={commentIcon}>add_comment</Icon>
                    </IconButton>
                </div>
                {commentSection.length > 0}
                ?
                <div>{commentSection}</div>
                :
                <p>No comments yet!</p>
            </div>
        )
    }
}
