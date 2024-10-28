import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const Jobs = () => {
  return (
    <div className="flex ">
      <div className="m-2 p-4 w-[300px] border rounded-lg h-[calc(100vh-68px)] flex flex-col">
        <div className="py-2 border-b  text-sm flex justify-between items-center">
          <div className="font-bold text-lg">Filters</div>
          <div className="text-blue-600 font-semibold text-xs cursor-pointer">
            Clear all
          </div>
        </div>
        <div className="py-4 border-b">
          <Input
            placeholder="What do you want to do?"
            className="h-12 focus:border-blue-600 focus-visible:ring-blue-600"
            value={"Software Engineer"}
          />
        </div>
        <div className="py-4 border-b">
          <div className="">
            <div className="font-semibold text-md">Locations</div>
            <div className="border border-gray-200 px-2 rounded-full font-normal w-fit m-2 ml-0 py-1 text-[75%]">
              Hyderabad, Telangana
              <button className="pl-2">x</button>
            </div>
            <Input
              placeholder="Which location(s) do you prefer?"
              className="h-10 focus:border-blue-600 focus-visible:ring-blue-600"
              value={""}
            />
          </div>
        </div>
        <div className="py-4 border-b ">
          <div className="font-semibold text-md pb-4">Experience</div>

          <Slider min={0} max={30} step={1} className="mt-2" />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>0 years</span>
            <span>30+ years</span>
          </div>
        </div>
        <div>{/*Status live or expired*/}</div>
        <div>{/*date posted*/}</div>
        <div>{/*Full time or intern */}</div>
      </div>
      <div className="flex"></div>
    </div>
  );
};
export default Jobs;
