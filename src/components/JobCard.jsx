const JobCard = ({ job, onToggleApplied }) => {
  return (
    <div className="card">
      <div className="logo" />
      <div className="info">
        <h3>{job.title}</h3>
        <p>
          {job.company} - £{job.salary}
        </p>
        <p>{job.location}</p>
      </div>
      <button onClick={() => onToggleApplied(job.id)}>
        {job.applied ? "Applied ✓" : "Mark applied"}
      </button>
    </div>
  );
};

export default JobCard;
