import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { UserContext } from '../../context/Userprovider'
import { getConversation } from '../../service/api'
import { AccountContext } from '../../context/AccountProvider'

const Chat = () => {
    const { person } = useContext(UserContext)
    const { account } = useContext(AccountContext)
    const [conversation, setConversation] = useState({})
    useEffect(() => {
        //api 
        const getConversationdetalis = async () => {
            let data = await getConversation({ sender: account.googleId, receiver: person.googleId })
            setConversation(data);
        }
        getConversationdetalis();
    }, [person.googleId])
    return (
        <>
            <ChatHeader />
            <Messages person={person} conversation={conversation}/>
        </>
    )
}

export default Chat
