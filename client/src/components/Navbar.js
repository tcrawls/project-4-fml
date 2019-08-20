import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



export default class Navbar extends Component {
    render() {

        const icon = {
            marginRight: "10px"
        }

        return (
            // <nav className='navbar'>
            //     <Link to="/">Effemel</Link>
            //     <Link to='#'>About</Link>
            // </nav>
            <div>
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon style={icon} />
                        <Button component={Link} to={'/'} variant="h5" color="inherit" noWrap>
                        <Typography variant="h5" color="inherit" noWrap>
                                Effemel
                        </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}