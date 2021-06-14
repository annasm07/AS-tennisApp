const _Environments = {
    LOG_IN_URL: '<API URL>',
    SIGN_UP_URL: '<API URL>',
    GET_PLAYER_URL: '<API URL>',
    GET_ALL_PLAYERS: '<API URL>',
    CREATE_MATCH_URL: '<API URL>',
    UPDATE_MATCH_URL: '<API URL>',
    GET_MATCH_STATS: '<API URL>',
}

function getEnvironment() {
    return _Environments
}

export const env = getEnvironment()