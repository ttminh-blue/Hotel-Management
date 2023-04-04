import { Sidebar } from "flowbite-react";
import {
   ArrowRightIcon,
   ChartPieIcon,
   InboxIcon,
   InboxStackIcon,
   RectangleStackIcon,
   ShoppingBagIcon,
   SignalIcon,
   UserIcon,
   ViewColumnsIcon,
   WalletIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const SidebarCustom = (props: Props) => {
   return (
      <div className="w-fit ">
         <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
               <Sidebar.ItemGroup>
                  <Sidebar.Item href="/" icon={ChartPieIcon}>
                     Dashboard
                  </Sidebar.Item>

                  <Sidebar.Item href="/delivery/form" icon={InboxStackIcon}>
                     Delivery
                  </Sidebar.Item>
                  <Sidebar.Item href="/service/receipt" icon={InboxIcon}>
                     Receipt
                  </Sidebar.Item>
                  <Sidebar.Item href="/user/info" icon={UserIcon}>
                     Users
                  </Sidebar.Item>
                  <Sidebar.Item href="/clean/form" icon={RectangleStackIcon}>
                     Cleanning
                  </Sidebar.Item>
               </Sidebar.ItemGroup>
            </Sidebar.Items>
         </Sidebar>
      </div>
   );
};

export default SidebarCustom;
