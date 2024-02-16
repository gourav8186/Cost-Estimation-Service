import Header from "../components/Header";
import Footer from "../components/Footer";
import Multistepform from "../form_components/Multistepform";

const Estimation = () => {
  return (
    <>
      <Header />
      <section className="container estimateBox my-4">
        <div className="headPart text-center py-3">
          <h1>Apple</h1>
          <h2>Select your product model</h2>
        </div>
        <div className="d-flex justify-content-center">
            <Multistepform />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Estimation;
