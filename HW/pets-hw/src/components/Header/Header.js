import { Typography } from "@mui/material";
import React from "react";
import { Nav } from "../Nav";
import { Link } from "react-router-dom";
import { Gallery } from "../../pages";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DogInfo } from "../DogInfo/DogInfo";

export const Header = (props, children) => {
    return <header className="header">
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon>
              </MenuIcon>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Nav>
                <Link to='/' element={<DogInfo/>}>Home</Link>
              </Nav>
            </Typography>
            <Button color="inherit"><Link to='/gallery' element={<Gallery/>}>Gallery</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
}