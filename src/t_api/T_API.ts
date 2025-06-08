import axios from "axios";

export type Candle = {
    open: { units: string, nano: number },
    high: { units: string, nano: number },
    low: { units: string, nano: number },
    close: { units: string, nano: number },
    volume: string,
    time: string,
    isComplete: boolean
}

class T_API {
    static INSTRUMENTS_URL = "https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService/"
    static MARKETDATA_URL = "https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.MarketDataService/"
    T_TOKEN: string;
    APP_NAME: string;
    constructor(T_TOKEN: string, APP_NAME: string) {
        this.T_TOKEN = T_TOKEN;
        this.APP_NAME = APP_NAME;
    }

    public async findInstrument(query: string) {
        const response = await fetch(`${T_API.INSTRUMENTS_URL}FindInstrument`, {
            method: 'POST',
            body: JSON.stringify({
                query: query
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.T_TOKEN}`,
            }
        });
        const data = await response.json();
        return data.instruments;
    }

    public async getShare(ticker: string) {
        const instruments = await this.findInstrument(ticker);
        for (let instrument of instruments) {
            if (instrument.instrumentType === 'share' && instrument.apiTradeAvailableFlag){
                return instrument
            } 
        }
        return null;
    }

    public async getCandles(instrumentId: string, interval: string, from: string, to: string) {
        const response = await fetch(`${T_API.MARKETDATA_URL}GetCandles`, {
            method: 'POST',
            body: JSON.stringify({
                instrumentId: instrumentId,
                interval: interval,
                from: from,
                to: to,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.T_TOKEN}`,
            }
        });
        const data = await response.json();
        return data.candles;
    }
}


export default new T_API(import.meta.env.VITE_T_TOKEN, import.meta.env.VITE_APP_NAME);