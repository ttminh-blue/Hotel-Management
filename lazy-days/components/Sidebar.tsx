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
                     <Sidebar.Item href="/user/listBookRoom">Waiting List</Sidebar.Item>
                     <Sidebar.Item href="/user/travel">Travel Company</Sidebar.Item>
                  </Sidebar.Collapse>

                  <Sidebar.Collapse icon={UserIcon} label="Bellman">
                     <Sidebar.Item href="/bellman/assignment_rooms">
                        Assignment Rooms
                     </Sidebar.Item>
                     <Sidebar.Item href="/bellman/baggage_forms">
                        Baggage Forms
                     </Sidebar.Item>
                  </Sidebar.Collapse>
                  <Sidebar.Item href="/clean" icon={RectangleStackIcon}>
                     Cleanning
                  </Sidebar.Item>
                  <Sidebar.Collapse icon={UserIcon} label="List registration">
                     <Sidebar.Item href="/service/listHotelService">
                        Hotel service 
                     </Sidebar.Item>
                     <Sidebar.Item href="/service/listTour">
                        Tour 
                     </Sidebar.Item>
                  </Sidebar.Collapse>
               </Sidebar.ItemGroup>
            </Sidebar.Items>
         </Sidebar>
      </div>
   );
};

export default SidebarCustom;
