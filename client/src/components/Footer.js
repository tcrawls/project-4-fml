import React, { Component } from 'react'
import '../App.css'
import Typography from '@material-ui/core/Typography';
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
