import { firebaseAuth } from '../../utils'

const useAuth = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = async ({ email, password }) => {
        return await firebaseAuth
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setIsAuthenticated(true)
            });
    }

    const register = async ({ email, password, fullName }) => {
        return await firebaseAuth
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({ displayName: fullName })
                console.log(user)
            });
    }

    const logout = () => {

    }

    return {
        login,
        register,
        logout,
        isAuthenticated
    }
}
export { useAuth }