import React, { useEffect, useState,useContext } from 'react'
import { getUser } from '../../service/api'
import { Box,makeStyles } from '@material-ui/core';
import ConversationUtil from './ConversationUtil';
import {AccountContext} from '../../context/AccountProvider.js'



const useStyles = makeStyles({
    component: {
        overflow: 'overlay',
        height: '81vh'
    },
    divider: {
        margin: '0 0 0 67px',
        backgroundColor: '#F2F2F2'
    }
})

const Conversation = ({text}) => {

   const [users, setUsers] = useState([]);
   
   const { account, socket, setActiveUsers, } = useContext(AccountContext);
 
   useEffect(() => {
      const fetchData = async () => {
         let data = await getUser();
      
        ;
         setUsers(data);
     
     }
      fetchData();
   }, [text]);

   useEffect(() => {
      socket.current.emit('addUser', account.googleId);
      socket.current.on("getUsers", user => {
          setActiveUsers(users);
           
          console.log(users);

      })
  }, [account])
   return (
      <Box>
         {
            users.map(p=>{
              
            return <>
            
         
              
            {
              (p.googleId!==account.googleId) &&
              <ConversationUtil p={p}/>
                 
              
            }
               
              
            
           
            </>
          
            })
         }
      </Box>


   )
}

export default Conversation














// import { useState, useEffect, useContext, useRef } from 'react';
// import { Box, makeStyles, Divider } from '@material-ui/core';

// import { AccountContext } from '../../../context/AccountProvider';

// //components
// import Conversation from './Conversation';
// import { getUsers } from '../../../service/api';

// import React, { useEffect, useState,useContext } from 'react'
// import { getUser } from '../../service/api'
// import { Box,makeStyles } from '@material-ui/core';
// import ConversationUtil from './ConversationUtil';
// import {AccountContext} from '../../context/AccountProvider.js'

// const useStyles = makeStyles({
//     component: {
//         overflow: 'overlay',
//         height: '81vh'
//     },
//     divider: {
//         margin: '0 0 0 67px',
//         backgroundColor: '#F2F2F2'
//     }
// })

// const Conversations = ({ text }) => {
//     const classes = useStyles();
//     const [users, setUsers] = useState([]);
    
//     const { account, socket, setActiveUsers } = useContext(AccountContext);

//     useEffect(() => {
//         const fetchData = async () => {
//             let data = await getUser();
//             let fiteredData = data.map(user => user.name.toLowerCase().includes(text.toLowerCase()));
 
//             setUsers(fiteredData);
//         }
//         fetchData();
//     }, [text]);

//     useEffect(() => {
//         socket.current.emit('addUser', account.googleId);
//         socket.current.on("getUsers", users => {
//             setActiveUsers(users);
//         })
//     }, [account])

//     return (
//         <Box className={classes.component}>
//             {
//                 users && users.map((users, index) => (
//                     users.googleId !== account.googleId && 
//                         <>
//                             <ConversationUtil users={users} />
                            
                           
                            
//                         </>
//                 ))
//             }
//         </Box>
//     )
// }

// export default Conversations;