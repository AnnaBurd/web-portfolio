---
title: "Geology Specialized AI Translator App"
introduction: "Web application employed to translate technical documentation in petroleum geology, context-aware. Seamlessly integrates OpenAI/Azure and local AI models into an advanced AI chain to produce precise translations while ensuring company data security. User-friendly interface and support for formatted Docx files simplify the translation process for non-technical users."
mainTag: latest work
tags:
  - Web App
  - React
  - Node
  - OpenAI
  - LangChain
  - Azure
  - Typescript
  - Tailwind
---

[logo]: https://raw.githubusercontent.com/AnnaBurd/translator-app-ts-front/492b9d9e7c1deacd02e615f8c5ffb2988676da7e/public/icon.svg "Translator App Logo"

## Introduction

The translator app is an essential tool for businesses that require accurate translations of technical documentation. While popular text translation tools like Google Translate and commercial deep-learning-based solutions are effective for common communication topics, they often fall short when it comes to less commonly used languages or highly specialized terminology.

For instance, the bi-lingual international company the application was initially designed for requires all technical documents to be provided in both Russian and Vietnamese languages. Unfortunately, existing translation tools frequently produce unreadable gibberish due to the narrow-field terminology involved. This results in a significant amount of manual labor being required on what should otherwise be an automatable task.

To address this issue, we have developed an AI-powered application designed specifically for enhancing the accuracy of translations by utilizing private databases with pre-existing samples from various fields and industries. By doing so, we can significantly improve efficiency while also reducing costs associated with manual corrections - ultimately providing better quality service overall!

## Goals and Requirements

The primary goal of this project was to enhance the efficiency of a joint enterprise by **accelerating the labor-intensive translation process of company documentation, ultimately supporting and benefiting its employees**.

Key Initial requirements:

- Achieve **precise translations** ✅, ensuring accuracy in company-specific terminology within the field of petroleum geology
- Implement robust measures to guarantee the **security of company data** 🔏 throughout the translation process
- Enable the translation of **formatted Docx documents**, preserving the original layout and structure of technical documentation
- Develop a **simple and intuitive user interface** to facilitate easy navigation and operation for all users, regardless of technical expertise
- Implement a comprehensive system for the management of users and tokens, ensuring efficient administration and **control over access and permissions** 🛂

## Key Features

This project integrates various essential elements that together create a strong, high-quality solution suitable for commercial purposes.

1. **Private Dataset:** Exclusive access to a curated translation dataset stored in a vector database.
2. **Robust Security:** JWT-based authentication and role-specific authorization ensure robust security.
3. **User-Friendly Profiles:** Comprehensive user profiles with easy password reset and personal information management.
4. **Automated Notifications:** Automated email notifications streamline communication and user engagement.
5. **Containerized Deployment:** Docker container setup for seamless deployment in any environment.
6. **Mobile-First Design:** Mobile-first responsive design with smooth animations for an enhanced user experience.
7. **One-Click Translation:** Intuitive one-click translation experience for simplicity and user-friendliness.
8. **Format-Preserved .docx Translation:** Translate .docx documents without losing formatting or structure integrity.
9. **Role-Based Administration:** Simple role-based administration for efficient user management.

## List of Technologies

This project was developed by selecting a carefully curated set of modern technologies and tools. The pivotal ones are listed below. For a comprehensive view of all dependencies, including exact versions, feel free to explore the details in the [package.json](https://github.com/AnnaBurd/translator-app-ts-front/blob/main/package.json) file for the frontend and in the [package.json](https://github.com/AnnaBurd/translator-app-ts-api/blob/main/package.json) for the backend.

### Backend:

| Name                                                                                                                                                                | Usage                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/)              | Enhancing code quality and maintainability by introducing static typing to JavaScript.                                                                 |
| [![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat-square)](https://nodejs.org/)                                    | Serving as a runtime environment for executing server-side JavaScript code, enabling scalable and high-performance applications.                       |
| [![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square)](https://expressjs.com/)                                   | Simplifying the building of robust and scalable web applications through a minimal and flexible Node.js web application framework.                     |
| [![JSON Web Tokens Badge](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat-square)](https://jwt.io/)                | Providing a compact and URL-safe means of representing claims, commonly used for authentication and secure information exchange.                       |
| [![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat-square)](https://www.mongodb.com/)                              | Delivering high performance, scalability, and flexibility for handling large amounts of data through the usage of a NoSQL database.                    |
| [![Mongoose Badge](https://img.shields.io/badge/Mongoose-F04D35?logo=mongoosedotws&logoColor=fff&style=flat-square)](https://mongoosejs.com/)                       | Simplifying interactions with MongoDB databases through an elegant MongoDB object modeling for Node.js.                                                |
| [![TensorFlow Badge](https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=fff&style=flat-square)](https://www.tensorflow.org/)                  | Facilitating the development and training of deep learning models through an open-source machine learning framework.                                   |
| [![Microsoft Azure Badge](https://img.shields.io/badge/Microsoft%20Azure-0078D4?logo=microsoftazure&logoColor=fff&style=flat-square)](https://azure.microsoft.com/) | Offering a cloud computing platform with various services, including computing power, storage, and analytics, for building and deploying applications. |
| [![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat-square)](https://www.docker.com/)                                  | Automating the deployment, scaling, and management of applications in containers through a platform designed for efficiency and consistency.           |
| [![Postman Badge](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=fff&style=flat-square)](https://www.postman.com/)                              | Simplifying the testing and management of APIs through a collaborative platform for API development.                                                   |
| [![Swagger Badge](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=000&style=flat-square)](https://swagger.io/)                                   | Providing a set of tools for designing, building, and documenting RESTful APIs, ensuring consistency and ease of use.                                  |

### Frontend:

| Name                                                                                                                                                   | Usage                                                                                                                         |
| :----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/) | Enhancing the structure and maintainability of front-end code by providing static typing.                                     |
| [![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat-square)](https://vitejs.dev/)                               | Serving as a fast, opinionated web dev build tool that aims to provide a faster and leaner development experience.            |
| [![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)](https://reactjs.org/)                           | Being a JavaScript library for building user interfaces, providing a declarative and efficient way to create interactive UIs. |
| [![Chart.js Badge](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff&style=flat-square)](https://www.chartjs.org/)            | Providing a simple yet flexible JavaScript charting library for designers and developers to create interactive charts.        |
| [![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat-square)](https://www.figma.com/)                         | Utilized as an online collaborative design tool for creating UI/UX designs and prototypes.                                    |
| [![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square)](https://tailwindcss.com/) | Applied as a utility-first CSS framework that simplifies the design and development of modern, responsive web interfaces.     |

## Challenges and Solutions

Undoubtedly, this project posed a significant challenge for me, especially in areas where guidance from tutorials, documentation, Stack Overflow, or GitHub discussions was scarce. However, the necessity to find solutions on my own and quickly adapt to new technologies made this project incredibly fascinating to work on!

The **primary obstacle was ensuring the utmost quality and precision in translations**. This particular feature **distinguishes the project from competitors**. Consequently, I continue to invest time and efforts towards experimenting and improving upon it, despite having already implemented numerous ideas.

> Challenge 1: The quality of translations

A general way to improve AI model output is by providing relevant examples. So, I started by **gathering an extensive dataset of translation samples**, all related to geology and written in Russian-Vietnamese. Collecting the data was a bit tricky due to inconsistencies in available sources, both in terms of how the information was formatted and what it contained. I used VBA macros and JS scripts to automate the process, but manual work was still essential as a final step in data cleansing.

Secondly, I extensively **experimented with different prompt structures, context lengths, and model setups**. The emphasis was on optimizing the application's **performance in terms of the price/quality ratio**.

> Challenge 2: Steep learning curve for emerging technologies and lack of documentation

My curiosity extends to understanding the intricacies of the entire process, from initiating `npm run dev` down to the journey of data bits through hardware and Wi-Fi connections. But while the computer science degree lays a robust foundation, it doesn't cover the latest technological advancements. So, to tackle this project, I committed countless nights to watching tutorials, reading documentation, and delving deeply into the workings of AI models and cutting-edge tools like Langchain. And it was so fun — check out one of my go-to sources for theoretical knowledge, [StatQuest with Josh Starmer](https://www.youtube.com/user/joshstarmer).

In general, taking a proactive approach by experimenting, iterating on ideas, and collaborating with communities centered around emerging technologies helped me gain valuable insights and share knowledge.
Self-directed learning played a pivotal role in closing any gaps in my understanding and effectively solving complex problems.

## Key Takeaways 🍬

While initially conceived as an experimental feature during the AI boom, the AI Translator App has evolved into a project with impactful results and promising prospects within its niche.

### Results Achieved

Within the first three months of usage, the application gained significant traction, registering an average usage of 2,000,000 Azure API tokens per month. This growing metric highlights the increasing adoption of the app as more employees integrate it into their daily workflows.

Positive user feedback underscored the app's usefulness, with employees reporting an 80% reduction in the time required for document translation tasks.

API usage attributes a significant portion of application operational expenses. These costs were minimized to 8 USD or 200,000 VND per month. Overall results show a **more than fivefold cost reduction for documentation translations**, a significant economic benefit of the application.

### Lessons Learned

A primary lesson from this project's development journey underscores **the critical importance of comprehensive documentation**. Straightforward and updated documentation serves as a guiding light during the maintenance phase, especially in the context of multi-featured projects.

Another significant takeaway is **the essential role of economic estimates before undertaking commercial projects**. While the temptation of immediate development is strong, a thorough assessment of economic impact is crucial. In this project, where API calls carry a cost, initial estimates played a vital role in judiciously allocating resources and adhering to budgets. The meticulous approach ultimately proved the project's cost-effectiveness through final results.

### Future Plans

With the primary focus on enhancing translation quality, the short-term plan involves expanding the translation dataset with a broader range of technical documentation. Simultaneously, ongoing experimentation with diverse AI models aims to elevate accuracy and precision and reduce costs.

The user-centric approach remains a priority, with plans for features allowing manual translation edits to tailor translations to specific needs and preferences. For a full list of upcoming features, please refer to the [roadmap of the project](https://github.com/AnnaBurd/translator-app-ts-front?tab=readme-ov-file#roadmap).
