import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";

export default function Home() {
   return (
      <DefaultLayout>
         <div className="flex items-center justify-center">
            <img
               className="mt-44 h-[150px]"
               src={
                  "https://media.discordapp.net/attachments/1073606894704406578/1106058229567455293/images.png?width=551&height=142"
               }
               alt=""
            />
         </div>
      </DefaultLayout>
   );
}
