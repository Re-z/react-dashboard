import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {DashboardTask} from "../DashboardTask";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {Button} from "@material-ui/core";
import {increment} from "../../redux/increment";

const columns = [
    {id: 0, label: 'To Do'},
    {id: 1, label: 'In progress'},
    {id: 2, label: 'Need review'},
    {id: 3, label: 'Done'},
]
const tasks = [
    {
        heading: 'Blablabla task heading',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque est excepturi expedita molestiae qui quidem ratione tempora veniam vitae voluptatibus?',
        status: 'Todo',
        storyPoints: '2',
        id: 'DWC-23',
        type: 'Development',
    },
    {
        heading: 'Blablabla task heading2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque est excepturi expedita molestiae qui quidem ratione tempora veniam vitae voluptatibus?',
        status: 'In Progress',
        storyPoints: '1',
        id: 'DWC-22',
        type: 'Bug fixing',
    },
]


export const Dashboard = () => {
    const dispatch = useDispatch();

    const countNumber = useSelector(state => {return state})
    return (
        <Container>
            <h1>Dashboard page {countNumber}</h1>
            <Box display="flex" flexDirection="column">
                <Grid container spacing={1}>
                    {
                        columns.map(column => {
                            return (
                                <Grid key={column.id} item xs={3}>

                                    <Box p={1} bgcolor="background.default">
                                        <Typography color="textPrimary">
                                            {column.label}
                                        </Typography>
                                        {
                                            tasks.map(task => {
                                                return (
                                                    <Link key={task.id} to={`/task/${task.id}`}>
                                                        <DashboardTask data={task}/>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Box>
                                </Grid>
                                )
                            })
                        }
                </Grid>
            </Box>
            <Button onClick={() => dispatch(increment())} variant="contained">increment</Button>

        </Container>
    )
}