import { Box, ChakraProvider, extendTheme, Text } from '@chakra-ui/react';
import Home from './components/Homepage/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import History from './components/History/History';
import Profile from './components/Profile/Profile';
import Signup from './components/Signup/Signup';
const theme = extendTheme({
  colors: {
    main: '#5E15CB',
    wall: '#C4C4C4',
    text: '#000000',
    mainLight: '#F4EDFF',
    bgText: 'white',
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className='font main'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/history' component={History} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
