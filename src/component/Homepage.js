import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './Homepage.css';
import {fetchUsers} from '../redux'
import {connect} from 'react-redux'

const useStyles = makeStyles({
    root: {
      miWidth: 275,
      margin: '18px 0px 20px 500px'
    },
    text:{
        margin: '0 0 10px 100px',
        width: '300px'
    },
    but:{
        margin: '24px 0 14px 14px'
    }
  });

function Homepage({ userData, fetchUsers}) {
    const classes = useStyles();
    const [id,setId] = useState();
    const [idFromButtonClick,setIdFromButtonClick] = useState(1);
    const [iniApi,setIniApi] = useState(`https://60596cd9b11aba001745c1ce.mockapi.io/api/v1/users`)
    
    const handleClick = () => {
        setIdFromButtonClick(id)
       setIniApi(`https://60596cd9b11aba001745c1ce.mockapi.io/api/v1/users`+`/${id}`)        
    }
    
    useEffect(()=>{
        fetchUsers(iniApi)
        
    }, [idFromButtonClick])
    
    return (
        <div>
            <TextField
                className = {classes.root}
                label="Enter the employee ID" 
                type="text" 
                value={id}
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                variant="outlined"
                onChange={ e => setId(e.target.value)}
                />
            <Button 
                className = {classes.but}
                type="button"
                variant="contained"
                color="primary" 
                onClick={handleClick}> Fetch Details
            </Button>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField 
                        className = {classes.text}
                        value={userData.users.country || ''} 
                        id="outlined-basic" 
                        label="Country" 
                        variant="outlined" 
                        name="country"
                        fullwidth="true"
                        style = {{width: 400}}
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        className = {classes.text}
                        value={userData.users.city || ''} 
                        id="outlined-basic" 
                        label="City" 
                        variant="outlined" 
                        name="city"
                        fullwidth="true"
                        style = {{width: 400}}
                        />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                    <TextField 
                        className = {classes.text}
                        value={userData.users.name || ''} 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        name="name"
                        style = {{width: 400}}
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        className = {classes.text}
                        value={userData.users.description || ''} 
                        id="outlined-basic" 
                        label="Description" 
                        variant="outlined" 
                        name="description"
                        style = {{width: 400}}
                        />
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: iniApi => dispatch(fetchUsers(iniApi))
    }
}

// export default Homepage
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Homepage)