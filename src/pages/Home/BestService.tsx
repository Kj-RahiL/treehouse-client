import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import leaf from "../../assets/leaf.png";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaShippingFast } from "react-icons/fa";
const BestService = () => {
  return (
    <div className="bg-[#e6ebe8] bg-opacity-90 py-20">
      <div>
        <img src={leaf} alt="leaf" className="mx-auto w-auto lg:w-12" />
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold text-[#062810]">
          Best Service{" "}
        </h2>
      </div>
      {/*best service card card */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-10">
        <div className="card shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <MdOutlineLocalShipping className="text-8xl text-[#062810] font-medium" />
            </div>
            <h2 className="card-title text-[#062810]">Trusted Shipping</h2>
            <p>Providing trusted shipping with a refund policy.</p>
          </div>
        </div>
        <div className="card shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <FaShippingFast className="text-8xl text-[#062810]" />
            </div>
            <h2 className="card-title text-[#062810]">
              All Bangladesh Delivery
            </h2>
            <p>We allow any courier service in Bangladesh.</p>
          </div>
        </div>
        <div className="card shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <LiaHandsHelpingSolid className="text-8xl text-[#062810]" />
            </div>
            <h2 className="card-title text-[#062810]">Helpful How To</h2>
            <p>
              Dip into ‘Our Blog’ where we share our latest tips, advice, and
              upcoming trends to look out for.
            </p>
          </div>
        </div>
        <div className="card shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <MdOutlineSupportAgent className="text-8xl text-[#062810]" />
            </div>
            <h2 className="card-title text-[#062810]">All time Support</h2>
            <p>We are supporting to making any garden in your area.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestService;
