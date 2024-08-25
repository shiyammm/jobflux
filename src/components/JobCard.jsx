import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Heart, MapPinned, Trash, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const JobCard = ({
  job,
  isMyJob = false,
  savedInit,
  onJobSaved = () => {},
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-2xl font-bold">
          {job.title}

          {isMyJob && (
            <Trash2
              color="red"
              strokeWidth={1}
              size={20}
              className="cursor-pointer"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          {job.company && <img src={job.company.logo_url} className="h-6" />}
          <div className="flex gap-3">
            <MapPinned size={20} /> {job.location}
          </div>
        </div>
        <hr />
        <div>
          {job.description.substring(0, job.description.indexOf('.') + 1)}...
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link className="flex-1" to={`/job/${job.id}`}>
          <Button variant="secondary" className="w-full font-semibold">
            More Details
          </Button>
        </Link>
        <Heart size={20} stroke="red" fill="red" />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
