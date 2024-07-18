import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `Python problem-solver with a knack for building efficient and user-friendly applications.  
While new to the professional development scene, I possess a deep understanding of Python fundamentals, libraries like numpy, pandas etc. and a strong work ethic honed through personal projects.  
I'm a quick learner with a passion for tackling complex challenges and collaborating with teams to bring innovative ideas to life.`;

export const ABOUT_TEXT = ['Data Pre-processing', 'Data Analysis', 'ML model training and Evaluation', 'Data Visualization' ,'Creating Interactive Dashboards', 'Web Scrapping', 'Database Management(SQL)','Data Structure & Algorithms', 'Django REST APIs'] ;

export const EDUCATION = [
  {
    degree: "Bachelors in Computer Application",
    college: "Chandigarh University",
    place: "Mohali, Punjab",
    timeline: "2021 - 2024",
    cgpa: "7.98",
    skills: ["C/C++", "Java" , "DSA", "Operating System", "Computer Networks", "DBMS", "Discrete Maths", "Soft Skills"],
  },
  {
    degree: "12th PCB",
    college: " Army Public School",
    place: "Varanasi Cantt, Varanasi",
    timeline: "2019 - 2020",
    cgpa: "84%",
    skills: ["Physics", "Chemistry", "Biology"],
  },
]

export const EXPERIENCES = [
  // format : {year: ,role: , company, description: , technologies: ,}
];

export const PROJECTS = [
  {
    title: "Heart Disease Prediction",
    link: "https://github.com/bishnuShahi/Heart-Disease-Prediction",
    image: project1,
    description:
      "Built a heart disease prediction model with high accuracy (recall of 0.97) for identifying patients at risk, while minimizing false alarms (F1-score 0.83) balancing both for medical applications. Integrated with user-friendly interface.",
    technologies: ["HTML", "CSS", "Django", "Data Analysis", "Scikit-learn"],
  },
  {
    title: "Pet Breed Classification",
    link: "https://github.com/bishnuShahi/PawFinder-Project",
    image: project2,
    description:
      "An application for accurately classifying the breed of cats and dogs. Achieved accuracy of 97% by fine-tuning pre-trained model and using feature stacking technique for both dog breeds and cat breeds. Integrated with a user-friendly interface with user sign-up/login and robust authentication system.",
    technologies: ["HTML", "CSS", "Django", "TensorFlow", "Keras"],
  },
];

export const CONTACT = {
  address: "Ward no. 12, Harkapur, Gaidakot, Nepal",
  phoneNo: "+91 9120428774",
  email: "bishnushahi2003@gmail.com",
};
