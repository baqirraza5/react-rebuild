import JobCard from "./components/JobCard";

import "./App.css";

const jobs = [
  {
    id: 1,
    company: "Google",
    title: "AI Product Engineer",
    salary: 55000,
    applied: false,
    location: "London",
  },
  {
    id: 2,
    company: "Microsoft",
    title: "Data Analyst",
    salary: 59000,
    applied: true,
    location: "London",
  },
  {
    id: 3,
    company: "Meta",
    title: "Full Stack Developer",
    salary: 80000,
    location: "London",
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
