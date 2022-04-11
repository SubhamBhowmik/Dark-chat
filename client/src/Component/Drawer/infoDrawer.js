import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Drawer, Typography, makeStyles } from '@material-ui/core'
import { Box } from '@mui/material';
import Profile from './Profile';

const usestyles = makeStyles({
    header: {
        background: '#00bfa5',
        height: '97px',
        display: 'flex',
        color: "#fff",
        "&>*": {
            marginTop: 'auto',
            padding: '15px',
            fontWeigth: 800
        }
    },
    component:{
        background:'#ededed'
    }
})

const infoDrawer = ({ open, setOpen }) => {
    const classes = usestyles();
    const handleclose = () => {
        setOpen(false);
    }
    return (
        <>
            <Drawer open={open} onClose={handleclose}>
                <Box className={classes.header}>

                    <ArrowBackIcon onClick={() => handleclose()} />
                    <Typography>Profile</Typography>
                    
                </Box>
                <Box className={classes.component}>
                    <Profile />
                </Box>

            </Drawer>

        </>
    )
}

export default infoDrawer
