import { Skeleton } from "../ui/skeleton";

const JobTitleSkeleton = () => {
  return (
    <div className="rounded md:cursor-pointer mb-4 bg-white dark:bg-gray-900 border border-[#dadce0] p-4 gap-6 flex flex-col">
      <div className="flex text-sm justify-between font-medium">
        <Skeleton className="h-6 w-[250px]" />
        <div>
          <Skeleton className="h-6 w-[20px]" />
        </div>
      </div>
      <div className="flex items-center gap-10 mr-4">
        <div className="flex gap-2 text-xs font-normal justify-center">
          <Skeleton className="h-6 w-[20px]" />
          <Skeleton className="h-6 w-[100px]" />
        </div>
        <div className="flex gap-1 text-xs font-normal justify-center">
          <Skeleton className="h-6 w-[20px]" />
          <Skeleton className="h-6 w-[100px]" />
        </div>
      </div>
      <div className="text-xs flex">
        <Skeleton className="w-[120px] h-[35px]" />
      </div>
    </div>
  );
};

const JobDetailSkeleton = () => {
  return (
    <div className="hidden lg:block  flex-grow mx-4 overflow-y-auto h-[79.5vh] mt-4">
      <div className="pb-2 rounded-b border-t-4 border-blue-500 dark:bg-gray-900  w-full bg-gray-100 ">
        <div className="m-8 flex">
          <div className="border-gray-500 dark:bg-gray-900 border  h-fit  bg-white p-4 w-fit rounded">
            <Skeleton className="h-20 w-20" />
          </div>
          <div className="text-lg font-medium mx-8 flex items-center">
            <div>
              <Skeleton className="h-6 w-[450px] py-4 my-2" />
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
                <Skeleton className="h-6 w-[100px] ml-2" />
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
                <div className="pl-1 text-sm lg:pl-2 flex">
                  <Skeleton className="h-6 w-[250px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-500 pr-4 pt-2 flex justify-end w-full">
          <Skeleton className="h-10 w-[250px]" />
        </div>
      </div>
      <div className=" my-1">
        <div className=" p-8 rounded-b my-1 dark:bg-gray-900 rounded  w-full bg-gray-100 ">
          <div>
            <div>
              <Skeleton className="h-8 w-[130px]" />
              <ul className="list-disc pl-8 pt-2">
                {Array.from({ length: 4 }, (_, index) => (
                  <Skeleton className="h-6 w-full my-2" key={index} />
                ))}
                <Skeleton className="h-6 w-[50%] my-2" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-1">
        <div className=" p-8 rounded-b my-1 dark:bg-gray-900 rounded  w-full bg-gray-100 ">
          <div>
            <div>
              <Skeleton className="h-8 w-[190px]" />
              <ul className="list-disc pl-8 pt-2">
                <Skeleton className="h-6 w-full my-2" />
                <Skeleton className="h-6 w-[30%] my-2 mb-4" />
                <Skeleton className="h-6 w-full my-2" />
                <Skeleton className="h-6 w-full my-2" />
                <Skeleton className="h-6 w-[60%] my-2 mb-4" />
                <Skeleton className="h-6 w-full my-2" />
                <Skeleton className="h-6 w-[15%] my-2 mb-4" />
                <Skeleton className="h-6 w-full my-2" />
                <Skeleton className="h-6 w-[50%] my-2" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobsSkeleton = () => {
  return (
    <div className="flex">
      <div className="flex  w-full">
        <div className="  rounded bg-gray-50  m-2  p-2 pr-0 w-full md:w-[400px]  h-[84vh] flex flex-col gap-4 ">
          <div className="overflow-y-auto gap-4 flex flex-col pr-2">
            {Array.from({ length: 10 }, (_, index) => (
              <JobTitleSkeleton key={index} />
            ))}
          </div>
        </div>
        <JobDetailSkeleton />
      </div>
    </div>
  );
};

export default JobsSkeleton;
