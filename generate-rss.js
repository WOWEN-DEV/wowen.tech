const fs = require('fs');
const { JSDOM } = require('jsdom');
const RSS = require('rss');

console.log("Startar RSS-genereringsskriptet...");

// Antag att du har en fil som heter /insights/index.html med dina artikelsnuttar
const articlesHtmlPath = './insights/index.html';
console.log(`Läser in artiklar från: ${articlesHtmlPath}`);
try {
    const articlesHtml = fs.readFileSync(articlesHtmlPath, 'utf-8');
    console.log("Filen inläst framgångsrikt.");
    const dom = new JSDOM(articlesHtml);

    // Skapa en ny RSS-feed
    console.log("Skapar ny RSS-feed...");
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

    // Loopa igenom varje artikel och lägg till i feeden
    dom.window.document.querySelectorAll('.rm-blog-post').forEach(article => {
        const title = article.querySelector('.rm-blog-post__title a').textContent;
        const description = article.querySelector('.rm-blog-post__description').textContent;
        const url = article.querySelector('.rm-blog-post__title a').href;
        const date = article.querySelector('.rm-blog-post__date').getAttribute('datetime');
        
        console.log(`Lägger till artikel: ${title}`);
        feed.item({
            title: title,
            description: description,
            url: url,
            date: date,
        });
    });

    // Skriv RSS-feeden till en fil
    const outputPath = 'insights/rss.xml';
    fs.writeFileSync(outputPath, feed.xml());
    console.log(`RSS-filen skriven till: ${outputPath}`);
} catch (error) {
    console.error(`Ett fel uppstod under genereringen av RSS: ${error}`);
}
