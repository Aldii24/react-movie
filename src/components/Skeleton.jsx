const Skeleton = () => (
  <div className="flex flex-col justify-center gap-6 space-x-8 w-auto h-[400px] bg-gray-100/50 rounded-md p-6 animate-pulse">
    <div className="w-full h-[200px] rounded-md bg-gray-500/50"></div>
    <div className="w-full h-[20px] rounded-md bg-gray-500/50"></div>
    <div className="w-full h-[20px] rounded-md bg-gray-500/50"></div>
  </div>
);

const SkeletonMovie = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default SkeletonMovie;
