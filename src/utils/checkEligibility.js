module.exports = (job, student) => {
  let elig = student.approvedByTPO;
  if (student.gender === "Male" && job.onlyForFemales) {
    elig = false;
  } else if (student.backlogs > job.maxBacklogsAllowed) {
    elig = false;
  } else if (student.cgpa < job.minCgpa) {
    elig = false;
  }

  return {
    isElig: elig,
  };
};
