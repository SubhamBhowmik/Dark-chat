import React, { useContext } from 'react'
import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../context/AccountProvider';
import { clientid } from '../../src/Constant/data';
import {addUser} from '../service/api'



const useStyles = makeStyles({
    component: {
        display: "flex"
    },
    leftcomponent: {

        padding: '56px 0px 0px 56px',

    },
    qrcode: {
        position:"absolute",
        height: '240',
        width:'240' ,
        padding: "50px 60px "

    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    title: {
        flex: '1',
        fontSize: 26,
        fontFamily: "Roboto",
        marginBottom: "25px"
    },

})
const style = {
    loginPaper: {
        height: "95%",
        width: "60%",
        boxShadow: "none",
        borderRadius: "0%",
        marginTop: "12%",
        maxheight: "100%",
        maxWidth: "100%"
    }
}
const Login = ({ classes }) => {

    const onLoginSuccess =async (response) => {
        console.log("login sucessful");
        setAccount(response.profileObj);
      await  addUser(response.profileObj);
    }
    const onLoginFail = (res) => {
        console.log('login unsuc5essful');

    }
    const Cls = useStyles();
    const { account, setAccount } = useContext(AccountContext)
    console.log(account);
    return (

        <>

            <Dialog open={true}
                classes={{ paper: classes.loginPaper }}
                BackdropProps={{ style: { background: "none" } }}
            >
                <Box className={Cls.component}>
                    <Box className={Cls.dialog}>
                        <Typography className={Cls.title}>Whatsapp Chat App</Typography>
                        <List>
                            <ListItem>1.Open Whatsapp on your phone.</ListItem>
                            <ListItem>2.Tap menu or settings and select Linked Device.</ListItem>
                            <ListItem>3.Point your phone to this screen to capture the code.</ListItem>
                        </List>
                    </Box>
                    <Box  >
                        <img  src={'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg'} className={Cls.qrcode} alt="" />
                        <Box style={{position:"relative",marginTop:"180px",marginLeft:"165px"}}>
                            <GoogleLogin 
                                clientid='921088084765-3ih07d5l9p00e3uiukn2k8ht9qj1rg8u.apps.googleusercontent.com'

                                buttonText="Login"
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFail}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Box>
                    </Box>

                </Box>
            </Dialog>


        </>
    )
}

export default withStyles(style)(Login)
