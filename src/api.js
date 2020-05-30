import axios from 'axios'

const videoAxios = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
});

export const videoApi = {
    getVideos: ({maxResults, regionCode}) => videoAxios.get("videos", {
        params: {
            part: "id,snippet",
            chart: "mostPopular",
            maxResults,
            regionCode
        }
    }),
}

export const highlightApi = {
    getHighlights: ( videoId ) =>
    {
        return {
            "videoId": videoId,
            "lastUpdate": "2020-04-25",
            "highlights": [
                {
                    "rank": 1,
                    "totalLikeCount": 511,
                    "totalReplyComment": 20,
                    "timestamp": "00:25:22",
                    "comments":[
                        {
                            "userId":"SomeUserName",
                            "likeCount":123,
                            "commentText": "명장명 키"
                        },
                        {
                            "userId":"PingPong",
                            "likeCount":123,
                            "commentText": "잠깐 보던거 킵 ㅠㅠ"
                        }
                    ],
                },
                {
                    "rank": 2,
                    "totalLikeCount": 102,
                    "totalReplyComment": 12,
                    "timestamp": "00:12:42",
                    "comments":[
                        {
                            "userId":"CSH",
                            "likeCount":52,
                            "commentText": "\uc9c4\uc9dc \ub108\ubb34 \uadc0\uc5fd\ub2e4 ..."
                        },
                        {
                            "userId":"WOW",
                            "likeCount":50,
                            "commentText": "\ub538\ud55c\ud14c \uc2a4\uc717\ud55c\uac83\ubd25..\ud83e\udd70"
                        }
                    ]
                }
            ]
        }
    }
}