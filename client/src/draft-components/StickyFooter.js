import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


export default class StickyFooter extends Component {
    render() {

        const root = {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }

        const footer = {
            // padding: '100px',
            // margin: '100px',
            padding: 'spacing(2)',
            marginTop: '100px',
            backgroundColor: 'white',
        }

        return (
            <div className={root}>
                <CssBaseline />
                <footer className={footer}>
                    <Container maxWidth="sm">
                        <Typography variant="body1">My sticky footer can be found here.</Typography>

                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            <Link color="inherit" href="https://material-ui.com/">
                                Your Website
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>

                    </Container>
                </footer>
            </div>
        )
    }
}
