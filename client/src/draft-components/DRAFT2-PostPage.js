import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import SingleComment from './SingleComment.js'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';






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

    const cardStyle = {
      maxWidth: "500px",
      // textAlign: "center"
    }
    const mediaStyle = {
      height: "300px"
    }


    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }
    let commentList = this.state.comments.map((comment) => {
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
    let displayedCommentList = commentList.reverse()
    //         return (
    //             <div>
    //                 <div>
    //                     <Link to={`/category/${this.state.post.categoryId}`}>Back to Category Page</Link>
    //                 </div>
    //                 <p>Posted by {this.state.post.createdBy} on {this.state.post.dateCreated}:</p>
    //                 <img src={this.state.post.image} alt="Post Image" />
    //                 <p>{this.state.post.caption}</p>
    // <h3>Comments:</h3>
    // <Link to={`/comment/${this.props.match.params.postId}/new`}>Add Comment</Link>
    // {displayedCommentList}
    //             </div>
    //         )
    //     }
    // }



    return (
      <div>
        <Card style={cardStyle}>
          <CardActionArea>
            <CardMedia
              style={mediaStyle}
              image={this.state.post.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                Lizard
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
        <div>
          <h3>Comments:</h3>
          <Link to={`/comment/${this.props.match.params.postId}/new`}>Add Comment</Link>
          {displayedCommentList}
        </div>
      </div>
    )
  }
}