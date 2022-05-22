import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';


const usestyle = makeStyles((theme)=>({
    component: {
        background: 'rgb(39 44 51 / 97%)',
        height: 38,
        display: 'flex',
        alignItems: 'center',
        transition: 'box-shadow .18s ease-out,background-color .25s ease-out'
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        margin: '0 13px',
        width: '100%'
      },
      searchIcon: {
        color: 'black',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center'
      },
      inputRoot: {
        width: '100%'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 65,
        fontSize: 14,
        height: 15,
        width: '100%'
    }
}
))


//search is coming from Menu.js component
const Search = ({setText}) => {
    const classes = usestyle();
    return (
        <>
           <Box className={classes.component}>
        <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon fontSize="small"/>
            </Box>
            <InputBase
              placeholder="Search or start new chat"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                //text change pa api search marega using lifting state
                
              }}
               onChange={(e)=>setText(e.target.value)}
            />
          </Box>
        </Box>


        </>
    )
}

export default Search
