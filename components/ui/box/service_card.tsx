type cardProp = {
  title: string;
  decription: string;
  children: React.ReactNode;
};

export default function ServiceCard({ title, decription, children }: cardProp) {
  return (
    <div className="bg-black flex flex-col gap-2 justify-center items-center rounded-md p-2 md:p-4">
      {children}
      <div className="text-white text-center flex flex-col justify-center items-center gap-6 text-xl p-4 md:text-2xl ">
        <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        <p className="text-lg text-justify font-light text-[#9d9d9d] ">
          {decription}
        </p>
      </div>
    </div>
  );
}
