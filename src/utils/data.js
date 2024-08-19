import img1 from "../assets/Project1/img1.png";
import img2 from "../assets/Project1/img2.png";
import img3 from "../assets/Project1/img3.png";
import img4 from "../assets/Project1/img4.png";
import img1P2 from "../assets/Project2/img1.png";
import img2P2 from "../assets/Project2/img2.png";
import img3P2 from "../assets/Project2/img3.png";
import img4P2 from "../assets/Project2/img4.png";
import img1P3 from "../assets/Project3/img1.png";
import img2P3 from "../assets/Project3/img2.png";
import img3P3 from "../assets/Project3/img3.png";
import img4P3 from "../assets/Project3/img4.png";
import img5P3 from "../assets/Project3/img5.png";
import img2P4 from "../assets/Project4/img1.png";

import img1U from "../assets/ProjectUni/imgU1.png";
import img2U from "../assets/ProjectUni/imgU2.PNG";
import img3U from "../assets/ProjectUni/imgU3.PNG";

import PDF1 from "../assets/Articulo_bio.pdf";
import PDF2 from "../assets/Articulo_industrial.pdf";
import PDF3 from "../assets/Proyecto.pdf";


const projects = [
  {
    id: 1,
    title: "Mern AI Content Generator",
    content:
      "This project is a complete web application developed using the MERN stack (MongoDB, Express, React and Node.js). Its purpose is to generate content through the use of artificial intelligence. The frontend is built with React, which provides a dynamic and interactive user interface. In addition, Tailwind CSS has been used for layout and styling, ensuring a modern and responsive user experience. \n  On the backend, Node.js and Express manage server operations, including communication with the MongoDB database, integration with AI services and handling user requests. The focus of the project is on providing an efficient and scalable solution for automatic content generation using state-of-the-art technologies.",
    image: [img1, img2,img3,img4],
    platform: "Windows",
    stack: "NodeJs, ExpressJs, Mongoose, ReactQuery, Vite ",
    date: "Jun 26, 2024",
    github:"https://github.com/MartyPR/MERN-AI-Content"
  },
  {
    id: 2,
    title: "Mern Expenses Tracker",
    content:
      "This project is a web application designed to manage and track expenses efficiently. It is developed using the MERN stack (MongoDB, Express, React, Node.js) along with additional technologies to optimize the user experience and data management.\n \n Frontend: The user interface is created with React, offering a fluid and interactive experience. Tailwind CSS is used for the visual design, ensuring a modern and adaptive style. In addition, Redux is implemented for managing the global state of the application, improving data organization and predictability. React Query is used for efficient management of data synchronization with the backend, providing a better user experience by handling caching and automatic updates . \n \n Backend: The server side is developed with Node.js and Express, providing a robust API that handles all user operations and connects with MongoDB to securely store spend data. \n \n This system is designed to provide a comprehensive solution for financial tracking, allowing users to efficiently record, categorize and analyze their expenses.",
    image: [img2P2,img1P2,img3P2,img4P2],
    platform: "Windows",
    stack: "NodeJs, ExpressJs, Mongoose, ReactQuery, Vite, TailWind, Redux ",
    date: "Jun 21, 2024",
     github:"https://github.com/MartyPR/Blog-Project"
  },
  {
    id: 3,
    title: "Blog Project",
    content:
      "This project is a blogging platform developed with a focus on simplicity and efficiency. It uses Node.js and Express for the backend, providing a robust and scalable framework to handle server operations and user requests. The user interface is built with EJS (Embedded JavaScript Templates), allowing dynamic content to be rendered on the server side efficiently. \n \n The MongoDB database is used to store and manage blog posts, comments and user data. This ensures high availability and flexibility in content management. The project is designed to offer a simple blogging experience, but with all the essential functionalities, such as creating, editing and viewing posts.",
    image: [
      img1P3,img2P3,img3P3,img4P3,img5P3
    ],
    platform: "Windows",
    stack: "NodeJs, ExpressJs, Mongoose, Ejs, CSS ",
    date: "July 10, 2024",
     github:"https://github.com/MartyPR/MERN-stack-expenses-tracker"
  },
  {
    id: 4,
    title: "Chatbot IA Project",
    content:
      "The Chatbot IA Project is an application designed to deliver conversational interactions through artificial intelligence. It uses ChatGPT as the main engine to generate contextual and dynamic responses. On the backend, Express.js is used to handle server requests and Mongoose is used to manage the MongoDB database, allowing conversations and other relevant data to be stored efficiently. \n \n  On the frontend, the application is built with React, offering an interactive and fluid user interface. Redux is used for managing the overall state of the application, improving the synchronization and handling of conversations. This project provides a complete and scalable solution for the implementation of chatbots based on artificial intelligence, adaptable to multiple use cases.",
    image: [
      img2P4,
    ],
    platform: "Windows",
    stack: "ChatGpt, ExpressJs, Mongoose, React, Redux ",
    date: "July 8, 2024",
     github:"https://github.com/MartyPR/Chatbot-IA"
  },
];

export const Projects_uni = [
  {
    id: 4,
    title: "Development of an asset management CMDB",
    content:
      " To develop a CMDB (Configuration Management Database) to streamline the asset management processes (computers, screens, among others) at alpina, in order to fulfill different functions and optimize time. \n\n The CMDB was developed to streamline the asset management processes (computers, screens, among others) in alpina, in order to fulfill different functions and optimize time, as well as to provide a solid base for incident, problem, change and version management. With the help of the OCS and Kaspersky platforms, it was possible to update the inventory allowing to find the equipment based on its IP address, as well as to compare the data between them.",
    image:
      [img1U],
    date: "January 15, 2023",
    file:PDF1
  },
  {
    id: 2,
    title: "SOFT ROBOT",
    content:
      "The concept of “Buen Vivir” emerges as an alternative vision to conventional development, especially in the Andean region of Latin America. It is based on principles of harmony, solidarity, reciprocity, and respect for nature and the community. This approach not only pursues individual well-being, but also focuses on collectivity and environmental sustainability. \n \n In this sense, Buen Vivir advocates a balance between human beings and nature, promoting coexistence in harmony with the natural environment, recognizing that human well-being cannot be achieved at the cost of environmental degradation. In addition, this concept incorporates aspects such as social justice, equity, and cultural diversity, questioning the idea of linear development based exclusively on economic growth. \n \n Good Living is framed in indigenous cosmovisions, where life is conceived as an interrelated whole, and happiness is achieved through complementarity, reciprocity and balance. This vision has been incorporated into the constitutions of countries such as Ecuador and Bolivia, where the right to live in a healthy and balanced environment is recognized.",
       image:
      [img2U],
    date: "September 22, 2022",
    file:PDF2,
  },
  {
    id: 3,
    title: "Robotic Arm",
    content:
      "Control of a robotic arm using Matlab and ROS (Robot Operating System), with a particular focus on the use of a proportional controller to achieve a circular trajectory. It is described how the system is modeled using URDF (Unified Robot Description Format) and Simscape Multibody in Matlab, which allows simulating and analyzing the robot movements in a 3D environment.",
    image:
      [img3U],
    date: "October 15, 2022",
    file:PDF3
  },
];

export default projects;
