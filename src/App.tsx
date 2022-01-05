import { Box, ChakraProvider, extendTheme, Text } from "@chakra-ui/react";
import Home from "./components/Homepage/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import History from "./components/History/History";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import ScrollToTop from "./components/utils/ScrollToTop";
import TopArtists from "./components/TopArtists/TopArtists";
import NotFoundPage from "./components/404/404";

const theme = extendTheme({
	colors: {
		main: "#5E15CB",
		wall: "#C4C4C4",
		text: "#000000",
		mainLight: "#F4EDFF",
		bgText: "white",
	},
});
function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box className="font main">
				<Router>
					<Navbar />
					<ScrollToTop />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/history" component={History} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/top-artists" component={TopArtists} />
						<Route path="*" exact={true} component={NotFoundPage} />
					</Switch>
				</Router>
			</Box>
		</ChakraProvider>
	);
}

export default App;
