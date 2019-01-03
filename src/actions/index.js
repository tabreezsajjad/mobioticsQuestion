import axios from 'axios';

export const GET_LATEST_VIDEOS = "GET_LATEST_VIDEOS";
export const GET_MUSIC_VIDEOS = "GET_MUSIC_VIDEOS";


export const BASE_API_URL = "http://localhost:5000";


export const latestVideos = () => {
    return axios.get(BASE_API_URL + '/latestVideos').then(res => {
    console.log(res.data);
        return {
            type: GET_LATEST_VIDEOS,
            payload: res.data.videos
        };
    });
};


export const musicVideos = () => {
    return axios.get(BASE_API_URL + '/musicVideos').then(res => {
        console.log(res.data);
        return {
            type: GET_MUSIC_VIDEOS,
            payload: res.data.videos
        };
    });
};
