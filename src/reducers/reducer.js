import {
    GET_LATEST_VIDEOS,
    GET_MUSIC_VIDEOS,
} from "../actions";

const INITIAL_STATE = {
    latestVideos: [],
    musicVideos: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_LATEST_VIDEOS:
            return {
                ...state,
                latestVideos: action.payload
            };
        case GET_MUSIC_VIDEOS:
            return {
                ...state,
                musicVideos: action.payload
            };

        default:
            return state;
    }
}