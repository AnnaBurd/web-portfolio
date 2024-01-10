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

1. **Private Dataset:** Exclusive access to a curated translation dataset stored in a vector database.
2. **Robust Security:** JWT-based authentication and role-specific authorization ensure robust security.
3. **User-Friendly Profiles:** Comprehensive user profiles with easy password reset and personal information management.
4. **Automated Notifications:** Automated email notifications streamline communication and user engagement.
5. **Containerized Deployment:** Docker container setup for seamless deployment in any environment.
6. **Mobile-First Design:** Mobile-first responsive design with smooth animations for an enhanced user experience.
7. **One-Click Translation:** Intuitive one-click translation experience for simplicity and user-friendliness.
8. **Format-Preserved .docx Translation:** Translate .docx documents without losing formatting or structure integrity.
9. **Role-Based Administration:** Simple role-based administration for efficient user management.

## Technologies Used

### Backend:

| Name                                            | Usage                                                                                                                                                  |
| :---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [TypeScript](https://www.typescriptlang.org/)   | Enhancing code quality and maintainability by introducing static typing to JavaScript.                                                                 |
| [Node.js](https://nodejs.org/)                  | Serving as a runtime environment for executing server-side JavaScript code, enabling scalable and high-performance applications.                       |
| [Express](https://expressjs.com/)               | Simplifying the building of robust and scalable web applications through a minimal and flexible Node.js web application framework.                     |
| [JSON Web Tokens](https://jwt.io/)              | Providing a compact and URL-safe means of representing claims, commonly used for authentication and secure information exchange.                       |
| [MongoDB](https://www.mongodb.com/)             | Delivering high performance, scalability, and flexibility for handling large amounts of data through the usage of a NoSQL database.                    |
| [Mongoose](https://mongoosejs.com/)             | Simplifying interactions with MongoDB databases through an elegant MongoDB object modeling for Node.js.                                                |
| [TensorFlow](https://www.tensorflow.org/)       | Facilitating the development and training of deep learning models through an open-source machine learning framework.                                   |
| [Microsoft Azure](https://azure.microsoft.com/) | Offering a cloud computing platform with various services, including computing power, storage, and analytics, for building and deploying applications. |
| [Docker](https://www.docker.com/)               | Automating the deployment, scaling, and management of applications in containers through a platform designed for efficiency and consistency.           |
| [Postman](https://www.postman.com/)             | Simplifying the testing and management of APIs through a collaborative platform for API development.                                                   |
| [Swagger](https://swagger.io/)                  | Providing a set of tools for designing, building, and documenting RESTful APIs, ensuring consistency and ease of use.                                  |

[![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat-square)](https://nodejs.org/)
[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square)](https://expressjs.com/)
[![JSON Web Tokens Badge](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat-square)](https://jwt.io/)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat-square)](https://www.mongodb.com/)
[![Mongoose Badge](https://img.shields.io/badge/Mongoose-F04D35?logo=mongoosedotws&logoColor=fff&style=flat-square)](https://mongoosejs.com/)
[![TensorFlow Badge](https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=fff&style=flat-square)](https://www.tensorflow.org/)
[![Microsoft Azure Badge](https://img.shields.io/badge/Microsoft%20Azure-0078D4?logo=microsoftazure&logoColor=fff&style=flat-square)](https://azure.microsoft.com/)
[![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat-square)](https://www.docker.com/)
[![Postman Badge](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=fff&style=flat-square)](https://www.postman.com/)
[![Swagger Badge](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=000&style=flat-square)](https://swagger.io/)

---

### Frontend:

| Name                                          | Usage                                                                                                                         |
| :-------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [TypeScript](https://www.typescriptlang.org/) | Enhancing the structure and maintainability of front-end code by providing static typing.                                     |
| [Vite](https://vitejs.dev/)                   | Serving as a fast, opinionated web dev build tool that aims to provide a faster and leaner development experience.            |
| [React](https://reactjs.org/)                 | Being a JavaScript library for building user interfaces, providing a declarative and efficient way to create interactive UIs. |
| [Chart.js](https://www.chartjs.org/)          | Providing a simple yet flexible JavaScript charting library for designers and developers to create interactive charts.        |
| [Figma](https://www.figma.com/)               | Utilized as an online collaborative design tool for creating UI/UX designs and prototypes.                                    |
| [Tailwind CSS](https://tailwindcss.com/)      | Applied as a utility-first CSS framework that simplifies the design and development of modern, responsive web interfaces.     |

[![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/)
[![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat-square)](https://vitejs.dev/)
[![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)](https://reactjs.org/)
[![Chart.js Badge](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff&style=flat-square)](https://www.chartjs.org/)
[![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat-square)](https://www.figma.com/)
[![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square)](https://tailwindcss.com/)

## Challenges and Solutions

### 1. Limited Documentation on Emerging AI Tools

One significant challenge faced during the development was the scarcity of documentation on modern AI tools. The application was conceived just after the emergence of these cutting-edge tools, making it challenging to find comprehensive resources. To overcome this hurdle, a proactive approach was taken to experiment, iterate, and collaborate with emerging tech communities to gather insights and share knowledge.

### 2. Translation Quality Enhancement

Enhancing the quality of translations posed a unique challenge, especially when dealing with less commonly used languages and highly specialized terminology. To address this, a semi-automated approach was adopted. Using JavaScript (JS) and VBA, a process was implemented to collect translation samples and refine the application's AI models. This iterative process not only improved the translation quality but also served as a valuable learning experience in refining language-specific nuances.

### 3. Rapid Learning Curve for New Technologies

The dynamic nature of the project demanded quick adaptation to unfamiliar technologies. Learning curves were steep, particularly with tools like Swagger. Swift action was taken to bridge the knowledge gap through self-directed learning and hands-on experimentation. This challenge turned into an opportunity for skill growth, showcasing the ability to adapt swiftly and effectively to evolving tech stacks.

## Key Takeaways 🍬

### Results Achieved

#### Usage Metrics

Within the first three months of usage, the application demonstrated remarkable traction, with an average usage of 2,000,000 tokens per month. This metric indicates a growing adoption as more employees integrate the app into their workflow.

#### Efficiency Boost

Employees enthusiastically reported an outstanding 80% reduction in the time required for document translation work. The application's streamlined processes significantly contributed to a more efficient and time-saving workflow.

#### Cost Optimization

Operational costs related to document translation were successfully minimized to approximately 8 USD or 200,000 VND per month. This impressive achievement represents more than a triple reduction in operational costs, showcasing the cost-effectiveness and economic benefits of the application.

These results underscore the tangible impact of the AI-powered translator app on both efficiency and cost-effectiveness, aligning with the project's initial goals of enhancing productivity and reducing manual labor.

### Lessons Learned

#### Strategic Technology Choices

The project highlighted the importance of strategic technology choices. While leveraging cutting-edge technologies can be enticing, there's wisdom in resorting to established technologies. The challenges faced in dealing with limited documentation on emerging AI tools underscore the value of choosing technologies with well-established support and documentation. Striking a balance between innovation and reliability proved crucial for streamlined development and future maintenance.

#### Documentation as a Lifeline

A key takeaway from the development process was the vital role of documentation. Emphasizing the importance of thorough documentation from the initial stages proved beneficial during the maintenance phase. Documentation serves as a lifeline, providing clear guidance for troubleshooting, updates, and scalability. Going forward, prioritizing comprehensive and well-maintained documentation will remain integral to the success and sustainability of the project.

These lessons learned reflect a commitment to practicality, efficiency, and long-term viability in software development projects. They contribute not only to the success of the current project but also lay the groundwork for more seamless development experiences in the future.

### Future Plans

The cornerstone of our future plans revolves around a relentless commitment to improving translation quality. This includes a strategic expansion of our translation dataset and ongoing experimentation with diverse AI models. By staying at the forefront of advancements in natural language processing, our aim is to elevate the accuracy and precision of translations, ensuring an unparalleled level of quality for our users.

#### Dataset Expansion and Model Experimentation

We plan to embark on a comprehensive growth journey by expanding our private dataset. The collection of diverse and industry-specific translation samples will empower our AI models to handle an even broader range of technical documentation with proficiency. Concurrently, experimentation with different models will be a focal point, allowing us to refine and optimize our approach to meet evolving language challenges.

#### Manual Editing Empowerment

Recognizing the invaluable insights that users bring to the translation process, we aim to empower them further. Plans include the implementation of features that enable users to manually edit translations, providing a collaborative and user-centric approach to refining document content. This user-driven customization will play a pivotal role in tailoring translations to specific needs and preferences.

#### Bug Resolution and Feature Enhancement

Acknowledging the dynamic nature of software development, we are committed to continuously enhancing the user experience. This involves vigilant bug resolution to ensure a seamless and error-free operation. Additionally, we'll be introducing new features, with a notable addition being the implementation of an undo/redo functionality. This empowers users to effortlessly navigate through the translation process and correct any inadvertent mistakes.

These future plans embody our commitment to continuous improvement, innovation, and user satisfaction. By prioritizing translation quality, dataset growth, bug resolution, and empowering users with enhanced features, we aim to solidify our position as a leading solution in the realm of technical document translation.
