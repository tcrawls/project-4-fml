import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PostList from './PostList.js'

export default class CategoryPage extends Component {
    state = {
        category: {},
        posts: [],
        redirectToHome: false
    }
    componentDidMount() {
        axios.get(`/api/category/${this.props.match.params.categoryId}`)
            .then((res) => {
                this.setState({ category: res.data })
                axios.get(`/api/post/byCategoryId/${this.props.match.params.categoryId}`)
                    .then((response) => {
                        this.setState({ posts: response.data })
                    })
            })
    }
    handleDeleteCategory = (event) => {
        event.preventDefault()
        axios.delete(`/api/category/${this.props.match.params.categoryId}`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }
    render() {
        const header = {
            marginTop: "5px",
            textAlign: "center"
        }
        const backButton = {
            marginTop: "7px",
            marginLeft: "15px"
        }
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Button style={backButton} component={Link} to={`/`} color="primary" aria-label="back" >
                    <Icon>arrow_back</Icon>
                    Back to Homepage
                </Button>
                <div style={header}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {this.state.category.name}
                        <IconButton onClick={this.handleDeleteCategory} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Typography>

                    <Fab variant="contained" color="primary" align="center" component={Link} to={`/post/${this.props.match.params.categoryId}/new`}>
                        Create New Post
                    </Fab>
                </div>
                <PostList
                    category={this.state.category}
                    posts={this.state.posts}
                />
            </div>
        )
    }
}