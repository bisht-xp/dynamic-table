import { AiOutlineInfoCircle } from "react-icons/ai";

const Warning = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center bg-[#C81E1E] text-white px-3 md:px-6 py-1.5 gap-y-1 md:gap-y-0 gap-x-3 md:gap-x-6">
      <div className="flex justify-center items-center gap-x-1">
        <p className="text-xs md:text-sm font-medium text-white text-center">
          <span className="hidden md:inline">
            Payment failed. 450,000 credits will permanently expire in 30 days
          </span>
          <span className="md:hidden">
            Payment failed. Credits expire in 30 days
          </span>
        </p>
        <AiOutlineInfoCircle className="w-3.5 md:w-4 md:h-4 text-white shrink-0" />
      </div>
      <button className="bg-white px-3 md:px-4 py-0.5 rounded-lg">
        <span className="text-[#374151] text-xs md:text-sm font-semibold">
          Pay Now
        </span>
      </button>
    </div>
  );
};

export default Warning;
