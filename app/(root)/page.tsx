"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { featuresList } from "@/constants/features";
import Image from "next/image";
import { companies } from "@/constants/companies";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const companyName = "Carrer Nexus";
  const [input, setInput] = useState("");
  const router = useRouter(); // Initialize router
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    router.push(`/jobs?search=${encodeURIComponent(input)}`);
  };
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Your {companyName} to Top 50+ Companies
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover your dream job from a curated selection of
                opportunities at the world&apos;s leading companies, all in one
                place.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2" onSubmit={handleSearch}>
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter job title, skills, or company"
                  type="text"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <Button type="submit">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </form>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/jobs?search=Software Engineer"
                className="text-[75%] font-bold items-center p-1 px-2 cursor-pointer hover:bg-black border border-transparent rounded-full hover:text-white bg-gray-100"
              >
                Software Engineer
              </Link>
              <Link
                href="/jobs?search=Data Scientist"
                className="text-[75%] font-bold items-center p-1 px-2 cursor-pointer hover:bg-black border border-transparent rounded-full hover:text-white bg-gray-100"
              >
                Data Scientist
              </Link>
              <Link
                href="/jobs?search=Product Manager"
                className="text-[75%] font-bold items-center p-1 px-2 cursor-pointer hover:bg-black border border-transparent rounded-full hover:text-white bg-gray-100"
              >
                Product Manager
              </Link>
              <Link
                href="/jobs?experience_word=intern"
                className="text-[75%] font-bold items-center p-1 px-2 cursor-pointer hover:bg-black border border-transparent rounded-full hover:text-white bg-gray-100"
              >
                Internships
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12   flex justify-center ">
        <div className="container px-4 md:px-6 max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Why Choose {companyName}
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuresList.slice(0, 3).map((feature, index: number) => {
              return (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <feature.icon className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">{feature.header}</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href="/features" passHref>
              <Button variant="outline">
                Explore All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Featured Companies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center "
              >
                <Image
                  className="image"
                  src={company.icon}
                  alt={company.name}
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/companies" passHref>
              <Button variant="outline">
                View All Companies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
