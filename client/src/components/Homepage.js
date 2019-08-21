import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreateCategoryForm from './CreateCategoryForm.js'
import CategoryList from './CategoryList.js'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default class Homepage extends Component {

    state = {
        categories: [],
        formIsDisplayed: false
    }

    componentDidMount() {
        axios.get('/api/category')
            .then((res) => {
                this.setState({ categories: res.data, formIsDisplayed: false })
            })
    }
    handleClick = (event) => {
        event.preventDefault()
        this.setState({ formIsDisplayed: !this.state.formIsDisplayed })
    }

    render() {
        const listStyle = {
            textAlign: 'center',
            margin: '0 auto',
            paddingTop: '20px',
            width: '360',
            backgroundColor: '#e8eaf6'
        }
        const heroContent = {
            backgroundColor: "#fafafa",
            padding: "50px",
        }
        const heroButtons = {
            marginTop: "20px",
        }
        const heroButtonIndividual = {
            width: "175px"
        }
        if (this.state.formIsDisplayed) {
            return (
                <div>
                    <CreateCategoryForm />
                </div>
            )
        }
        return (
            <div>
                <div style={heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            FamGram
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            A family-centered celebration of life's memorable moments. Share and celebrate moments with the ones you love.
                        </Typography>
                        <div style={heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button component={Link}
                                        to={{
                                            pathname: '/category/select',
                                            state: {
                                                categories: this.state.categories
                                            }
                                        }}
                                        style={heroButtonIndividual} variant="contained" color="primary">
                                        Post a Photo
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={this.handleClick} style={heroButtonIndividual} variant="outlined" color="primary">
                                        Create an Album
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div style={listStyle}>
                    <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                        Browse Albums:
                    </Typography>
                    <CategoryList
                        categories={this.state.categories}
                    />
                </div>
            </div>
        )
    }
}

