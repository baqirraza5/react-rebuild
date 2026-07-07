const JobCard = ({ job }) => {
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
    </div>
  );
};

export default JobCard;
