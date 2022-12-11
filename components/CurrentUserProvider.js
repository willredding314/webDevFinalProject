import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { useQuery } from 'react-query';
const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const { isLoading, error, data } = useQuery('currentUser', () => {
        return fetch('http://localhost:4000/api/auth/profile', { credentials: 'include' })
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return null;
            }
        })
    });

    useEffect(() => {
        setCurrentUser(data);
    }, [data])

    return (
        <CurrentUserContext.Provider value={{ currentUser, isLoading, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export { CurrentUserContext, CurrentUserProvider };