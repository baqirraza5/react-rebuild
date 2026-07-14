import { useEffect, useState } from "react";
import JobCard from "./components/JobCard";

import "./App.css";
import GitHubCard from "./components/GitHubCard";
import { initialJobs } from "./utils/jobs";
import AddJobForm from "./components/AddJobForm";

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [showAppliedOnly, setShowAppliedOnly] = useState(false);
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();

  const visibleJobs = jobs.filter(
    (job) =>
      (job.company.toLowerCase().includes(q) ||
        job.title.toLowerCase().includes(q)) &&
      (!showAppliedOnly || job.applied),
  );

  useEffect(() => {
    document.title = `${visibleJobs.length} Jobs Found`;
  }, [visibleJobs.length]);

  const toggleApplied = (id) =>
    setJobs(
      jobs.map((j) =>
        j.id === id ? { ...j, applied: !j.applied } : j,
      ),
    );

  const addJob = (newJob) => setJobs([...jobs, newJob]);

  return (
    <div className="cardList">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or company..."
      />
      <button onClick={() => setShowAppliedOnly(!showAppliedOnly)}>
        {showAppliedOnly ? "Show All" : "Show Applied"}
      </button>
      <GitHubCard />
      <AddJobForm onAdd={addJob} />
      {visibleJobs.length !== 0 ? (
        visibleJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onToggleApplied={toggleApplied}
          />
        ))
      ) : (
        <p>0 Jobs FOUND!!</p>
      )}
    </div>
  );
}
export default App;
