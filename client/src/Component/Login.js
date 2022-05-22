import React, { useContext } from 'react'
import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../context/AccountProvider';
import { clientid } from '../../src/Constant/data';
import { addUser } from '../service/api'



const useStyles = makeStyles({
    component: {
        marginTop: "7vh",
        display: "flex"
    },
    leftcomponent: {
        display: "flex",
        padding: '56px 0px 0px 56px',

    },
    qrcode: {
        position: "absolute",
        height: '240',
        width: '240',
        padding: "50px 60px "

    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    title: {
        flex: '1',
        fontSize: 26,
        fontFamily: "Roboto",

    },
    right: {
        display: "flex",
        marginTop: "10vh"
    },
    info:{
        marginLeft:"10vh",
        marginTop:"20vh",
       
    }

})
const style = {
    component: {
        display: "flex",
        marginTop: "20vh"
    },


    loginPaper: {

        width: "100vh",
        boxShadow: "none",
        borderRadius: "0%",


    }
    , cz: {

    },
    right: {

    }
}
const Login = ({ classes }) => {

    const onLoginSuccess = async (response) => {
        console.log("login sucessful");
        setAccount(response.profileObj);
        await addUser(response.profileObj);
    }
    const onLoginFail = (res) => {
        console.log('login unsuc5essful');

    }
    const Cls = useStyles();
    const { account, setAccount } = useContext(AccountContext)
    console.log(account);
    return (

        <>

            {/* <Dialog open={true}
                classes={{ paper: classes.loginPaper }}
                BackdropProps={{ style: { background: "none" } }}
            > */}


            <Box className={Cls.component}>
                <Box className={Cls.leftcomponent}>
                    <Typography className={Cls.title}>Dark-Chat</Typography>
                    <List style={{ marginTop: "10vh" }}>
                        <ListItem>1.Open Chatapp on your Laptop.</ListItem>
                        <ListItem>2.Tap Login botton on the center of the QR code.</ListItem>
                        <ListItem>3.Please dont share any personal information here.</ListItem>
                    </List>
                </Box>
                <Box className={Cls.right} >
                    <img src={'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg'} style={{ position: "absolute" }} alt="" />
                    <Box style={{ position: "relative", margin: "115px 100px", borderRadius: "15px" }} >
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
            <Box  className={Cls.info}>
                <Typography className={Cls.title}>Subham Bhowmik/ 19UEI034</Typography>
                <Typography className={Cls.title}>National Institute of Technology,Agartala</Typography>

            </Box>

            {/* </Dialog> */}


        </>
    )
}

export default withStyles(style)(Login)
