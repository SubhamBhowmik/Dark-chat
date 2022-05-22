import {AppBar,Toolbar,makeStyles, Box} from '@material-ui/core'
import Login from './Login';
import { AccountContext } from '../context/AccountProvider';
import { useContext } from 'react';
import Chatbox from './Chatbox';
const useStyle=makeStyles({
    component:{
      height:"10vh",
      background:"#dcdcdc"
    },
    loginheader:{
        height:100,
        background:'#030a32',
        boxShadow:'none'

    },
    header:{
        height:100,
        background:'#030a32',
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
                <Toolbar style={{marginLeft:"40px"}}>       ** This is a chatapp developed by Subham Bhowmik.Its only for educational purpose,Dont share any personal information here.It is still in developing stage.</Toolbar>
            </AppBar>
         
         {
             account?<Chatbox/>:<Login/>
         }
         

           
          
        </Box>
    )
}

export default Messanger
