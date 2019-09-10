import React, { Component } from 'react'
import '../App.css'
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {' © '}
                        {new Date().getFullYear()}
                        {' '}
                        <Link color="inherit" href="#">
                            Thompson Rawls
                        </Link>
                    </Typography>
                </footer>
            </div>
        )
    }
}
