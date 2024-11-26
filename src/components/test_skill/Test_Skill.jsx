import React from "react";
import photo from "../../assets/testskill.jpg";

const data = [
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
  {
    skill_name: "javascript",
    progress: "0%",
  },
];

export default function TestSkill() {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-4xl mb-4">Test Skill</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {data.map((value) => (
            <a href="/detail-test" >
              <div className="rounded-md shadow-md p-4 me-4 my-4 hover:shadow-lg">
                <img src={photo} alt="photo_testskill" />
                <p>{value.skill_name}</p>
                <p className="opacity-60">{value.progress} Complate</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
