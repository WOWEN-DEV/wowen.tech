const fs = require('fs');
const { JSDOM } = require('jsdom');
const RSS = require('rss');

// Assume you have a file named articles.html with your article snippets
const articlesHtml = fs.readFileSync('./insights/index.html', 'utf-8');
const dom = new JSDOM(articlesHtml);

// Create new  RSS feed
const feed = new RSS({
    title: "WOWEN&#174; FemTech – Insights",
    description: "Expertise in full-stack development, femtech, UX, design, and marketing.",
    feed_url: "https://www.wowen.tech/insights/rss.xml",
    site_url: "https://www.wowen.tech/insights",
    language: 'en',
});

// Loop through each article and add to the feed
dom.window.document.querySelectorAll('.rm-blog-post').forEach(article => {
    const title = article.querySelector('.rm-blog-post__title a').textContent;
    const description = article.querySelector('.rm-blog-post__description').textContent;
    const url = article.querySelector('.rm-blog-post__title a').href;
    const date = article.querySelector('.rm-blog-post__date').getAttribute('datetime');

    feed.item({
        title: title,
        description: description,
        url: url,
        date: date,
    });
});

// Write the RSS feed to a file
fs.writeFileSync('insights/rss.xml', feed.xml());
