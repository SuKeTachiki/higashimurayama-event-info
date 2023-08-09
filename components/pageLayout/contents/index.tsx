import { SideBar } from "./sideBar";
import { EventInfos } from "@/components/eventInfos";

type Props = {
  mainContent: JSX.Element;
};

export function Contents(props: Props) {
  return (
    <div>
      <div className="md:flex md:mb-2">
        <div className="border-stone-500 bg-stone-200 mx-2 mt-3 md:w-full">
          {props.mainContent}
        </div>
        <div className="mx-2 mt-3 md:w-96">
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
}
