export const GOOGLE_API_KEY = "AIzaSyAI56hl6B8P0Ochz07nGTqAgA58wzY0gVQ";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=";

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_SINGLE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=`

export const YOUTUBE_SEARCH_VIDEO_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='

export const YOUTUBE_MOST_POPULAR_VIDEOS_API= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`

export const YOUTUBE_SEARCH_VIDEOS_API= 'https://youtube.googleapis.com/youtube/v3/search?part=snippet';

export const YOUTUBE_COMMENTS_API = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId='

export const OFFSET_LIVE_CHAT = 25;

// https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&key={YOUR_API_KEY}