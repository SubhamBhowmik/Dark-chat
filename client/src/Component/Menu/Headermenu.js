import React, { useContext, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItem, Menu } from '@mui/material';
import { GoogleLogout } from 'react-google-login'
import { clientid } from '../../Constant/data';
import { AccountContext } from '../../context/AccountProvider'
import { makeStyles } from '@material-ui/core';
import Drawer from '../../Component/Drawer/infoDrawer'
const usestyles=makeStyles({
  menuItem:{
      fontSize:14,
    padding:'10px 15px 5px 24px',
    
  },
  logout:{
     border:"none!important",
     boxShadow:'none!important',
     padding:'20px'
  },
  '&>*':{
      padding:'0px'
  }

})






const Headermenu = () => {

   const classes=usestyles();
    const [open, setopen] = useState(false);
    const [opendrawer, setOpendrawer] = useState(false)
    const handleclose = () => {
        setopen(false);
    }
    const handleClick = (e) => {
        setopen(e.currentTarget)
    }
    const toggledrawer=()=>[
        setOpendrawer(true)
    ]
    const {account, setAccount } = useContext(AccountContext)
    const onLogoutSuccess = () => {
        alert('logged out successfully');
        console.clear();
        setAccount('');
        console.log('khali');
    }



    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepmounted
                open={Boolean(open)}
                onClose={handleclose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom', horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top', horizontal: 'right'
                }}

            >
                <MenuItem className={classes.MenuItem} onClick={()=>{
                 handleclose();toggledrawer()
                }}>Profile</MenuItem>
                <MenuItem className={classes.MenuIitem} onClick={handleclose}>
                    <GoogleLogout
                        const clientid='921088084765-3ih07d5l9p00e3uiukn2k8ht9qj1rg8u.apps.googleusercontent.com'
                       
                        clientId={clientid}
                                buttonText=""
                                onLogoutSuccess={onLogoutSuccess}
                           className={classes.logout}    

                    >
                    </GoogleLogout>


                </MenuItem>

            </Menu>
            <Drawer open={opendrawer} setOpen={setOpendrawer}/>
        </>
    )
}

export default Headermenu
