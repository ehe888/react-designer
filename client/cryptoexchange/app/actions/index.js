// index.js - Actions

export const TICKER_UPDATED = 'TICKER_UPDATED'

export const tickerUpdate = (payload) => {
    return {
        type: TICKER_UPDATED, payload
    }
}