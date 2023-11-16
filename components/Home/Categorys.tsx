import { baseUrl } from "@/config/appConfig";

const Categorys = () => {
  return (
    <div className="container">
      <h2 className="text-primary font-semibold text-3xl uppercase pb-10">
        Shop By Category
      </h2>
      <div className="row grid grid-cols-8 gap-3">
        {/* Col 1 */}
        <div className="col h-3/5  relative overflow-hidden rounded-sm group">
          <picture>
            <img
              src={`${baseUrl}/img/category/laptop.jpg`}
              alt=""
              className="w-full h-full group-hover:scale-105 transition duration-500"
            />
          </picture>
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
          >
            laptop
          </a>
        </div>
        {/* Col 2 */}
        <div className="col h-3/5  relative overflow-hidden rounded-sm group">
          <picture>
            <img
              src={`${baseUrl}/img/category/watch.jpg`}
              alt=""
              className="w-full h-full group-hover:scale-105 transition duration-500"
            />
          </picture>
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
          >
            Watch
          </a>
        </div>
        {/* Col 3 */}
        <div className="col h-3/5  relative overflow-hidden rounded-sm group">
          <picture>
            <img
              src={`${baseUrl}/img/category/pant.jpg`}
              alt=""
              className="w-full h-full group-hover:scale-105 transition duration-500"
            />
          </picture>
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
          >
            Pant
          </a>
        </div>
        {/* sCol 4 */}
        <div className="col h-3/5  relative overflow-hidden rounded-sm group">
          <picture>
            <img
              src={`${baseUrl}/img/category/shoes.jpg`}
              alt=""
              className="w-full group-hover:scale-105 h-full transition duration-500"
            />
          </picture>
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
          >
            Shoes
          </a>
        </div>
        {/* Col 5 */}
        <div className="col h-3/5  relative overflow-hidden rounded-sm group">
          <picture>
            <img
              src={`${baseUrl}/img/category/sungale.jpg`}
              alt=""
              className="w-full h-full group-hover:scale-105 transition duration-500"
            />
          </picture>
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
          >
            Sunglasess
          </a>
        </div>
        {/* Col 6 */}
        <div className="col h-3/5  relative overflow-hidden rounded-sm group">
          <picture>
            <img
              src={`${baseUrl}/img/category/tshirt.jpg`}
              alt=""
              className="w-full h-full group-hover:scale-105 transition duration-500"
            />
          </picture>
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
          >
            T-shirt
          </a>
        </div>
        <div className="col h-3/5  relative overflow-hidden rounded-sm group">
          <picture>
            <img
              src={`${baseUrl}/img/category/phone.jpg`}
              alt=""
              className="w-full group-hover:scale-105 transition duration-500"
            />
          </picture>
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
          >
            Phone
          </a>
        </div>

        <div className="col h-3/5 relative overflow-hidden rounded-sm group">
          <picture>
            <img
              src={`${baseUrl}/img/category/lufar.jpg`}
              alt=""
              className="w-full h-full group-hover:scale-105 transition duration-500"
            />
          </picture>
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
          >
            Lufar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
