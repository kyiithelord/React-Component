import React from "react";
import Heading from "./components/Heading";
import CourseGroup from "./components/CourseGroup";
import Course from "./components/Course";

function App() {
  return (
    <div className="p-10 border-2 border-gray-400 m-10">
      <Heading />
      <CourseGroup />
    </div>
  );
}

export default App;
