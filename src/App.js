import { Private } from './screens/Private';
import { Public } from './screens/Public';
import { useAuth } from './hooks';

const App = () => {
    const { isAuthenticated } = useAuth()
    return isAuthenticated ? <Private /> : <Public />;
};

export default App;