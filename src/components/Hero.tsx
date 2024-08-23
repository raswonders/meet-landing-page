import { Button } from "./Button";

export function Hero() {
  return (
    <section className="pt-16 pb-8 sm:pb-16 space-y-12 lg:space-y-0 overflow-hidden lg:flex lg:justify-between lg:items-center">
      <div className="lg:hidden -mx-[7.5vw] aspect-[820/303] bg-cover bg-[url('/assets/mobile/image-hero.png')]"></div>
      <div className="hidden w-1/4 self-start -ml-[3vw] lg:block aspect-[394/303] bg-cover bg-[url('/assets/desktop/image-hero-left.png')]"></div>
      <div className="flex justify-center lg:shrink-0">
        <div className="px-9 flex flex-col gap-6 items-center text-center max-w-md lg:max-w-lg">
          <h1 className="text-slate-900 font-black text-[2.5rem] sm:text-5xl lg:text-[4rem] leading-tight">
            Group Chat for Everyone
          </h1>
          <p className="font-medium lg:text-lg text-slate-600">
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
      <div className="hidden w-1/4 self-end -mr-[3vw] lg:block aspect-[394/303] bg-cover bg-[url('/assets/desktop/image-hero-right.png')]"></div>
    </section>
  );
}
