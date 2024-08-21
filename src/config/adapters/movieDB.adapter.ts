import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c8e1de9878aac5bf607c7e29ec379eed',
        language: 'es'
    }
})