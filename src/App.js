import { Private } from './Screens/Private';
import { Public } from './Screens/Public';

const App = () => {
    const isAuthenticated = true;
    return isAuthenticated ? <Private /> : <Public />;
};

export default App;