import { useState, useEffect, useContext, useRef } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Footer from './Footer'
import Message from './Message';
import { AccountContext } from '../../context/AccountProvider';
import {newMessages,getMessages} from '../../service/api.js'
import socketIo from 'socket.io-client';

const useStyles = makeStyles({
    wrapper: {
        //const link https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png
        backgroundImage: `url(${'https://images.unsplash.com/photo-1449156733864-dd5471bb7427?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070'})`,
        // height: 'calc(100% - 114px)',
        backgroundSize: '100%'
    },
    footer: {
        height: '55px',
        background: '#ededed',
        // position: 'absolute',
        width: '100%',
        // bottom: 0
    },
    component: {
        height: '79vh',
        overflowY: 'scroll'
    },
    container: {
        padding: '8px 80px'
    }
})


const Messages = ({person,conversation}) => {
    
    const scrollRef = useRef();

    const classes = useStyles();
    const [value, setValue] = useState();
    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
  //  const { account, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

    useEffect(() => {
    
          
          
     
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, []);

    
    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.sender) && 
            setMessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);


    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        getMessageDetails();
    },  [conversation?._id, person._id, newMessageFlag]);

    const receiverId = conversation?.members?.find(member => member !== account.googleId);

    const sendText = async (e) => {
        let code = e.keyCode || e.which;
        if(!value) return;

        if(code === 13) { 
            let message = {
                sender: account.googleId,
                conversationId: conversation._id,
                text: value
            };

        
            socket.current.emit('sendMessage', {
                senderId: account.googleId,
                receiverId,
                text: value
            })


            await newMessages(message);

            setValue('');
            setNewMessageFlag(prev => !prev); 
        } 
    }

    return (
       <>

         <Box className={classes.wrapper}>
            <Box className={classes.component}>
                {
                    messages && messages.map(message => (
                        <Box className={classes.container} ref={scrollRef} >
                            <Message message={message} />
                        </Box>
                    ))
                }
            </Box>
            <Footer sendText={sendText} value={value} setValue={setValue} />
        </Box>
       </>
    )
}

export default Messages;