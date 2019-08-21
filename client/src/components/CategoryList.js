import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



export default class CategoryList extends Component {
    render() {
        const itemStyle = {
            // width: '100%',
            textAlign: 'center',
            margin: '0 auto',
            width: '250px',
            backgroundColor: '#e8eaf6',
        }
        const item = {
            textAlign: 'center',
            borderRadius: "3px",
            border: "1px solid #e6e6e6"
        }

        let categoryList = this.props.categories.map((category) => {
            return (
                <div>
                    <List style={itemStyle}>
                        <ListItem style={item} button component="a" href={`/category/${category._id}`}>
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
