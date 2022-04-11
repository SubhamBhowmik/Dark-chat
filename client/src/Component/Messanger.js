import {AppBar,Toolbar,makeStyles, Box} from '@material-ui/core'
import Login from './Login';
import { AccountContext } from '../context/AccountProvider';
import { useContext } from 'react';
import Chatbox from './Chatbox';
const useStyle=makeStyles({
    component:{
      height:"100vh",
      background:"#dcdcdc"
    },
    loginheader:{
        height:200,
        background:'#00bfa5',
        boxShadow:'none'

    },
    header:{
        height:115,
        background:'#00bfa5',
        boxShadow:'none'

    }
})


const Messanger = () => {

    const classes=useStyle();
    const {account}=useContext(AccountContext)
      console.log(account);
    return (
        <Box className={classes.component}>
            <AppBar className={account?classes.header:classes.loginheader}>
                <Toolbar></Toolbar>
            </AppBar>
         
         {
             account?<Chatbox/>:<Login/>
         }
         

           
          
        </Box>
    )
}

export default Messanger
