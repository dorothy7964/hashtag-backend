const path = require('path');
const fs = require('fs');

// hashtag_trend.json
const hashtag_trend_Buffer = fs.readFileSync(path.join(__dirname,"pretty/hashtag_trend.json")); 
const hashtag_trend_String = hashtag_trend_Buffer.toString()
const hashtag_trend_Json  = JSON.parse(hashtag_trend_String);
export const hashtag_trend = hashtag_trend_Json;


// hashtag_info.json
export const hashtagInfo = (hashtag) => {
    const hashtag_info_Buffer = fs.readFileSync(path.join(__dirname,`pretty/hashtag_info/${hashtag}.json`)); 
    const hashtag_info_String = hashtag_info_Buffer.toString()
    const hashtag_info_Json  = JSON.parse(hashtag_info_String);
    const hashtag_info = hashtag_info_Json;
    return hashtag_info;
}

