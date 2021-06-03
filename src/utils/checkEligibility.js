module.exports = (job, student) => {
    let elig = student.approvedByTPO;
    if(student.gender==='Male' && job.onlyForFemales) {
        elig = false;
    }
    else if(student.backlogs > job.maxBacklogsAllowed) {
        elig = false;
    }
    else {
        for(let i=0; i<student.sgpa.length; i++) {
            if(student.sgpa[i] < job.minCgpa) {
                elig = false;
                break;
            }
        }
    }
    return {
        isElig: elig
    }
}
