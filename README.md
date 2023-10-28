![WOWEN Tech Logo](https://github.com/WOWEN-DEV/wowen.tech/blob/main/assets/img/wowen-tech-repo-logo.svg)

<p align="center">
  <a href="https://app.netlify.com/sites/wowen/deploys">
    <img src="https://api.netlify.com/api/v1/badges/b86ae6b4-7487-4cc1-b96a-0925766438c0/deploy-status" alt="Netlify Status">
  </a>
  <a href="https://github.com/WOWEN-DEV">
    <img src="https://img.shields.io/badge/WOWEN-FemTech%20Dev%20Community-blueviolet" alt="WOWEN">
  </a>
</p>

<h1 align="center">WOWEN - Transforming FemTech</h1>

Welcome to the WOWEN website repository! We're thrilled to have you here as we embark on a journey to revolutionize FemTech. 🚀

<br>
<br>
<div align="center">
  <img src="https://www.wowen.tech/assets/img/hands.svg" alt="WOWEN Illustration">
</div>


# Table of Contents
- [About](#about)
- [Deployment and Staging](#deployment-and-staging)
  - [Never deploy and commit directly to main branch](#never-deploy-and-commit-directly-to-main-branch)
  - [Branches and deploy contexts](#branches-and-deploy-contexts)
  - [Current settings and deploy contexts in Netlify](#current-settings-and-deploy-contexts-in-netlify)
- [Changelog](#changelog)
- [Roadmap](#roadmap)
- [Developer Documentation: Technical Architecture and Stack Overview](#developer-documentation-technical-architecture-and-stack-overview)
  - [Frontend](#frontend)
  - [Domain Management](#domain-management)
  - [Hosting and Deployment](#hosting-and-deployment)
  - [Form Collection](#form-collection)
  - [Analytics](#analytics)
  - [Future Considerations](#future-considerations)
  - [Summary of Technologies](#summary-of-technologies)
- [Contributing](#contributing)
- [Feedback and Support](#feedback-and-support)
- [Connect with Us](#connect-with-us)

<br>

# About
WOWEN is not just a company; we are a creative powerhouse with expertise in full-stack development, FemTech, UX, design, and marketing. We have a unique ability to transform high-level strategy into practical implementation at the intersection of business development, communication, and technology.

<br>

# Deployment and Staging

Our website is hosted and deployed with Netlify. Production site [www.wowen.tech](https://www.wowen.tech/) is `main` branch, staging site [staging--wowen.netlify.app](https://staging--wowen.netlify.app) is `staging` branch.

## Never deploy and commit directly to main branch
In most cases, changes should never be directly deployed to our `main` branch, which serves as the production environment/main branch/site. Instead, commit and deploy your changes to our staging branch first, and if approved it will be merged and synced into our `main` branch. For the website ([www.wowen.tech](https://www.wowen.tech/)), the staging branch is named `staging` and can be accessed at [https://staging---wowen.netlify.app](https://staging--wowen.netlify.app).

## Branches and deploy contexts

For those who are new with the terms:
- **Branch:** A branch is like a version of our code, our `main` branch is our Web App/production site [https://www.wowen.tech](https://www.wowen.tech) and our `staging` branch is our staging site [https://staging--wowen.netlify.app](https://staging--wowen.netlify.app) where we stage/test updates before they end up on our production site, the `main` branch. This is a way to work on updates or new features without affecting the publicly known and used live website. Once you're satisfied with the updates on `staging`, you can combine ("merge") the `staging` branch into the `main` branch, the main version of the code, our production site. 
- **Staging:** Is a separate test version of our site. Our branch `staging` is our staging enviroment. Current branch update/status/deployment is always accessed live at [https://staging--wowen.netlify.app](https://staging--wowen.netlify.app).
- **Pull Request:** Is a proposal to update some part of our website's code, if the proposal is good, it will be "merged" into `main` branch, our production site [https://www.wowen.tech](https://www.wowen.tech).
- **Merging:** Merging is the process of taking the changes from one branch (version) of our code and combining them with another branch, usually the `main` one. This allows us to update the official version of our project with new features, fixes, or improvements that we've been working on separately on staging. Once merged, those changes become part of the `main` or target branch and are reflected on [https://www.wowen.tech](https://www.wowen.tech).
- **Deploy Contexts:** Are settings that tell Netlify how to handle our different branches when turning them into live websites.
- **Deploy Previews:** Are temporary websites that Netlify creates to show you what these changes will look like if they go live. When someone suggests changes to our code, they often make a "pull request." With this setting, Netlify will automatically create a temporary, live version of our site incorporating those suggested changes. This is called a "Deploy Preview." This allows you to preview changes before they go live on our main site (`main` branch).
- **Branch Deploys:** The `main` branch serves as our production branch, while branch deploys encompass all other branches created here that we designate to be included as "Branch Deploys."

## Current settings and deploy contexts in Netlify
- **Production Branch:** `main`
- **Branch Deploys:** `staging` *Note: Netlify is with this setting ignoring any other branches we create in this repo; it won't make websites from them*.
- **Deploy Previews:** `Any pull request against your production branch / branch deploy branches`

<br>

# Changelog
This changelog provide a high-level overview of the changes made in each version of the website:
- [Changelog](https://github.com/WOWEN-DEV/wowen.tech/blob/main/CHANGELOG.md)

<br>

# Roadmap

At present, we do not have a roadmap for wowen.tech website.

<br>

# Developer Documentation: Technical Architecture and Stack Overview
Our technical infrastructure is designed to be robust and scalable, leveraging a variety of technologies and services. Below is a detailed breakdown of our current setup:

## Frontend

- **Technologies**: HTML, CSS, JavaScript
- **Description**: The frontend is a simple setup consisting of HTML, CSS, and JavaScript files.

## Domain Management

- **Registrar**: One.com
- **Description**: We've registered our domain (`wowen.tech`) and all associated subdomains with One.com. As of now, we intend to continue using One.com as our domain registrar due to its other convenient features.

## Hosting and Deployment

- **Platform**: Netlify
- **Description**: We use Netlify for hosting and deployment. We've set up the DNS settings on One.com to point to Netlify, which serves as the platform for both our frontend hosting and deployment.

## Form Collection

- **Netlify Forms**: Used to collect contact forms on `/contact` and `/sv/kontakt`.
- **Tally**: Used to collect applicant forms on `/careers` and `/sv/jobb/`.

## Analytics

- **Google Analytics**: Used for web traffic analysis – (`WOWEN – wowen.tech – GA4`).
- **Plausible**: An additional tool for web traffic analysis – (`WOWEN – wowen.tech`).
- **Google Tag Manager**: Used for managing pixels and tags on the website, current implemented tags: *Google Analytics*, *Facebook Pixel*, *LinkedIn Insight Tag* – (`WOWEN – www.wowen.tech`)

## Future Considerations

As of now, we plan to continue using Netlify for hosting and deployment and One.com for domain management. However, we are evaluating other options for hosting and domain management, potentially transitioning to AWS Services or Vercel.

## Summary of Technologies
- One.com (Domain management + database possibilities + archive for old email domain wowen.se)
- Netlify (Hosting, frontend deployment, form collection, authentication)
- Tally (Form builder)

<br>

# Contributing

We welcome contributions from the FemTech Dev Community. If you'd like to contribute to our projects, please follow our [Contributing Guidelines](CONTRIBUTING.md).

<br>

# Feedback and Support

Have feedback or need support? Feel free to reach out!

<br>

# Connect with Us

- **Website:** [wowen.tech](https://wowen.tech)
- **First Contact Email:** emma@wowen.tech

<br>

---

Thank you for your interest in WOWEN. Together, we're making FemTech innovative, creative, and powering. 💪 

Copyright © 2019-2023, WOWEN. All rights reserved.
