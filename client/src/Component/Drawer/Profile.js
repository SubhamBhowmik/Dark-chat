import { Box } from '@material-ui/core'
import { makeStyles,Typography } from '@material-ui/core'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
const usestyle=makeStyles({
    img:{
        height:'240px',
        display:"flex",
        justifyContent:'center'
    },
    displaypicture:{
      width:200,
      height:200,
      borderRadius:'50%',
      padding:'18px 0px'
    },
    namecontainer:{
        height:'57px',
        background:'#fff',
        padding:'12px 20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            fontSize: 14   ,
            color:'#009688' 
        },
        '& :last-child': {
            margin: '14px 0',
            color: '#4A4A4A'
        }
       
    },
    description: {
        padding: '10px 20px 28px 30px',
        '& > *': {
            color: 'rgba(0, 0, 0, 0.45)',
            fontSize: 12
        }
    },
    last:{
        height:'97px',
        background:'#ededed'

    }

})

const Profile = () => {
    const classes=usestyle();
    const {account}=useContext(AccountContext)
    return (
        <>
            <Box className={classes.img}>
                <img src={account.imageUrl} alt='dp' className={classes.displaypicture}/>
            </Box>
            <Box  className={classes.namecontainer}>
              <Typography>Your Name</Typography>
              <Typography>{account.name}</Typography>
            </Box>
            <Box className={classes.description}>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts</Typography>
            </Box>
            <Box className={classes.namecontainer}>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat</Typography>
            </Box>
            <Box className={classes.last}>

            </Box>
        </>
    )
}

export default Profile

