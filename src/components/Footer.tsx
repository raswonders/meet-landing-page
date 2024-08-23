import { Button } from "./Button";
import { VerticalIndicator } from "./VerticalIndicator";

export function Footer() {
  return (
    <>
      <VerticalIndicator className="-mb-7">02</VerticalIndicator>
      <footer className="relative -z-20 py-16 px-8 flex flex-col items-center bg-cover bg-[url('/assets/mobile/image-footer.jpg')]">
        <div className="absolute -z-10 inset-0 bg-cyan-600 opacity-90"></div>
        <div className="flex flex-col items-center text-white gap-6 text-center max-w-lg">
          <h3 className="text-4xl font-black">Experience more together</h3>
          <p className="font-medium">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Button color="purple">
            Download <span className="text-purple-300">v1.3</span>
          </Button>
        </div>
      </footer>
    </>
  );
}
