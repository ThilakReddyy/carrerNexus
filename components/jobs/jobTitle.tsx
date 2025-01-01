import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Building2Icon, MapPinIcon, Share2Icon } from "lucide-react";
import { JobDetail } from "@/types";

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
      className={`w-full  p-4 rounded border  flex bg-white gap-2 border-blue-500 ${selected ? "border-blue-500" : "md:border-[#dadce0]"}`}
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
          <div className="flex gap-1 text-xs  font-normal justify-center">
            <MapPinIcon size={16} />
            <span className="cursor-pointer">{job?.locations[0]}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <Link href={job?.link || "/"} target="_blank">
            <Button className="text-xs w-[80px] h-[35px] ">Apply</Button>
          </Link>
          {job.expired && (
            <div className="text-red-800 opacity-90 rounded  h-6 px-2 text-center justify-center flex">
              Expired
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
