const Heading = ({ name }: { name: string }) => {
  return (
    <h2 className="text-xl w-full text-left sm:text-2xl font-bold text-white">
      {name}
    </h2>
  );
};

export default Heading;