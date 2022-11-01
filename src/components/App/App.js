import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AccauntList from '../pages/AccountList/AccountList';
import AddingNewUser from '../pages/AddingNewUser/AddingNewUser';
import UserProfile from '../pages/UserProfile/UserProfile';
import UserEdit from "../pages/UserEdit/UserEdit";


import '../../style/style.scss';
import '../../style/buttons.scss';


function App() {
	return (
		<BrowserRouter>
				<Routes>
					<Route path="/" element={<AccauntList />}/>
					<Route path="/useradd" element={<AddingNewUser />}/>
					<Route path="/userdata/:userId" element={<UserProfile />}/>
					<Route path="/useredit/:formName" element={<UserEdit />}/>
				</Routes>
		</BrowserRouter>

	);
}

export default App;