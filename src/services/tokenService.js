export const setTokens = tokensData => {
    localStorage.setItem('accessToken', tokensData.access);
    localStorage.setItem('refreshToken', tokensData.refresh);
}

export const getAccessToken = () => {
    // Change way checking if access token is present
    return localStorage.getItem('accessToken');
}

export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
}

export const getTokens = () => {
    return {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken')
    }
}

export const removeTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}