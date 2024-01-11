---
title: "VietLand - Real Estate App"
introduction: "Modern web application designed and developed for a local real estate company. Built using performant static Astro components and strategically-placed React-ive islands, it ensures low costs through seamless integration with Contentful CMS and reliable hosting on Netlify."
mainTag: latest work
tags:
  - Website Development
  - React
  - Astro
  - Typescript
  - Tailwind
---

## Goals and Requirements

The main objective of this project was to **help the local business establish a strong connection with potential customers** and create an outstanding first impression, ultimately giving the business a distinct advantage amidst the fiercely demanding marketplace.

Initial constraints that we needed to address:

- User-friendly design with an understanding of local language and cultural distinctiveness
- Competitive performance on mobile devices
- Smooth delivery and uncomplicated content management processes
- **Restricted budget** 😹

## Development Approach

In this particular scenario, the approach taken was to **generate static pages** rather than rely on client-side or server-side rendering. The client-side rendering was ruled off due to the significance placed on mobile performance and search engine optimization (SEO). Meanwhile, the idea of spending on the development/hosting/management of the backend side ruled off the server-side rendering approach as well. Instead of overinvesting in the backend infrastructure, we choose the services of the headless CMS (with generous free tiers).

And, although static pages sound … _**lifeless**_, the app pages have been designed in a manner that does not give off a static impression entirely! The **secret is the usage of component-based islands of JS interactivity** whenever necessary.

## List of Technologies

This project was developed by selecting a carefully curated set of modern technologies and tools. The pivotal ones are listed below. For a comprehensive view of all dependencies, including exact versions, feel free to explore the details in the [package.json](https://github.com/AnnaBurd/web-real-estate/blob/main/package.json) file.

| Name                                                                                                                                                   | Usage                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| [![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat-square)](https://astro.build/)                           | Leveraged for generating static pages, emphasizing fast load times and optimal performance.                       |
| [![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)](https://reactjs.org/)                           | Integrated strategically for dynamic content and interactive components, providing a lively user experience.      |
| [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/) | Ensured codebase reliability and scalability, contributing to the overall maintainability of the application.     |
| [![Contentful Badge](https://img.shields.io/badge/Contentful-2478CC?logo=contentful&logoColor=fff&style=flat-square)](https://www.contentful.com/)     | Served as the headless CMS, facilitating easy content updates and management.                                     |
| [![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat-square)](https://www.figma.com/)                         | Utilized for collaborative design processes, ensuring a cohesive and visually appealing user interface.           |
| [![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square)](https://tailwindcss.com/) | Applied for a streamlined and responsive design, enhancing the overall aesthetic and usability.                   |
| [![Leaflet Badge](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff&style=flat-square)](https://leafletjs.com/)                   | Integrated for interactive maps, enhancing the user experience and providing valuable location-based information. |

## Challenges and Solutions

The journey of bringing this project to life had a series of challenges. Embracing a [divide and conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) strategy, I systematically tackled each issue, meeting project requirements while adhering to budget and time constraints. In my perspective, more challenges bring more opportunities for innovation and improvement—each hurdle became a stepping stone towards overall growth and excellence.

> Challenge 1: User-Friendly Design

[batdongan]: https://batdongsan.com.vn/ban-dat-dat-nen
[nhatot]: https://www.nhatot.com/mua-ban-dat
[alonhadat]: https://alonhadat.com.vn/

As a first step, I conducted an **in-depth analysis of leading local market solutions**, including [batdongan], [nhatot], and [alonhadat] in order to identify common features that local users are accustomed to. All these platforms present comprehensive listings featuring items for sale, complete with images and essential details such as price, area size, and address. Additionally, they offer advanced filters for a customized search:

![batdongan - listing page ](/images/work/real-estate-app/examples/ex1-listing.png "batdongan - listing page")
![nhatot - listing page ](/images/work/real-estate-app/examples/ex2-listing.png "nhatot - listing page")
![alonhadat - listing page ](/images/work/real-estate-app/examples/ex3-listing.png "alonhadat - listing page")

While the structure of the listing pages is quite similar across platforms, the main pages exhibit variations, each containing essential information about the trading place, a selection of featured offerings, and various navigation links.

During the [wireframing stage](https://www.figma.com/file/K40aNBOOoKdEaAuXSuK0UF/Panorama?type=design&node-id=270-6&mode=design), the focus was on **preserving these common elements to ensure an intuitive information layout and navigation for users**. These initial wireframes served as a canvas for integrating modern design elements and features, drawing inspiration from platforms like Dribbble. Notable enhancements include a custom map and customer-requested features, such as a slider showcasing promoted items.

The design became a keystone challenge of the project, it took the most time, with a set of options emerging over time:

- [first version](https://ssg-web-app.netlify.app/)
- [second version _(responsive)_](https://ssg-web-responsive.netlify.app/)
- [current version _(reworked design)_](https://deft-entremet-3bc804.netlify.app/)

**Figma**, a design tool, expedited the transformation of ideas into **live preview versions**. Its rapid prototyping capability played a crucial role in enhancing **the feedback loop with the client**, ensuring that the client remained well-informed about the progress of development and fostering a collaborative and informed decision-making process.

> Challenge 2: Competitive Performance on Mobile Devices

With [over 86% of internet traffic](https://www.statista.com/statistics/804083/share-of-internet-traffic-by-device-vietnam/#:~:text=Distribution%20of%20internet%20traffic%20in%20Vietnam%20November%202022%2C%20by%20device&text=As%20of%20November%202022%2C%2086.58,and%20desktop%20computers%20that%20year.) in the local market generated through mobile phones, optimizing for mobile devices became a pivotal requirement for the project.

To address this challenge, I employed a two-pronged approach. Firstly, I utilized **statically generated pages with Astro**, ensuring **minimal delays for code generation** on both the server and browser sides. In tandem, a **mobile-first design strategy** was implemented using **Tailwind**. Each component was initially developed for mobile pages and then adjusted as needed for larger screens through standard Tailwind media queries.

![preview on different screen sizes](/images/work/real-estate-app/responsive-mockup.png "preview on different screen sizes")

In terms of design optimizations, it's essential to highlight **image optimizations**. Images were carefully tailored for different screen sizes, thanks to the **Contentful Image API**.

![lighthouse performance score for mobile devices {300x100}](/images/work/real-estate-app/lighthouse-score.jpg "lighthouse performance score for mobile devices")

The overall result, even without further optimizations, is a web application that has an appealing appearance on various devices but also delivers optimal performance. This strategic approach successfully meets the high demand for mobile responsiveness in the local market.

> Challenge 3: Smooth Delivery and Uncomplicated Content Management Processes

In my quest to understand how to ensure a smooth content delivery process and an uncomplicated content management experience, I explored popular site-building platforms like [WordPress](https://wordpress.org/), [Joomla](https://www.joomla.org/), and [Shopify](https://www.shopify.com/). These platforms' widespread popularity is attributed, among other factors, to their **minimal technical requirements**. Users can effortlessly manage content by inputting data into relevant fields, pressing `submit` or `publish`, and promptly viewing the updated website.

This project aimed for a **similar content management experience without a heavy frontend**. Among the headless CMS options, **Contentful** emerged as the optimal choice, excelling in user experience and budget considerations. While initial configurations demanded at least a minimal understanding of database concepts and data types, subsequent data updates in content management mode became as straightforward as filling in web forms, including rich text.

![content editor](/images/work/real-estate-app/content-editor.jpg "content editor")

Assigned content managers can now effortlessly update site content and preview results almost immediately on the website, echoing the user-friendly nature of traditional CMS platforms.

> Challenge 4: Restricted Budget

The solution to the budget challenge involved leveraging the generous free tiers of the chosen technologies. This approach enabled the development and delivery of a high-quality product within minimal budget constraints while preserving significant potential for future scalability.

## Key Takeaways 🍬

In retrospect, the project successfully enhanced the online presence of a local real estate business, securing new contracts and impressing potential clients. Valuable lessons include the importance of precise prioritization and active customer engagement. Looking ahead, addressing minor issues, and implementing tests stand as key priorities to ensure ongoing stability and reliability in the project's evolution.

### Results Achieved

The project **has successfully established a strong online presence for the local real estate business**, generating meaningful connections with customers and overcoming budgetary constraints. While development work continues to address emerging requirements, the project has already yielded significant business results. At least five potential clients have expressed being 'impressed with the professional website looks' and are actively considering collaboration. Furthermore, **a new contract has been concluded 🥂, with the website playing a key role in the initial representation of a land lot**. Overall, I am rather happy with the achieved goals.

### Lessons Learned

As a developer of this project, I gained valuable insights, the prominent one being the **importance of accurately defining priorities and of active engagement in a feedback loop with customers**. Certain features, which required considerable time and effort for implementation, ultimately became a waste of time, leading to the removal of entire page sections deemed 'irrelevant to the business.' Simultaneously, unforeseen business requirements necessitated additional reworks. With a better planning strategy, there's a potential for a significant 20% reduction in development time. This experience underscored the **dynamic nature of project requirements** and highlighted the significance of effective communication and adaptable planning in achieving optimal outcomes.

### Future Plans

The work on the project is ongoing, with a primary focus on addressing minor issues, such as mobile image sliders or accessibility. One feature that I intentionally skipped as a solo developer was the tests. However, in retrospect, I now realize that **as the project evolves, even minimal changes can potentially impact already implemented features**. Without any safeguards on the PR merge, I find myself having to perform manual checks on each update or waiting for bug reports 🫣. Consequently, **implementing tests has become the next significant feature on the horizon to enhance the project's stability and maintain a reliable development process**.
