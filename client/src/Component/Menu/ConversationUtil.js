import React, { useState,useContext } from 'react'
import {AccountContext} from '../../context/AccountProvider'
import { UserContext } from '../../context/Userprovider'
import { Box, Typography,makeStyles } from '@material-ui/core'
import {setconversation} from '../../service/api'
//import user from '../../../../server/model/User'
//import { getUsers } from '../../service/api.js'
 const usestyle=makeStyles({
    component: {
        height:"10vh",
        display: 'flex',
        padding: '13px 0',
        cursor: 'pointer',
        '&:hover,&:focus': {
            background: "#o746e",
         },
        overflow:'overlay',
      
    },
    displayPicture: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 14px'
    },
    holder:{
     
     overflow:'hidden'
    },
    container: {
        display: 'flex'
    },
 })

const ConversationUtil = ({p}) => {
    const [flag, setFlag] = useState(true);
  
    const classes=usestyle();
    const {account}=useContext(AccountContext)
    const {setperson}=useContext(UserContext)
     

    console.log(p);
    
    const getUser = async () => {
        setperson(p);
        await setconversation({ senderId: account.googleId, receiverId: p.googleId });
    }
    return (
    
        <>
            <Box  className={classes.component}  onClick={() =>{ getUser()}} >
            <img  className={classes.displayPicture} src={p.imageUrl}/>
               <Typography>{p.givenName}</Typography>
            

                </Box>
                
                

        </>
    )
}

export default ConversationUtil
