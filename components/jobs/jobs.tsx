import { JobDetail } from "@/types";
import { useEffect, useRef, useState } from "react";
import JobsSkeleton from "../skeletons/jobs";
import axios from "axios";
import JobTitle from "./jobTitle";
import RotatingLoader from "../rotatingLoader";
import JobDetails from "./jobDetails";
import { useSearchParams } from "next/navigation";

const Jobs = () => {
  const searchParams = useSearchParams();
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  const experience_word = searchParams.get("experience_word");
  const title = searchParams.get("search");

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
        let query = "";
        if (experience_word === "intern") {
          query += "&experience_word=intern";
        }
        if (title && title !== "") {
          query += "title=" + title;
        }
        const url = `https://jobss.up.railway.app/job_opportunities?${pagination}&${query}`;
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
      console.log(selectedJob);
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
  );
};

export default Jobs;
