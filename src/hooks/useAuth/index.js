import { firebaseAuth } from '../../utils'

const useAuth = () => {

    const login = async ({ email, password }) => {
        return await firebaseAuth
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response)
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
        logout
    }
}
export { useAuth }