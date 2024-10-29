import { Card, CardContent } from "@/components/ui/card";
import { companies } from "@/constants/companies";

import Image from "next/image";
import Link from "next/link";

const companiesPage = () => {
  return (
    <div className="md:px-6 py-12 md:py-18 ">
      <h1 className="text-3xl font-bold  sm:text-5xl text-center mb-8">
        Explore Companies
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Explore opportunities with top-tier companies across various industries.
      </p>
      <div className="w-full justify-center flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[1400px]">
          {companies.map((company, index) => (
            <Card
              key={company.name}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 flex flex-col items-center">
                <Link
                  href={`/jobs?company=${company.name}`}
                  key={index}
                  className="bg-white p-4  flex items-center justify-center "
                >
                  <Image
                    className="image"
                    src={company.icon}
                    alt={company.name}
                    width={150}
                    height={150}
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {companies.length === 0 && (
        <div className="text-center text-muted-foreground mt-8">
          No companies found matching your search.
        </div>
      )}
    </div>
  );
};
export default companiesPage;
