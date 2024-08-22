import { Button } from "./Button";

export function Hero() {
  return (
    <section className="my-16 mx-9 flex flex-col items-center">
      <img src="/assets/mobile/image-hero.png" alt="" className="-mx-4" />
      <div>
        <h1>Group Chat for Everyone</h1>
        <p className="">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <Button color="cyan">Download v1.3</Button>
        <Button color="purple">What is it?</Button>
      </div>
    </section>
  );
}
