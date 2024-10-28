import { Button } from "@/components/ui/button";
import { benefitsList } from "@/constants/benefits";
import { featuresList } from "@/constants/features";

export default function features() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Discover CareerNexus Features
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the powerful tools and resources that will supercharge your
            job search and career growth.
          </p>
        </section>
        <section className="mb-16  flex justify-center">
          <div className=" max-w-[1200px]">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px]  ">
              {featuresList.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{feature.header}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-16 flex justify-center">
          <div className="max-w-[1200px]">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefitsList.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{benefit.header}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className=" flex justify-center">
          <div className="max-w-[1200px] text-center py-16 bg-primary text-primary-foreground rounded-lg w-full">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Career?
            </h2>
            <p className="text-xl mb-8">
              Join CareerNexus today and unlock a world of opportunities.
            </p>
            <Button size="lg" variant="secondary">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
