const mongoose = require('mongoose');
const ytSearch = require('yt-search');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://manalidighe6_db_user:K9RJTdgqSiTFjQXC@primecode.6inriw9.mongodb.net/primecode';

const problemSchema = new mongoose.Schema({
  title: String,
  videoUrl: String
}, { strict: false });

const Problem = mongoose.model('Problem', problemSchema);

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function populateVideos() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to DB');

    const problems = await Problem.find({});
    console.log(`Found ${problems.length} problems. Starting search...`);

    let updatedCount = 0;

    for (let i = 0; i < problems.length; i++) {
      const problem = problems[i];
      
      // Skip if already has videoUrl to save time, or we can just fetch all?
      // Since they asked to "use the vides which has the maximum views on it", we should probably update them all, but let's only do the ones missing it or do all. Let's do all to be safe.
      
      try {
        const query = problem.title + " leetcode solution";
        const r = await ytSearch(query);
        const videos = r.videos;
        
        if (videos && videos.length > 0) {
          // Find the one with maximum views
          let maxViews = -1;
          let bestVideo = null;
          
          for (const video of videos.slice(0, 10)) { // look at top 10 results
            if (video.views > maxViews) {
              maxViews = video.views;
              bestVideo = video;
            }
          }
          
          if (bestVideo) {
            problem.videoUrl = bestVideo.url;
            await problem.save();
            updatedCount++;
            console.log(`[${i+1}/${problems.length}] Updated ${problem.title}: ${bestVideo.url} (${bestVideo.views} views)`);
          } else {
            console.log(`[${i+1}/${problems.length}] No valid video found for ${problem.title}`);
          }
        } else {
          console.log(`[${i+1}/${problems.length}] No results for ${problem.title}`);
        }
        
      } catch (err) {
        console.error(`Error searching for ${problem.title}:`, err.message);
      }
      
      // Delay to avoid getting rate limited
      await delay(1000);
    }
    
    console.log(`Finished! Updated ${updatedCount} problems.`);
  } catch (error) {
    console.error('Fatal Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from DB');
  }
}

populateVideos();
