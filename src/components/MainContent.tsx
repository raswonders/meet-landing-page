import { VerticalIndicator } from "./VerticalIndicator";

export function MainContent() {
  return (
    <main className="p-8 sm:pt-14 pb-16 lg:pb-[4.5rem] lg:px-40 flex flex-col items-center">
      <VerticalIndicator>01</VerticalIndicator>
      <div className="my-16 grid grid-cols-2 sm:grid-cols-4 grid-rows-2 sm:grid-rows-1 gap-4 lg:gap-5">
        <img
          src="/assets/mobile/image-woman-in-videocall.jpg"
          alt=""
          className="rounded-lg"
        />
        <img
          src="/assets/mobile/image-women-videochatting.jpg"
          alt=""
          className="rounded-lg"
        />
        <img
          src="/assets/mobile/image-men-in-meeting.jpg"
          alt=""
          className="rounded-lg"
        />
        <img
          src="/assets/mobile/image-man-texting.jpg"
          alt=""
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col items-center text-center max-w-lg lg:max-w-xl">
        <h2 className="text-cyan-600 text-xs sm:text-sm lg:text-base font-black uppercase tracking-[0.25rem] mb-4 leading-[1.1]">
          Built for modern use
        </h2>
        <h3 className="mb-8 text-[2rem] sm:text-4xl lg:text[2.5rem] font-black leading-tight">
          Smarter meetings all in one place
        </h3>
        <p className="font-medium lg:text-lg text-slate-600">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </main>
  );
}
