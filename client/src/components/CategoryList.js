import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



export default class CategoryList extends Component {
    render() {

        const itemStyle = {
            // width: '100%',
            textAlign: 'center',
            margin: '0 auto',
            width: '340px',
            backgroundColor: 'theme.palette.background.paper',
          }

          const listStyle = {
              width: '500px'
          }

        let categoryList = this.props.categories.map((category) => {
            return (
                <div>
                    <List aria-label="secondary mailbox folders">
                        <ListItem style={itemStyle} button component="a" href={`/category/${category._id}`}>
                            <ListItemText primary={category.name} />
                        </ListItem>
                    </List>
                </div>
                )
        })
        let displayedCategoryList = categoryList.reverse()
        return (
            <div>
                {displayedCategoryList}
            </div>
        )
    }
}



//     convertToStrings() {
//         var categoryStrings = this.props.categories.map((category) => {
//             return category.name
//         })
//         var sortedCategoryList = categoryStrings.sort()
//         return sortedCategoryList
//     }

//     render() {
//         let displayedCategoryList = sortedCategoryList.map((category) => {
//             return (
//                 <Link key={category._id} to={`/category/${category._id}`}>{category.name}</Link>

//             )
//         })
//         this.convertToStrings
//         return (
//             <div>
//                 {sortedCategoryList}
//             </div>
//         )
//     }
// }
