import { useContext } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Search, MoreVert } from '@material-ui/icons';

import { AccountContext } from '../../context/AccountProvider';
import { UserContext } from '../../context/Userprovider';
const useStyles = makeStyles({
    header: {
        width:'920px',
        height: 23,
         background: 'rgb(39 44 51 / 97%)',
       
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center'
    },
    displayPicture: {
        width: 37,
        height: 35,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 2px'
    },
    name: {
        color:"white",
        marginLeft: 10
    },
    rightContainer: {
        marginLeft: 'auto',
        '& > *': {
            padding: 8,
            fontSize: 22,
            color: '#919191'
        }
    },
    status: {
        fontSize: 12,
        color: 'rgb(0, 0, 0, 0.6)',
        marginLeft: 10
    }
});

const ChatHeader = () => {
    const classes = useStyles();    

   // const url = person.imageUrl || 'https://static.straitstimes.com.sg/s3fs-public/articles/2020/12/01/af_moneyheist_011220.jpg';
    
    const { person } = useContext(UserContext);

    const { activeUsers } = useContext(AccountContext);

    return (
        <Box className={classes.header}>
        <img src={person.imageUrl} alt="display picture"  className={classes.displayPicture} />     
        <Box>
            <Typography className={classes.name}>{person.name}</Typography>   
            <Typography className={classes.status}>
            {/* {activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offline'} */}
            </Typography>    
        </Box>   
        <Box className={classes.rightContainer}>
            <Search />
        
            <MoreVert />    
        </Box> 
    </Box>
    )
}

export default ChatHeader;