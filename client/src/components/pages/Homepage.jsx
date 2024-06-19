import Masterlayout from "./Masterlayout"
import HomePageCard from "../cards/HomePageCard"

function Homepage() {
  return (
    <Masterlayout>
        <div className="container-fluid">
            <div className="columntwo">
              <b className="fontone">Hi, I am Sadaf Khan</b> 
              <p className="text-white"> Full Stack Developer </p>

              <section className="text-white">
                <br/>
                <br/>
               <h2>About Me </h2> 
                <p>Key Skills:
                    Back-End: Proficient in Node.js, Express, and Mongoose for managing MongoDB databases and designing secure, scalable RESTful APIs. <br/><br/>
                    Front-End: Skilled in creating responsive, dynamic interfaces using React and Angular. <br/><br/>
                    Database Management: Experienced in using Mongoose to ensure data integrity and optimize MongoDB operations. <br/><br/>
                    API Testing: Proficient in Postman for comprehensive API testing and debugging. <br/><br/>
                    Version Control: Adept in Git for efficient version control and collaboration. <br/><br/>
                    DevOps: Knowledgeable in deploying applications on AWS, Heroku, and using CI/CD pipelines for automated deployment.
                </p>
              </section>
            </div>

            <div className="columnthree">
                <HomePageCard/>
            </div>
         </div>
    </Masterlayout>
    
  )
}

export default Homepage