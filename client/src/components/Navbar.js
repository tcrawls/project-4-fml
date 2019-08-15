import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <Link to="/">Effemel</Link>
                <Link to='#'>About</Link>
            </nav>
        )
    }
}