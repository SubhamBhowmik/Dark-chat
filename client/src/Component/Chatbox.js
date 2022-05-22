import { Box, Dialog, withStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Menu from './Menu/Menu'
import Chat from './chat/Chat'
import { useContext,useState } from 'react'
import { UserContext } from '../context/Userprovider'
import { breakpoints } from '@mui/system'
import Empty from './chat/Empty'
const useStyle=makeStyles(theme=>({
    component:{

        display:"flex",
        [theme.breakpoints.down('md')]:{
           flexDirection:"row"
        }

   },
   leftComponent:{
      width:"30vw",
   },
   rightComponent:{
       
       borderLeft:"  px solid rgba(0, 0, ,0, 0.14)",
   
   },
 
   
}))
const style = {
    loginPaper: {
        height: "98%",
        width: "91%",
        boxShadow: "none",
        borderRadius: "0%",
        maxHeight:"100%",
        maxWidth:"100%",
        overflow:"hidden"
       
    }
}
const Chatbox = ({ classes }) => {
  
    const [screen, setscreen] = useState(false)
    const classname=useStyle();
    const { person, setperson } = useContext(UserContext);
    return (
        <Dialog open={true} classes={{ paper: classes.loginPaper }}
            BackdropProps={{ style: { background: "rgb(52 55 61 / 56%)" } }}>
            <Box className={classname.component}>

                  <Box className={classname.leftComponent}>
                  <Menu/>
                  </Box>
                  <Box className={classname.rightComponent} hidden={screen}>
                     
                         
                            {
                        Object.keys(person).length  ? <Chat/> : <Empty />
                            }
                         
                   
                  </Box>

            </Box>
            
        </Dialog>

    )
}

export default withStyles(style)(Chatbox)
