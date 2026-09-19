export default function Page() {
  return (
    <div className="px-4 relative mx-auto max-w-7xl flex flex-col gap-16 mt-10">
      <div className="">
        <h3 className="font-bold text-xl">Presentation and Public Speaking in Tech</h3>
        <video controls className="w-full h-auto mt-4">
          <source src="/videos/presentation-and-public-speaking-in-tech.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}