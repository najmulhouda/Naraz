import { BsChevronRight, BsFillHouseDoorFill } from "react-icons/bs";

const Breadcrumb = () => {
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col space-x-2 flex items-center">
              <div>
                <a href="index.html" className="text-accentOne text-['100px']">
                  <BsFillHouseDoorFill />
                </a>
              </div>
              <div className="fa-solid fa-chevron-right text-paragraph">
                <BsChevronRight />
              </div>
              <div>
                <a href="shop.html">Shop</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
