import React from "react";

const data = [
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Kerjakan",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Kerjakan",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
  {
    skill_name: "JavaScript",
    dificulty: "Easy",
    type_test: "JS Basic",
    max_score: 60,
    status: "Lulus",
  },
];

function Detail_Test() {
  return (
    <div className="p-5">
      <h1 className="text-4xl mb-1">JavaScript Test</h1>
      <p className="text-sm opacity-60">
        {" "}
        <a href="/tests">Test Skill</a> / Javascript test
      </p>

      {data.map((value) => (
        <a href={value.status != "Lulus" && "/test"}>
          <div className="rounded-md shadow-md p-5 my-5">
            <div className="grid">
              <div>
                <p className="text-2xl">{value.skill_name}</p>
                <p className="font-light text-sm">
                  <span className="text-green-500">{value.dificulty}</span>,{" "}
                  {value.type_test}, Max Score: {value.max_score}
                </p>
              </div>
              <div className="my-4 flex justify-center items-center sm:col-end-10">
                <button
                  className={`${
                    value.status == "Lulus"
                      ? "bg-[#2CAD5F] hover:bg-[#2CAD5F]/80"
                      : "bg-[#0077B6] hover:bg-[#0077B6]/80"
                  }  p-2 rounded-lg text-white text-sm w-full md:w-28 `}
                >
                  {value.status}
                </button>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Detail_Test;
