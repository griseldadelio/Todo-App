import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddTask, Task, Users, AddUsersForm, Login } from "./Screens";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/addTask" component={AddTask} />
                <Route path="/users" component={Users} />
                <Route path="/addUsers" component={AddUsersForm} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Task} />
            </Switch>
        </Router>
    );
};

export default App;