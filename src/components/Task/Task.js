import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";

export const Task = (props) => {
    const {id} = props.match.params
    const counter = useSelector(state => {return state})
    return (
        <Container>
            <h1>Hello from task {counter}</h1>
            <span>id: {id}</span>
        </Container>

    )
}