import { Button } from "./Button";

export function Hero() {
  return (
    <section className="mt-16 mb-8 sm:mb-16 space-y-12 overflow-hidden">
      <div className="-mx-[7.5vw] aspect-[820/303] bg-cover bg-[url('/assets/mobile/image-hero.png')]"></div>
      <div className="flex justify-center">
        <div className="px-9 flex flex-col gap-6 items-center text-center max-w-md">
          <h1 className="text-slate-900 font-black text-4xl">
            Group Chat for Everyone
          </h1>
          <p className="font-medium text-slate-600">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button color="cyan">
              Download <span className="text-cyan-300">v1.3</span>
            </Button>
            <Button color="purple">What is it?</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
