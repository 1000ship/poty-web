import axios from 'axios'

// const api = axios.create({
//     baseURL: "https://api.themoviedb.org/3/",
//     params: {
//         api_key: "bcfdb11506e553fcd87c0367d1690665",
//         language: "en-US",
//     },
// });

export const highlightApi = {
    getHighlights: ( videoId ) => {return [{
        "videoId": videoId,
        "lastUpdate": "2020-04-25",
        "rank": 1234,
        "totalLikeCount": 511,
        "totalReplyComment": 20,
        "timestamp": "00:25:22",
        "comments":[
            {
                "userId":"----",
                "likeCount":123,
                "comment": "명장명 키"
            },
            {
                "userId":"----",
                "likeCount":123,
                "comment": "잠깐 보던거 킵 ㅠㅠ"
            }],
        }
    ]}
}