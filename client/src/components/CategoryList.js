import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CategoryList extends Component {
        render() {
            let categoryList = this.props.categories.map((category) => {
                return (
                    <div>
                        <Link key={category._id} to={`/category/${category._id}`}>{category.name}</Link>
                    </div>
                )
            })
            let sortedCategoryList = categoryList.sort()
            return (
                <div>
                    {sortedCategoryList}
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
