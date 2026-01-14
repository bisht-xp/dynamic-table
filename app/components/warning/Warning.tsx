import { AiOutlineInfoCircle } from "react-icons/ai";

const Warning = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#C81E1E] text-white px-6 py-1.5 gap-x-6">
      <div className="flex justify-content items-center gap-x-1">
        <p className="text-sm font-medium text-white">
          Payment failed. 450,000 credits will permanently expire in 30 days
        </p>
        <AiOutlineInfoCircle className="w-4 h-4 text-white" />
      </div>
      <button className="bg-white px-4 py-0.5 rounded-lg">
        <span className="text-[#374151] text-sm font-semibold">Pay Now</span>
      </button>
    </div>
  );
};

export default Warning;
