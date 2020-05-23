const db = require('./db');

const getCompany = id => db.companies.get(id);
const getJob = id => db.jobs.get(id);

const createJob = params => getJob(db.jobs.create(params));

const Query = {
  job: (root, { id }) => getJob(id),
  jobs: () => db.jobs.list(),
  
  company: (root, { id }) => getCompany(id),
}

const Mutation = {
  createJob: (root, params, { user }) => createJob({
      ...params.input,
      companyId: user.companyId
    })
  }
  
  const Job = {
    company: ({ companyId }) => getCompany(companyId),
  }
  
  const Company = {
    jobs: ({ id }) => db
      .jobs
      .list()
      .filter(job => job.companyId === id)
  }
  
  module.exports = { Query, Job, Company, Mutation }