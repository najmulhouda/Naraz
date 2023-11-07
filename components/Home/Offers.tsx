import React from "react";
import { baseUrl } from '@/config/appConfig';

const Offers = () => {
    return (
        <div className="container">
            <div className="row grid grid-cols-2 gap-6">
                {/* Col 1 */}
                <div className="col bg-amber-300/20 flex justify-between items-center px-10 group">
                    {/* Inner Col 1 */}
                    <div className="space-y-5 basis-1/2">
                        <div>
                            <h3 className="font-bold text-lg text-amber-500">30% off</h3>
                            <h2 className="text-primary font-bold text-lg">Free Shipping</h2>
                            <p className="text-paragraph text-lg">Attractive Natural Furniture</p>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="text-white rounded-md px-6 py-2 font-medium bg-gradient-to-r from-accentOne to-accentTwo"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                    {/* Inner Col 2 */}
                    <div className="basis-1/2 group-hover:scale-105 transition duration-500">
                        <img src="images/product/sofa1.png" alt="" />
                    </div>
                </div>
                {/* Col 2 */}
                <div className="col bg-red-300/20 flex justify-between items-center px-10 group">
                    {/* Inner Col 1 */}
                    <div className="space-y-5 basis-1/2">
                        <div>
                            <h3 className="font-bold text-lg text-amber-500">50% off</h3>
                            <h2 className="text-primary font-bold text-lg">Flash Sale</h2>
                            <p className="text-paragraph text-lg">Attractive Natural Furniture</p>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="text-white rounded-md px-6 py-2 font-medium bg-gradient-to-r from-accentOne to-accentTwo"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                    {/* Inner Col 2 */}
                    <div className="basis-1/2 group-hover:scale-105 transition duration-500">
                        <img src="images/product/sofa2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;