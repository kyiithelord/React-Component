import React from "react";

function Course({id, title, count}) {
  const borderClassName =
    count === 0 ? "border-red-400 bg-red-200" : "bg-gray-100";
  return (
    count > 0 && <div className={`border-s-4 ${borderClassName} mb-3 p-3`}>
      {count} {title}
    </div> 
  );
}

export default Course;
