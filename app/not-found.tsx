"use client";

const NotFound = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <p className="text-xl">404</p>
        <span className="h-full w-0.5 bg-white/20 rounded-full" />
        <h2>THIS PAGE COULD NOT BE FOUND.</h2>
      </div>
    </div>
  );
};

export default NotFound;
