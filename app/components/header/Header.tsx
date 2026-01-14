import { FaStar } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { PiCoinsDuotone } from "react-icons/pi";
import { TbCloudCheck } from "react-icons/tb";

const Header = () => {
  return (
    <header className="bg-white px-3 md:px-6 py-2 flex items-center justify-between">
      <div className="flex items-center justify-center gap-x-2 md:gap-x-3.5">
        <div className="w-5.5 h-5.5 rounded-md flex justify-center items-center bg-[#F3F4F6]">
          <GrHomeRounded className="w-3 h-3 text-[#374151]" />
        </div>
        <div className="flex items-center justify-center gap-x-1.5 md:gap-x-2.5">
          <FaStar className="w-3.5 h-3.5 text-[#FACA15]" />
          <p className="text-xs md:text-sm text-[#9CA3AF] font-medium truncate max-w-[150px] md:max-w-none">
            <span className="hidden md:inline">
              Workbook - Bitscale UX /UI testing flow{" "}
            </span>
            <span className="md:hidden">Bitscale</span>
            <span className="text-[#374151] text-xs md:text-sm font-medium">
              {" "}
              /{" "}
            </span>
            <span className="text-[#374151] text-xs md:text-sm font-medium">
              <span className="hidden md:inline">Bitscale grid only</span>
              <span className="md:hidden">Grid</span>
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-1.5 md:gap-x-2.5">
        <TbCloudCheck className="w-4 h-4 text-[#6B7280] hidden md:block" />
        <div className="px-2 md:px-3 py-1 md:py-1.5 flex justify-center items-center gap-x-2 md:gap-x-3 bg-[#EDF3EC] rounded-lg">
          <div className="flex items-center justify-center gap-x-1 md:gap-x-1.5 text-[#438361]">
            <PiCoinsDuotone className="w-4 md:w-5 h-4 md:h-5" />
            <span className="text-[10px] md:text-xs font-medium">500/500</span>
          </div>
          <div className="flex items-center justify-center gap-x-1.5 h-5 md:h-6 px-1.5 md:px-2 bg-[#438361] rounded-lg">
            <span className="text-[10px] md:text-xs font-medium text-white">
              Free
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
