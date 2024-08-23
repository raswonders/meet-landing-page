import { Button } from "./Button";
import { VerticalIndicator } from "./VerticalIndicator";

export function FooterContent() {
  return (
    <>
      <VerticalIndicator className=" relative z-10 -mb-7">02</VerticalIndicator>
      <div className="relative py-16 px-4 lg:py-28 lg:px-40 flex flex-col items-center bg-cover bg-[url('/assets/mobile/image-footer.jpg')]">
        <div className="absolute inset-0 bg-cyan-600 opacity-90"></div>
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-white gap-6 text-center lg:text-start max-w-lg lg:max-w-full">
          <h3 className="lg:basis-1/3 text-[2rem] sm:text-4xl lg:text[2.5rem] font-black">
            Experience more together
          </h3>
          <p className="font-medium lg:basis-1/3 lg:text-lg">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Button color="purple">
            Download <span className="text-purple-300">v1.3</span>
          </Button>
        </div>
      </div>
    </>
  );
}
