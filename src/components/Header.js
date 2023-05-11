import React, {Fragment, useState, useEffect} from 'react';
import {
  Grid,
  IconButton,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Toolbar,
  Tooltip,
  Avatar,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import moment from 'moment';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      };

    return(
        <Fragment>
            <Grid container style={{background: '#16526D'}}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div
                        style={{
                        textAlign: 'left',
                        height: 'auto',
                        width: '80%',
                        padding: 20,
                        }}>
                        <Typography
                        variant="h5"
                        style={{fontWeight: '600', color: 'white'}}>
                        COMMUNITY-BASED EARLY WARNING SYSTEM FOR LANDSLIDES
                        </Typography>
                        <Typography
                        variant="h6"
                        style={{fontWeight: '300', color: 'white'}}>
                        Iloilo PDRRMO
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    )
} 

export default Header;