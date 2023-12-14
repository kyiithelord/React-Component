import React from "react";
import Course from "./Course";

function CourseGroup() {
  const courses = [
    {
      id: 1,
      title: "Special Web Design",
      studentCount: 5,
    },
    {
      id: 2,
      title: "Web App Development",
      studentCount: 4,
    },

    {
      id: 3,
      title: "Web Dev Foundation",
      studentCount: 0,
    },
    {
      id: 4,
      title: "Basic UI Design",
      studentCount: 2,
    },
    {
      id: 5,
      title: "Premium UI Design",
      studentCount: 15,
    },
  ];
  return (
    <div>
      {courses.map(({ id, title, studentCount }) => (
        <Course id={id} title={title} count={studentCount} key={id} />
      ))}
    </div>
  );
}

export default CourseGroup;
