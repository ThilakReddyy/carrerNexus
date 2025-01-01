import { JobDetail } from "@/types";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { Button } from "../ui/button";

const JobDetails = ({ selectedJob }: { selectedJob: JobDetail }) => {
  console.log(selectedJob);

  return (
    <div className="hidden lg:block  flex-grow mx-4 overflow-y-auto  h-[83vh] mt-4 max-w-[70%]">
      <div className="pb-2 rounded-b border-t-4 border-blue-500 dark:bg-gray-900  w-full bg-gray-100 ">
        <div className="m-8 flex">
          <div className="border-gray-500 dark:bg-gray-900 border  h-fit  bg-white p-4 w-fit rounded">
            <Skeleton className="h-20 w-20" />
          </div>
          <div className="text-lg font-medium mx-8 flex items-center">
            <div>
              <div>{selectedJob.title}</div>
              <div className="flex items-center my-1 justify-start w-full font-light text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-building-2"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>

                <div className="text-sm font-normal ml-2">
                  {selectedJob.company}
                </div>
              </div>
              <div className="flex items-center my-2 justify-start w-full font-light text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="pl-1 text-sm lg:pl-2 flex max-w-xl">
                  {selectedJob.locations.slice(0, 3).map((location: string) => {
                    return <span key={location}>{location};</span>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-500 pr-4 pt-2 flex justify-end w-full">
          <Link href={selectedJob.link} target="_blank">
            <Button className="w-[180px]">Apply</Button>
          </Link>
        </div>
      </div>
      <div className=" my-1">
        <div className=" p-8 rounded-b my-1 dark:bg-gray-900 rounded  w-full bg-gray-100 ">
          {selectedJob.qualifications.length !== 0 && (
            <div>
              <div>
                <div className="font-semibold  text-lg">Qualifications:</div>
                <ul className="list-disc pl-8 pt-2">
                  {selectedJob.qualifications.map((qualification: string) => {
                    return <li key={qualification}>{qualification}</li>;
                  })}
                </ul>
              </div>
            </div>
          )}
          {selectedJob.minqualifications.length !== 0 && (
            <div>
              <div className="font-semibold  text-lg">
                Minimum qualifications:
              </div>
              <ul className="list-disc pl-8 pt-2">
                {selectedJob.minqualifications.map((qualification: string) => {
                  return <li key={qualification}>{qualification}</li>;
                })}
              </ul>
            </div>
          )}
          {selectedJob.preferredqualifications.length !== 0 && (
            <div>
              <div className="font-semibold  text-lg pt-4">
                Preferred qualifications:
              </div>
              <ul className="list-disc pl-8 pt-2">
                {selectedJob.preferredqualifications.map(
                  (qualification: string) => {
                    return <li key={qualification}>{qualification}</li>;
                  },
                )}
              </ul>
            </div>
          )}
        </div>
        <div className=" p-8 pt-4 rounded-b my-1 dark:bg-gray-900 rounded  w-full bg-gray-100 ">
          <div className="font-semibold  text-lg">Responsibilities</div>
          <ul className=" pl-8 pt-1 list-disc">
            {selectedJob.responsibilities.map((responsibility: string) => {
              return <li key={responsibility}>{responsibility}</li>;
            })}
          </ul>
        </div>
        <div className=" p-8 rounded-b my-1 dark:bg-gray-900 rounded  w-full bg-gray-100 ">
          <div className="font-semibold  text-lg"> About the job:</div>
          <ul className=" pl-4 pt-1">
            {selectedJob.abouts.map((qualification: string) => {
              return (
                <li
                  key={qualification}
                  className="pt-2"
                  dangerouslySetInnerHTML={{ __html: qualification }}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
