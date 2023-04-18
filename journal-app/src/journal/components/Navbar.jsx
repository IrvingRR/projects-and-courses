import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogoutThunk } from "../../redux/auth/thunks";

export const Navbar = ({drawerWidth = 240}) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogoutThunk());
    };

  return (
    <AppBar position='fixed' sx={{ width: {sm: `calc(100% - ${drawerWidth}px)`}, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
            <IconButton color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography>JournalApp</Typography>
                <IconButton color='error' onClick={onLogout}>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
