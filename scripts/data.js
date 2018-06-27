const Morikin = {
  id: "morikin",
  data:[{
        title: "Morikin",
        text:
         `Morikin is a side project being developed in my free time.
        It is a basic social Network built in react.
        Find the code at my <a href='http://github.com/anthoasho'> Github </a>`,
        img: {
          src: "public/images/3.JPG",
          alt: "code picture"
        },
        cornerGraphic:{
          background:"public/images/morikin.svg",
          css: "background-logo"
        }
      },
      { title: "Morikin 2",
        text: "hello again",
        img: {
          src: "public/images/3.JPG",
          alt: "code picture"
        }

      }]
}
const jsStudy = {
  id: "js-study",
  data:[{
        title: "Javascript study timeline",
        text: `After studying Javascript entirely in the console, I began to try and use my acquired knowledge to create different small projects.
        I have decided to leave their code as-is to hopefully help demonstrate my path of studies.
        `,
        img: {
          src: "public/images/1.JPG",
          alt: "code picture"
        }
},
{
      title: "Basic Tag Editor",
      text: `One of my first solo projects came in the form of a now seemingly remnant element of the web, a tag editor. It began as my introduction to jQuery. `,
      img: {
        src: "public/images/1.JPG",
        alt: "code picture"
      }
},
{
      title: "My first Calculator",
      text: `My next challenge was to attempt to create a working calculator with a simple design. Here I decided to forego jQuery to help facilitate my studies of Vanilla JS further.
      I encountered a number of initial challenges during this mini-project. The aim of the design was to replicate the traditional calculator look with a self-erasing screen while storing the memory of the calculation.
      One of the main takeaways of this project was to ensure the security of code as I used Eval() to finalise calculations in the project.
      `,
      img: {
        src: "public/images/1.JPG",
        alt: "code picture"
      }
},
{
      title: "Random User Generator",
      text: `Knowing the importance of APIs in modern web, it was important to get an understanding of APIs. This was a small widget that would fetch from <a href="https://randomuser.me/api">randomuser.me/api</a>.
            Despite using jQuery as the method of fetching here, I have since preferred to use Axios.js.
      `,
      img: {
        src: "public/images/1.JPG",
        alt: "code picture"
      }
}]
}

const AboutMe = {
  id: "about",
  data:[{
      title: "About Me",
      text: `
      An aspiring Web Developer from the United Kingdom who is looking to begin a career in Japan working as a  junior Javascript Developer.
      `,
      img:{
        src: "public/images/2.JPG",
        alt: "Photo of Anthony"
      }
  },
  {
      title: "Education",
      text: `
      I graduated from Durham University in 2015 with a Bachelors of Science in Applied Psychology, giving me skills in research as well as statistics.
      I began began self study of Javascript and web development in September 2017, of which I have dedicated most of my free time to building my skills.
      `,
      img:{
        src: "public/images/2.JPG",
        alt: "Photo of Anthony"
      }
  }]
}


const opening = {
  id: "opening",
  data:[{
    title: "Hi!",
    text: `My name is Anthony - thanks for visiting. `,
    img:{
      src: "public/images/7.JPG",
      alt: ""
    }
  }]
}
const Designs = {
  id: "designs",
  data:[  {
      title: "Loading icons",
      text: `Here are a few of my loading icons I have designed entirely in CSS.`,
      scriptBox:[[{className: "loader-one loader-one-main"},{className: "loader-one loader-one-support"}],  [{className: "loader-two"}, {className: "loader-two"}]]
    },
    {
    title: "Designs",
    text: `While I do not consider myself to be a designer, I like writing code to try and create interesting UI elements. Here are a few of them.`,
    img:{
      src: "public/images/7.JPG",
      alt: ""
    }
  },
  {
    title: "Buttons",
    text: `Here are a few of my buttons I have designed entirely in CSS.`,
    img:{
      src: "public/images/7.JPG",
      alt: ""
    }
  }

]
}

let layoutArray = [opening, Morikin, jsStudy, Designs, AboutMe]
