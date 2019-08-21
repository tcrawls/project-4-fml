import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default class SelectCategoryList extends Component {
    render() {
        const itemStyle = {
            textAlign: 'center',
            margin: '0 auto',
            width: '250px',
            // backgroundColor: '#e8eaf6',
        }
        const item = {
            textAlign: 'center',
            borderRadius: "3px",
            border: "1px solid #e6e6e6"
        }
        const selectAlbum = {
            marginTop: "20px"
        }

        let categoryList = this.props.location.state.categories.map((category) => {
            return (
                <div>
                    <List style={itemStyle}>
                        <ListItem style={item} button component="a" href={`/post/${category._id}/new`}>
                            <ListItemText primary={category.name} />
                        </ListItem>
                    </List>
                </div>
            )
        })
        let displayedCategoryList = categoryList.reverse()
        return (
            <div>
                <Typography style={selectAlbum} variant="h5" align="center" color="textPrimary" gutterBottom>
                    Select Album:
                </Typography>
                {displayedCategoryList}
            </div>
        )
    }
}
