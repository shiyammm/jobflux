import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import React from 'react';
import { Link } from 'react-router-dom';
import companies from '../data/companies.json';
import faqs from '../data/faqs.json';
import Autoplay from 'embla-carousel-autoplay';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const LandingPage = () => {
  return (
    <main className="w-full min-h-screen ">
      <section className="text-center h-screen flex flex-col items-center justify-center">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl text-center gradient-title">
            Unlock your future <br className="xl:hidden block" />
            with <br className="xl:block hidden" /> the right job.
          </h1>
          <p className="text-white font-normal text-md sm:text-xl md:text-2xl">
            Browse. Apply. Get hired!
          </p>
        </div>
        <div className="space-x-5 mt-5 md:mt-7">
          <Link to="/jobs">
            <Button
              variant="blue"
              className="text-white text-lg font-semibold tracking-wide py-6 px-7"
            >
              Find Job
            </Button>
          </Link>
          <Link to="/post-job">
            <Button
              variant="destructive"
              className="text-lg font-semibold tracking-wide py-6 px-7"
            >
              Post Job
            </Button>
          </Link>
        </div>
        <div className="mt-10">
          <Carousel
            className="w-full py-10"
            plugins={[Autoplay({ delay: 2000 })]}
          >
            <CarouselContent className="flex gap-4 lg:gap-20 items-center">
              {companies.map(({ name, id, path }) => {
                return (
                  <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                    {
                      <img
                        src={path}
                        alt={name}
                        className="h-9 sm:h-14 object-contain "
                      />
                    }
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Card>
            <CardHeader>
              <CardTitle>Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Discover and apply for jobs, track your applications, and more.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post job listings, manage applications, and find top talent.
            </CardContent>
          </Card>
        </div>
      </section>
      <>
        <Accordion type="single" collapsible>
          {faqs.map(({ question, answer, i }) => {
            return (
              <AccordionItem value={`item-${i + 1}`} key={i}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer} </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </>
    </main>
  );
};

export default LandingPage;
