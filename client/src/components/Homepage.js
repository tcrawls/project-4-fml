import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreateCategoryForm from './CreateCategoryForm.js'
import CategoryList from './CategoryList.js'

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
        if (this.state.formIsDisplayed) {
            return (
                <div>
                    <CreateCategoryForm />
                    <CategoryList
                        categories={this.state.categories}
                    />
                </div>
            )
        }
        return (
            <div>
                <div>
                    <img src="https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5b9729d4aa97e-5597-8182b25d498fa69004c49726a7b499a6@1x.jpg" />
                </div>
                <div>
                    <Link to='/post/new'>Create Post</Link>
                </div>
                <h3>Browse by Category:</h3>
                <button onClick={this.handleClick}>+</button>
                {/* <h2><a href="#" onClick={handleClick}>+</a></h2> */}
                <CategoryList
                    categories={this.state.categories}
                />
            </div>
        )
    }
}

