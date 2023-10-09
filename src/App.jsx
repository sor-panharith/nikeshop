import {  Hero, CustomerReview, Footer, PopularProduct,
SpecialOffer, Subscribe, SuperQuality, Service} from "./sections";
import Navbar from "./components/Navbar";
const App = () =>(
  <main className=" relative">
    <Navbar/>
    <section className=" xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className=" padding ">
      <PopularProduct /> 
    </section>
    <section className=" padding ">
      <SuperQuality />  
    </section>
    <section className=" padding-x py-10">
      <Service/>  
    </section>
    <section className=" padding ">
      <SpecialOffer /> 
    </section>
    <section className="  bg-pale-blue padding">
      <CustomerReview/>
    </section>
    <section className=" padding-x sm:py-32 py-16 w-full">
          <Subscribe />
    </section>
    <section className=" padding-x padding-t bg-black pb-8">
<Footer/>  
  </section>
  </main>
)
export default App;