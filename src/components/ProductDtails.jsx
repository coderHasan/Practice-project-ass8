import Dtails from "./Dtails";
import Heading from "./Heading";

const ProductDtails = () => {
  return (
    <section>
      <div className="container mx-auto px-3 md:px-5">
        <div className="">
          <div className="bg-privetColor text-center pb-28 rounded-b-xl">
            <Heading
              subTitle={"Product Details"}
              desc=" Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!"
            />
            <div></div>
          </div>

          <div>
            <Dtails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDtails;
