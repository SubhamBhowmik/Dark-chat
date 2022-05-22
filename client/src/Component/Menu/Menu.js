import React, { useState } from 'react'
import Header from './Header'
import Search from './Search'
import Conversation from './Conversation'
import { Box } from '@material-ui/core'

const Menu = () => {
    const [text, setText] = useState("")
    return (
        <>
            <Box >

                <Header />
                <Search setText={setText} />
                <Conversation text={text} />
            </Box>
        </>
    )
}

export default Menu
