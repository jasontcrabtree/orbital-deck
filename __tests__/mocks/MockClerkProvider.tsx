import { createContext, useContext } from 'react';

const MockClerkContext = createContext({});

export const useMockClerk = () => useContext(MockClerkContext);

export const MockClerkProvider = ({ children, value = {} }: { children: React.ReactNode, value?: any }) => {
    return (
        <MockClerkContext.Provider value={value}>
            {children}
        </MockClerkContext.Provider>
    );
};