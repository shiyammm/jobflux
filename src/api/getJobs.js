import supabaseClient from '@/db/supabase';

export const getJobs = async (token, { location, jobTitle, company_id }) => {
  const supabase = await supabaseClient(token);

  let query = supabase
    .from('jobs')
    .select('*, company:companies(name,logo_url), saved:saved_jobs(id)');

  if (location) {
    query.eq('location', location);
  }

  if (jobTitle) {
    query.ilike('title', `%${jobTitle}%`);
  }

  if (company_id) {
    query.eq('company_id', company_id);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    return null;
  }

  return data;
};
