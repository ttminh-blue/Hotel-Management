import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
   return (
      <DefaultLayout>
         <div className="flex items-center justify-center">
            <video autoPlay muted loop width={400} controls>
               <source src={"/assets/videos/aqua-dance.mp4"} type="video/mp4" />
            </video>
         </div>
      </DefaultLayout>
   );
}
