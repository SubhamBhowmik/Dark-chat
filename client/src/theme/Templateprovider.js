import React, { createContext } from 'react'
import { ThemeProvider,createTheme } from '@material-ui/core'

export const TemplateContext= createContext(null)
const Templateprovider = ({children}) => {

    const theme=createTheme({
        overrides:{
            MuiDrawer:{
                paperAnchorLeft:{
                    height:'95%',
                    top:"15px",
                    width:"30%",
                    left:'62px'
                }
            }
        }
    })
    return (
        <>
            <TemplateContext.Provider>
                <ThemeProvider theme={theme}>
                   {children}
                </ThemeProvider>
            </TemplateContext.Provider>
        </>
    )
}

export default Templateprovider
