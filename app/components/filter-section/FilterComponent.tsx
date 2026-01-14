import { FiUser } from "react-icons/fi";
import FilterSection from "./FilterSection";
import { LuBuilding2 } from "react-icons/lu";
import {
  BsLayoutTextWindowReverse,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import { RiFilter3Line } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi";

const FilterComponent = () => {
  return (
    <FilterSection>
      <FilterSection.Group>
        <FilterSection.Item className="hidden md:block">
          <FilterSection.Trigger
            type="default"
            icon={
              <FilterSection.StackedIcons>
                <FilterSection.StackedIcon
                  icon={FiUser}
                  color="text-[#347FA9]"
                />
                <FilterSection.StackedIcon
                  icon={LuBuilding2}
                  color="text-[#438361]"
                  position="overlay"
                />
              </FilterSection.StackedIcons>
            }
            hasDropdown
            badge={1}
            className="bg-[#F3F4F6]"
          >
            Load Data
          </FilterSection.Trigger>
          <FilterSection.Content>
            {[
              "Load Data...",
              "Load Data...",
              "Load Data...",
              "Load Data...",
            ].map((item, idx) => (
              <FilterSection.ContentItem key={idx}>
                {item}
              </FilterSection.ContentItem>
            ))}
          </FilterSection.Content>
        </FilterSection.Item>

        <FilterSection.Divider className="hidden md:block" />

        <FilterSection.Item className="hidden md:block">
          <FilterSection.Trigger
            icon={
              <FilterSection.Icon
                icon={BsLayoutTextWindowReverse}
                className="w-3 h-3"
              />
            }
            type="dot"
            badge={""}
          >
            2000 Rows
          </FilterSection.Trigger>
        </FilterSection.Item>

        <FilterSection.Item className="hidden md:block">
          <FilterSection.Trigger
            icon={
              <FilterSection.Icon
                icon={BsReverseLayoutTextSidebarReverse}
                className="w-3 h-3"
              />
            }
            type="dot"
            badge={""}
          >
            16/20 Columns
          </FilterSection.Trigger>
        </FilterSection.Item>

        <FilterSection.Item className="hidden md:block">
          <FilterSection.Trigger
            icon={<FilterSection.Icon icon={TbArrowsSort} />}
            type="dot"
            badge={""}
          >
            Sort by
          </FilterSection.Trigger>
        </FilterSection.Item>

        <FilterSection.Item>
          <FilterSection.Trigger
            icon={<FilterSection.Icon icon={RiFilter3Line} />}
            badge={1}
          >
            Filter
          </FilterSection.Trigger>
        </FilterSection.Item>
      </FilterSection.Group>

      <FilterSection.Group>
        <FilterSection.Item className="hidden md:block">
          <FilterSection.Trigger
            hasDropdown
            className="bg-white! text-[#374151]! border-[#E5E7EB]! border"
          >
            Action
          </FilterSection.Trigger>
          <FilterSection.Content>
            <FilterSection.ContentItem>
              Actions menu...
            </FilterSection.ContentItem>
          </FilterSection.Content>
        </FilterSection.Item>

        <FilterSection.Item variant="primary">
          <FilterSection.Trigger
            hasDropdown
            className="bg-[#1F2A37]! text-white!"
            icon={<FilterSection.Icon icon={HiOutlineSparkles} />}
          >
            Enrichment
          </FilterSection.Trigger>
        </FilterSection.Item>

        <FilterSection.Item variant="primary" className="hidden md:block">
          <FilterSection.ImageButton src="/ai.svg" alt="ai" />
        </FilterSection.Item>
      </FilterSection.Group>
    </FilterSection>
  );
};

export default FilterComponent;
