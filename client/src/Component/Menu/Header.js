import { Box, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import Headermenu from './Headermenu';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import Drawer from '../../Component/Drawer/infoDrawer'

const useStyles=makeStyles({
    header:{
        display:'flex',
        height:"35px",
        background:"rgb(39 44 51 / 97%)",
        padding:'10px',
        alignItems:'center'
    },
    avater:{
    height:37,
    width:37,
    borderRadius:"50%"
    },
    Icons:{
        marginLeft:'auto',
        '& > *':{
           padding:8,
           color:'#919191'
        },
        '&:first.child':{
            fontSize:22,
            marginRight:'0',
            marginTop:3
        },
       
    }
})

const Header = () => {
      const {account} = useContext( AccountContext)
      console.log(account);
      const classes=useStyles();
     const [open, setOpen] = useState(false);
      const toggle=()=>{
            setOpen(true);
    }
    return (

        
        <>
        <Box className={classes.header}>
            <img onClick={()=>toggle()} className={classes.avater} src={account.imageUrl} alt={''}/>
            <Box  className={classes.Icons}>
                <ChatIcon/>
                
               <Headermenu/>
            </Box>

        </Box>
            <Drawer open={open} setOpen={setOpen}/>
        </>
    )
}

export default Header
