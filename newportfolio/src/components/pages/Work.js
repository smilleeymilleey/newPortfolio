import React from "react"
import Card from "../card/Card"


import data from "../../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
      
            <h1>Work</h1>
        
          <div className="grid">
          
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
