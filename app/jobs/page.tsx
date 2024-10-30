"use client";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Building2Icon, MapPinIcon, Share2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Jobs = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    let search = searchParams.get("search");
    if (search == null || search == undefined) {
      search = "";
    }
    setSearch(search);
  }, [searchParams]);

  return (
    <div className="flex">
      <div className="m-2 p-4 w-[300px] border rounded-lg h-[calc(100vh-68px)] flex flex-col bg-white hidden">
        <div className="py-2 border-b  text-sm flex justify-between items-center">
          <div className="font-bold text-lg">Filters</div>
          <div className="text-blue-600 font-semibold text-xs cursor-pointer">
            Clear all
          </div>
        </div>

        <div className="py-4 ">
          <Input
            placeholder="What do you want to do?"
            className="h-12 focus:border-blue-600 focus-visible:ring-blue-600"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
        <Separator />
        <div className="py-4">
          <div className="">
            <div className="font-semibold text-md">Locations</div>
            <div className="border border-gray-200 px-2 rounded-full font-normal w-fit m-2 ml-0 py-1 text-[75%]">
              Hyderabad, Telangana
              <button className="pl-2">x</button>
            </div>
            <Input
              onChange={() => {}}
              placeholder="Which location(s) do you prefer?"
              className="h-10 focus:border-blue-600 focus-visible:ring-blue-600"
              value={""}
            />
          </div>
        </div>

        <Separator />
        <div className="py-4">
          <div className="font-semibold text-md pb-4">Experience</div>

          <Slider min={0} max={30} step={1} className="mt-2" />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>0 years</span>
            <span>30+ years</span>
          </div>
        </div>
        <div></div>
        <div>{/*Status live or expired*/}</div>
        <div>{/*date posted*/}</div>
        <div>{/*Full time or intern */}</div>
      </div>
      <div className="flex w-full">
        <div className="overflow-y-auto  rounded bg-gray-50  m-2 p-2 w-full md:w-[400px]  h-[91vh] flex flex-col gap-4">
          <div className="w-full  p-4 rounded border border-[#dadce0] flex bg-white gap-2">
            <div className="flex flex-col gap-6 text-sm justify-between font-medium w-full ">
              <div className="flex justify-between w-full">
                <div>Product Management II</div>
                <div className="cursor-pointer">
                  <Share2Icon size={16} />
                </div>
              </div>
              <div className="flex items-center gap-10 mr-4   ">
                <div className="flex gap-2 text-xs  font-normal justify-center">
                  <Building2Icon size={16} /> <span>Google</span>
                </div>
                {/* {jobDetail.locations.length > 0 && ( */}
                <div className="flex gap-1 text-xs  font-normal justify-center">
                  <MapPinIcon size={16} />
                  <span>Hyderabad,India</span>
                </div>

                {/* )} */}
              </div>
              <div>
                <Button className="text-xs w-[80px] h-[35px] ">
                  <Link href="/" target="_blank">
                    Apply
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full  p-4 rounded border border-[#dadce0] flex bg-white gap-2">
            <div className="flex flex-col gap-6 text-sm justify-between font-medium w-full ">
              <div className="flex justify-between w-full">
                <div>Product Management II</div>
                <div className="cursor-pointer">
                  <Share2Icon size={16} />
                </div>
              </div>
              <div className="flex items-center gap-10 mr-4   ">
                <div className="flex gap-2 text-xs  font-normal justify-center">
                  <Building2Icon size={16} /> <span>Google</span>
                </div>
                {/* {jobDetail.locations.length > 0 && ( */}
                <div className="flex gap-1 text-xs  font-normal justify-center">
                  <MapPinIcon size={16} />
                  <span>Hyderabad,India</span>
                </div>

                {/* )} */}
              </div>
              <div>
                <Button className="text-xs w-[80px] h-[35px] ">
                  <Link href="/" target="_blank">
                    Apply
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
