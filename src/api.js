import axios from 'axios'
import testCase from 'testCase.json'

const videoAxios = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
});

const highlightAxios = axios.create({
    baseURL: "http://192.168.150.19:3000/"
})

export const videoApi = {
    getVideos: ({maxResults, regionCode}) => videoAxios.get("videos", {
        params: {
            part: "id,snippet",
            chart: "mostPopular",
            maxResults,
            regionCode
        }
    }),
    //https://www.googleapis.com/youtube/v3/search?key=AIzaSyCW_MCH2iNnoVle1hfDrOe_iA2jk-7m_qM&part=id,snippet&q=미역국
    searchVideos: ({q, maxResults, pageToken, regionCode}) => videoAxios.get("search", {
        params: {
            part: "id,snippet",
            q, maxResults, pageToken, regionCode
        }
    })
}

export const highlightApi = {
    getHighlights_Test: (videoId) => highlightAxios.get(),
    getHighlights: ( videoId ) => {return {data:testCase}},
}