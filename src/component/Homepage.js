import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './Homepage.css';

function Homepage(props) {
    // const [posts,setPosts] = useState([]);
    // Single post instead of array of post
    const [post,setPost] = useState({});
    const [id,setId] = useState(1);
    const [idFromButtonClick,setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id)        
    } 

    useEffect(()=>{
        axios.get(`https://60596cd9b11aba001745c1ce.mockapi.io/api/v1/users/${id}`)
        .then( res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [idFromButtonClick])
    return (
        <div>
            <Typography>Enter the Employee Id</Typography>
            <TextField type="text" value={id} onChange={ e => setId(e.target.value)}/>
            <Button 
                type="button"
                variant="contained"
                color="primary" 
                onClick={handleClick}> Fetch User
            </Button>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <TextField 
                        value={post.country || ''} 
                        id="outlined-basic" 
                        label="Country" 
                        variant="outlined" 
                        name="country"
                        //style = {{width: 700}}
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        value={post.city || ''} 
                        id="outlined-basic" 
                        label="City" 
                        variant="outlined" 
                        name="city"
                        //style = {{width: 700}}
                        />
                </Grid>
            </Grid>
            <Grid container spacing={4}>
            <Grid item xs={6}>
                    <TextField 
                        value={post.name || ''} 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        name="name"
                        //style = {{width: 700}}
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        value={post.description || ''} 
                        id="outlined-basic" 
                        label="Descrption" 
                        variant="outlined" 
                        name="description"
                        //style = {{width: 700}}
                        />
                </Grid>
            </Grid>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         id: state.employee.id
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchEmployees: number => dispatch(buyCake(number))
//     }
// }

export default Homepage
