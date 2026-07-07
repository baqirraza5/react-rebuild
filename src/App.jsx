import JobCard from "./components/JobCard";

import "./App.css";

const jobs = [
  {
    id: 1,
    company: "Google",
    title: "AI Product Engineer",
    salary: 55000,
    applied: false,
  },
  {
    id: 2,
    company: "Microsoft",
    title: "Data Analyst",
    salary: 59000,
    applied: true,
  },
  {
    id: 3,
    company: "Meta",
    title: "Full Stack Developer",
    salary: 80000,
    applied: true,
  },
];

function App() {
  return (
    <div className="cardList">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
export default App;
