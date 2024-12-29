"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { Building2Icon, MapPinIcon, Share2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

interface JobDetail {
  job_id: string;
  title: string;
  company: string;
  experience: number;
  experience_word: string;
  remote: string;
  posted_date: string; // ISO 8601 date string
  link: string;
  expired: boolean;
  locations: string[];
  abouts: string[];
  qualifications: string[];
  responsibilities: string[];
  preferredqualifications: string[];
  minqualifications: string[];
}

const JobTitle = ({
  job,
  selected,
  handleSelectedJob,
}: {
  job: JobDetail;
  selected: boolean;
  handleSelectedJob: (job: JobDetail) => void;
}) => {
  return (
    <div
      className={`w-full  p-4 rounded border  flex bg-white gap-2 ${selected ? "border-blue-500" : "border-[#dadce0]"}`}
      onClick={() => handleSelectedJob(job)}
    >
      <div className="flex flex-col gap-6 text-sm justify-between font-medium w-full ">
        <div className="flex justify-between w-full">
          <div className="cursor-pointer">{job?.title}</div>
          <div className="cursor-pointer">
            <Share2Icon size={16} />
          </div>
        </div>
        <div className="flex items-center gap-10 mr-4   ">
          <div className="flex gap-2 text-xs  font-normal justify-center cursor-pointer">
            <Building2Icon size={16} /> <span>{job?.company}</span>
          </div>
          {/* {jobDetail.locations.length > 0 && ( */}
          <div className="flex gap-1 text-xs  font-normal justify-center">
            <MapPinIcon size={16} />
            <span className="cursor-pointer">{job?.locations[0]}</span>
          </div>

          {/* )} */}
        </div>
        <div>
          <Button className="text-xs w-[80px] h-[35px] ">
            <Link href={job?.link || "/"} target="_blank">
              Apply
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  const [, setSearch] = useState<string>("");
  const [jobs, setJobs] = useState<JobDetail[]>([]);
  const searchParams = useSearchParams();
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobDetail | undefined>(
    undefined,
  );
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const handleSelectedJob = (job: JobDetail) => {
    setSelectedJob(job);
  };
  useEffect(() => {
    let searchParam = searchParams.get("search");
    if (searchParam == null || searchParam == undefined) {
      searchParam = "";
    }
    setSearch(searchParam);
  }, [searchParams]);

  useEffect(() => {
    const loader = async () => {
      const pageSize = "10";
      const pagination = "page=" + page.toString() + "&pageSize=" + pageSize;
      try {
        const url =
          "https://jobss.up.railway.app/job_opportunities?" + pagination;
        const response = await axios.get(url);
        if (response.status === 200) {
          console.log([...jobs, ...response?.data.jobs]);
          setJobs([...jobs, ...response?.data.jobs]);
          console.log(response.data.totalPages);
          setTotalPages(response.data.totalPages);
          if (response?.data.jobs.length > 0 && !selectedJob) {
            setSelectedJob(response?.data.jobs[0]);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    loader();
  }, [page]);
  useEffect(() => {
    console.log("totalPages", totalPages);
  }, [totalPages]);

  useEffect(() => {
    const scrollableElement = scrollableRef.current;

    const handleScroll = () => {
      console.log(scrollableRef);
      console.log(
        scrollableElement?.scrollHeight,
        scrollableElement?.scrollTop,
        scrollableElement?.clientHeight,
      );
      if (
        scrollableElement &&
        scrollableElement.scrollHeight - scrollableElement.scrollTop ===
          scrollableElement.clientHeight
      ) {
        onScrollEnd();
      }
    };

    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);
    }

    // Cleanup listener on unmount
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const incrementPage = () => {
    // if (page < totalPages) {
    setPage((page) => page + 1);
    // }
  };

  const onScrollEnd = () => {
    console.log("Reached the end of the scrollable element");
    incrementPage();
    // Add your logic here
  };

  return (
    <div className="flex">
      <div className="flex  w-full">
        <div className="  rounded bg-gray-50  m-2  p-2 pr-0 w-full md:w-[400px]  h-[84vh] flex flex-col gap-4 ">
          <div
            className="overflow-y-auto gap-4 flex flex-col pr-2"
            ref={scrollableRef}
          >
            {jobs.length > 0 &&
              jobs.map((job: JobDetail, index: number) => {
                return (
                  <JobTitle
                    key={index}
                    job={job}
                    selected={
                      (selectedJob && job.job_id === selectedJob.job_id) ||
                      false
                    }
                    handleSelectedJob={handleSelectedJob}
                  />
                );
              })}
          </div>
        </div>
        <div className="bg-gray-100 overflow-y-hidden rounded m-2 p-2 flex-grow"></div>
      </div>
    </div>
  );
};
export default function JobsPage() {
  return (
    <Suspense fallback={<div>Loading Jobs...</div>}>
      <Jobs />
    </Suspense>
  );
}
