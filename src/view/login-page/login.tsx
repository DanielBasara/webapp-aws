import React from 'react'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
import { useNavigate } from 'react-router-dom'
Amplify.configure(awsExports);



export function Login() {
    const navigate = useNavigate();
    return (
        <Authenticator initialState="signUp">
            {({
                signOut, user }) => (
                < main >
                    <h1>Hello {user?.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                    <button onClick={() => { navigate("/main") }}>click to open main page</button>
                </main>
            )
            }
        </Authenticator >
    )
}

