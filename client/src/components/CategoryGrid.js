import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class CategoryGrid extends Component {

    render() {
        const cardGrid = {
            paddingTop: '64px',
            paddingBottom: '64px',
        }
        const cardBody = {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }
        const cardMedia = {
            paddingTop: '56.25%' // 16:9
          }
        const cardContent = {
            flexGrow: '1',
          }
        const categoryList = this.props.categories.reverse()

        return (
            <Container style={cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {categoryList.map(category => (
                        <Grid item key={category._id} xs={12} sm={6} md={4}>
                            <Card style={cardBody}>
                                <CardMedia
                                    style={cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent style={cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {category.name}
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        )
    }
}