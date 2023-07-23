import React from "react";

import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

import Pool from "../UserPool";

import AccountContext from "./AccountContext";

function AccountProvider(props) {
    async function authenticate(Username, Password) {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username,
                Pool,
            });

            const authDetails = new AuthenticationDetails({
                Username,
                Password,
            });

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    resolve(data);
                },
                onFailure: (err) => {
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    resolve(data);
                },
            });
        });
    }

    async function getSession() {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();

            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });
            } else {
                reject();
            }
        });
    }

    function logout() {
        const user = Pool.getCurrentUser();

        if (user) {
            user.signOut();
        }

        window.location.reload(false);
    }

    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout }}>
            {props.children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;
