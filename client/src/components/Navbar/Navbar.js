import React from 'react'
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core'
import useStyles from './styles'
import hashtag from '../../images/hashtag.jpg'

const Navbar = () => {
  const classes = useStyles();
  const user = null
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">My Posts</Typography>
        <img src={hashtag ?? ""} alt="hashtag" className={classes.image} height="200" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary"></Button>
          </div>
        ) : (
          <Button to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar