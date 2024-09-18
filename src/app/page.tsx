import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Service from "@/components/Services/Service";
 
export default function Home() {
  return (
    <div className="w-full">
      <title>ZenCode/Home</title>
      <Navbar />
      <main className="md:w-4/6 w-11/12 mx-auto container">
        <Hero />
         <Service/>
      </main>
    </div>
  );
}
