import { getJobs } from '@/api/getJobs';
import JobCard from '@/components/JobCard';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarLoader, SyncLoader } from 'react-spinners';

const JobListing = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [companyId, setCompanyId] = useState('');

  const { isLoaded } = useUser();

  const {
    Jobs,
    data: jobsData,
    loading,
  } = useFetch(getJobs, jobTitle, location, companyId);

  useEffect(() => {
    if (isLoaded) Jobs();
  }, [isLoaded, jobTitle, location, companyId]);

  if (!isLoaded) {
    return <BarLoader className="mt-4" width={'100%'} color="#36d7b7" />;
  }

  return (
    <section to="/post-job">
      <div className="flex flex-col items-center mt-10 space-y-7">
        <h1 className="text-xl font-semibold text-center">Latest Jobs</h1>
        {loading && (
          <SyncLoader className="" size={15} color="#36d7b7" width={'100%'} />
        )}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!loading ? (
          jobsData?.length ? (
            jobsData.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <span className="text-xl font-medium text-white">No Jobs</span>
          )
        ) : null}
      </div>
    </section>
  );
};

export default JobListing;
