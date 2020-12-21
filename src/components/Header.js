import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" color="inherit">
                        React dashboard
                    </Typography>
                    <Box display="flex" className="headerNav">
                        <Link to="/" exact >
                            <Typography>Home</Typography>
                        </Link>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    )
}