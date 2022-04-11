import React, { useState, useEffect } from "react";
import Job from "./Job";
import JobsList from "./JobsList";
import Loading from "./Loading";
import Experience from "./Experience";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [experience, setExperience] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  const changeJob = (index) => {
    setValue(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setExperience(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        return console.error(error.message);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <Experience />
      <div className="jobs-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <JobsList
                key={item.id}
                name={item.company}
                changeJob={changeJob}
                index={index}
                jobs={experience}
                value={value}
              />
            );
          })}
        </div>
        <Job {...experience[value]} />
      </div>
    </section>
  );
}

export default App;
