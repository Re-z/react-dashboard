import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import React from "react";


export const DashboardTask = (props) => {

    return (
        <Paper>
            <Box mt={2} p={1}>
                <p>{props.data.heading}</p>
                <Box my={1}>
                    <Chip size="small" label={props.data.type}/>
                </Box>
                <Box my={1}>
                    <Typography variant="subtitle2">{props.data.status}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <Typography variant="subtitle2"> <strong> Story points:</strong> </Typography>
                        <Box ml={1}>
                            <Chip label={props.data.storyPoints} size="small"/>
                        </Box>
                    </Box>
                    <span>{props.data.id}</span>
                </Box>

            </Box>
        </Paper>
    )
}