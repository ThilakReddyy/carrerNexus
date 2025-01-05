import { JobDetail } from "@/types";
import { useEffect, useRef, useState } from "react";
import JobsSkeleton from "../skeletons/jobs";
import axios from "axios";
import JobTitle from "./jobTitle";
import RotatingLoader from "../rotatingLoader";
import JobDetails from "./jobDetails";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Jobs = () => {
  const searchParams = useSearchParams();
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  const experience_word = searchParams.get("experience_word");
  const title = searchParams.get("search");
  const company = searchParams.get("company");

  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<JobDetail[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedJob, setSelectedJob] = useState<JobDetail | null>();

  const handleSelectedJob = (job: JobDetail) => {
    setSelectedJob(job);
  };

  useEffect(() => {
    const loader = async () => {
      const pageSize = "10";
      const pagination = `page=${page}&pageSize=${pageSize}`;
      try {
        let query = "&location_name=India";
        if (experience_word === "intern") {
          query += "&experience_word=intern";
        }
        if (title && title !== "") {
          query += "&title=" + title;
        }
        if (company && company !== "") {
          query += "&company=" + company;
        }
        const url = `https://jobss.up.railway.app/job_opportunities?${pagination}${query}`;
        const response = await axios.get(url);
        if (response.status === 200) {
          setJobs((prevJobs) => {
            const allJobs = [...prevJobs, ...response.data.jobs];
            const uniqueJobs = allJobs.filter(
              (job, index, self) =>
                index === self.findIndex((j) => j.job_id === job.job_id),
            );

            return uniqueJobs;
          });
          setTotalPages(response.data.totalPages);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    loader();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const scrollableElement = scrollableRef.current;

    const onScrollEnd = () => {
      if (page < totalPages && !isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    const handleScroll = () => {
      if (
        scrollableElement &&
        scrollableElement.scrollHeight - scrollableElement.scrollTop <=
          scrollableElement.clientHeight + 1
      ) {
        onScrollEnd();
      }
    };

    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (!selectedJob && jobs.length > 0) {
      setSelectedJob(jobs[0]);
    }
  }, [jobs, selectedJob]);

  if (!isLoading && jobs.length === 0) {
    return (
      <div className="flex justify-center items-center text-center h-[80vh]">
        No Jobs for the selected criteria
      </div>
    );
  }

  if (isLoading) {
    return <JobsSkeleton />;
  }

  return (
    <div>
      <div className=" p-2 rounded  bg-gray-50 dark:bg-gray-800 mx-2">
        <div className="h-14 dark:border-gray-700 bg-white border w-full p-2 rounded-md dark:bg-gray-900 overflow-y-none overflow-x-none scroll-smooth no-scrollbar">
          <div className="md:justify-normal justify-around lg:flex items-center grid grid-cols-3 overflow-x-none">
            <div className="flex justify-center md:px-2">
              <Select>
                <SelectTrigger className="min-w-[100px] w-fit h-8 bg-blue-500 text-white font-semibold text-xs rounded-full">
                  <SelectValue placeholder="Internship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="intern">Internship</SelectItem>
                  <SelectGroup>
                    <SelectItem value="fulltime">Full-Time</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center border-x md:px-2 ">
              <Select>
                <SelectTrigger className="w-fit min-w-[100px] h-8 text-xs rounded-full bg-transparent">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="relevance">Relavance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex  w-full">
          <div className="rounded bg-gray-50  m-2  p-2 pr-0 w-full lg:w-[400px]  h-[84vh] flex flex-col gap-4 ">
            <div className="overflow-y-auto gap-4 flex flex-col pr-2">
              <div
                className="overflow-y-auto gap-4 flex flex-col pr-2 lg:w-[380px] "
                ref={scrollableRef}
              >
                {jobs.length > 0 &&
                  jobs.map((job: JobDetail) => {
                    return (
                      <JobTitle
                        key={job.job_id}
                        job={job}
                        selected={
                          (selectedJob && job.job_id === selectedJob.job_id) ||
                          false
                        }
                        handleSelectedJob={handleSelectedJob}
                      />
                    );
                  })}
                {page <= totalPages && (
                  <div className="text-center">
                    <RotatingLoader />
                  </div>
                )}
              </div>
            </div>
          </div>
          {selectedJob && <JobDetails selectedJob={selectedJob} />}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
