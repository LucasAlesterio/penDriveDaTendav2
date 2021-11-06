import NextAuth, { NextAuthOptions } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils';
import Providers from 'next-auth/providers';
import api from '../../../services/api';

interface logIn {
    user: string;
    password: string;
}

interface User {
    name: string;
    image: string;
    token: string;
}
interface Token {
    accessToken: string;
}

const providers = [
    Providers.Credentials({
        name: 'Credentials',
        credentials: {
            user: { label: 'User', type: 'text', placeholder: 'User' },
            password: {
                label: 'Password',
                type: 'password',
                placeholder: 'Senha'
            }
        },
        async authorize(credentials: logIn) {
            try {
                const { data } = await api.post('login', credentials);
                console.log(data);
                if (!data?.error) {
                    return data;
                } else {
                    return null;
                }
            } catch (error) {
                throw new Error('Error in authorization!');
            }
        }
    })
];

const callbacks = {
    // Getting the JWT token from API response
    async jwt(token: any, user: any) {
        if (user) {
            token.accessToken = user.token;
        }

        return token;
    },
    async session(session: any, token: any) {
        // console.log(session);
        session.accessToken = token.accessToken;
        return session;
    }
};

const options: NextAuthOptions = {
    providers,
    callbacks,
    jwt: { signingKey: process.env.JWT_SIGNING_PRIVATE_KEY }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
