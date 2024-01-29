
import Hero from "./_components/Hero";
import Goals from "./_components/Goals";
import Membership from "./_components/Membership";
import Document from "./_components/Document";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="dark:bg-black" >
      <Hero/>
      <Goals/>
      <Document/>
      <Membership/>
      <Footer/>
    </main>
  );
}
