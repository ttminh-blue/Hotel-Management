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

                  <Sidebar.Collapse icon={InboxIcon} label="Manage">
                     <Sidebar.Item href="/manage/room">Room</Sidebar.Item>
                     <Sidebar.Item href="/manage/staff">Staff</Sidebar.Item>
                     <Sidebar.Item href="/manage/customer">
                        Customer
                     </Sidebar.Item>
                     <Sidebar.Item href="/manage/user">Users</Sidebar.Item>
                     <Sidebar.Item href="/manage/booking">Booking</Sidebar.Item>
                     <Sidebar.Item href="/manage/checkroom">
                        Check Room
                     </Sidebar.Item>
                  </Sidebar.Collapse>
                  <Sidebar.Item href="/delivery/form" icon={InboxStackIcon}>
                     Delivery Manage
                  </Sidebar.Item>
                  <Sidebar.Item href="/service/receipt" icon={InboxIcon}>
                     Receipt
                  </Sidebar.Item>
                  <Sidebar.Collapse icon={InboxIcon} label="User">
                     <Sidebar.Item href="/user/info">Personal</Sidebar.Item>
                     <Sidebar.Item href="/user/group">Group</Sidebar.Item>
               
                  </Sidebar.Collapse>
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
