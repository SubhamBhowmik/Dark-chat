import React from 'react'
import Messanger from './Component/Messanger'
import AccountProvider from './context/AccountProvider'
import UserProvider from './context/Userprovider'
import Templateprovider from './theme/Templateprovider'
const App = () => {
  return (
    <>
      <Templateprovider>
      <UserProvider>
           <AccountProvider>
             <Messanger />
           </AccountProvider>
         </UserProvider>
      </Templateprovider>

    </>
  )
}

export default App
