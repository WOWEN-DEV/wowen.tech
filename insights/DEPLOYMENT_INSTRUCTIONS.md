# Deployment Instructions for Insights Page

This document outlines the necessary steps to ensure that the `rss.xml` file is correctly updated both locally and on the live site at [wowen.tech/insights/rss.xml](wowen.tech/insights/rss.xml), as well as some content checks to do before build and deployment.

## Overview

The RSS feed for the Insights page always updates automatically and will be the latest version on the live site upon build and deployment. However, it's crucial to note that the local `rss.xml` file will not be overwritten or regenerated with new content changes (e.g., addition or removal of articles) unless a specific script is run locally before the build and deployment process. This is not mandatory, but it keeps the RSS file updated locally, in GitHub repo and on production/staging site.

## Pre-Deployment Steps

Before deploying new changes to the Insights page, especially when adding new articles or modifying existing ones, follow these steps:

1. **Update Content:** Ensure new articles are updated with the correct metadata, timestamps, excerpts, etc. This step is vital for maintaining the integrity and accuracy of the Insights page and its RSS feed.

2. **Generate RSS File Locally::** To update the `rss.xml` file locally (and consequently on the GitHub repo and the live site), you must run the following command in your project's root directory:

   ```shell
   node generate-rss.js

Running this script regenerates the `rss.xml` file based on the current articles in our `./insights/index.html`. This step ensures that the RSS feed reflects the latest content locally and in the GitHub repo.

## Important Notes

- Always ensure that the content changes, especially new articles, are thoroughly reviewed for metadata accuracy and timestamp updates, as well as updating other articles under "More Insights".
- The `node generate-rss.js` step is crucial if you want the `rss.xml` file to be updated locally and in GitHub repo according to the latest changes. Do not skip this step before any deployment involving content changes on the Insights page.

## Commit Changes

After running the script and verifying that the `rss.xml` file has been updated correctly, as well as everything else looking great, commit the changes to our repository, example:

   ```shell
   git add .
   git commit -m "Update new article"
   git push origin main/staging
