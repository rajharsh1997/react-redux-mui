import React,{useState} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'
import Homepage from '../src/component/Homepage';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider, CssBaseline, createMuiTheme, Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    }
  })
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            EmployeeInfo
          </Typography>
          <Switch onChange={handleDarkMode} value={darkMode}/>
          <Typography variant="h6" >
            Darkmode
          </Typography>
        </Toolbar>
      </AppBar>
      <Homepage />
    </div>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
