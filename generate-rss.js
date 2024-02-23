const fs = require('fs');
const { JSDOM } = require('jsdom');
const RSS = require('rss');

console.log("Starting the RSS generation script...");

// Assuming you have a file named /insights/index.html with your article snippets
const articlesHtmlPath = './insights/index.html';
console.log(`Loading articles from: ${articlesHtmlPath}`);
try {
    const articlesHtml = fs.readFileSync(articlesHtmlPath, 'utf-8');
    console.log("File successfully read.");
    const dom = new JSDOM(articlesHtml);

    // Creating a new RSS feed
    console.log("Creating a new RSS feed...");
    const feed = new RSS({
        title: "WOWEN® FemTech – Insights",
        description: "Expertise in full-stack development, femtech, UX, design, and marketing.",
        feed_url: "https://www.wowen.tech/insights/rss.xml",
        site_url: "https://www.wowen.tech/insights",
        language: 'en',
        image_url: "https://www.wowen.tech/assets/img/apple-touch-icon.png",
        image_title: "WOWEN",
        image_link: "https://www.wowen.tech/"
    });

    // Loop through each article and add to the feed
    dom.window.document.querySelectorAll('.rm-blog-post').forEach(article => {
        const title = article.querySelector('.rm-blog-post__title a').textContent;
        const description = article.querySelector('.rm-blog-post__description').textContent;
        const url = article.querySelector('.rm-blog-post__title a').href;
        const date = article.querySelector('.rm-blog-post__date').getAttribute('datetime');
        
        console.log(`Adding article: ${title}`);
        feed.item({
            title: title,
            description: description,
            url: url,
            date: date,
        });
    });

    // Write the RSS feed to a file
    const outputPath = 'insights/rss.xml';
    fs.writeFileSync(outputPath, feed.xml());
    console.log(`RSS file written to: ${outputPath}`);
} catch (error) {
    console.error(`An error occurred during RSS generation: ${error}`);
}
