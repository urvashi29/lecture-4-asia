import React, { Component } from "react"
import withRouter from './withRouter';
import axios from "axios";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

class Post extends Component {
    state = {
        user: null
    }

    componentDidMount = () => {
        // let id = this.props.params.match.user_id;//react-router-dom 5

        let id = this.props.params.user_id;
        console.log(id);
        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then((res) => {
            this.setState({
                user: res.data
            })
        }).catch(err => console.log(err));
    }

    render() {
        const user = this.state.user;
        return (
            <>
                {(user) ? (
                    <>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {user.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p>{user.email}</p>
                                    <p>{user.address.street}</p>
                                </Typography>
                            </CardContent>

                        </Card>

                    </>) : ('')}
            </>
        )

    }
}


export default withRouter(Post);