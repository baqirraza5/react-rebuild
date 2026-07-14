import { useState } from "react";

const initialJobData = {
  id: crypto.randomUUID(),
  title: "",
  company: "",
  salary: "",
  location: "",
  applied: false,
};

const AddJobForm = ({ onAdd }) => {
  const [job, setJob] = useState(initialJobData);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser's full-page reload
    if (
      job.title.trim() === "" ||
      job.company.trim() === "" ||
      job.location.trim() === "" ||
      job.title.trim() === ""
    )
      return; // validation guard 🛡
    onAdd(job);
    setJob(initialJobData); // controlled input → clearing is one setter
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={job.title}
        onChange={(e) => setJob({ ...job, title: e.target.value })}
      />
      <input
        value={job.company}
        onChange={(e) => setJob({ ...job, company: e.target.value })}
      />
      <input
        value={job.salary}
        onChange={(e) =>
          setJob({ ...job, salary: Number(e.target.value) })
        }
      />
      <input
        value={job.location}
        onChange={(e) => setJob({ ...job, location: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddJobForm;
