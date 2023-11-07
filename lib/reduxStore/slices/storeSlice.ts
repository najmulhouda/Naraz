import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface StoreState {
    loading: boolean,
    cartList: any
}


const initialState: StoreState = {
    loading: false,
    cartList: {
        list: [],
        count: 0,
    },
}

export const storeSlice = createSlice({
    name: 'storeSlice',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loading = action.payload
        },

        setAddCart: (state, action) => {
            const product = action.payload;
            console.log('action product', product);
            // @ts-ignore
            const existCartProduct = JSON.parse(localStorage.getItem("cartData")) ?? [];
            if (existCartProduct.length >= 0) {
                const index = 0;

                let exist_product = existCartProduct.find(
                    (item: { product_id: string }, index: number) => {
                        index = index;
                        return item.product_id == product._id;
                    }
                );

                if (exist_product) {
                    let newCartProducts: any = [];
                    let cartProduct: any;
                    existCartProduct.forEach((item: any) => {
                        if (item.product_id == product._id) {
                            cartProduct = {
                                user_id: product.user_id,
                                product_id: product?._id,
                                product_title: product?.title,
                                product_slug: product?.slug,
                                product_images: product?.images,
                                category_id: product?.category,
                                quantity: Number(item.quantity + product?.quantity),
                                product_price: Number(product?.price),
                                total_price: Number((product?.price) * (item.quantity + product?.quantity)),
                            };
                            newCartProducts.push(cartProduct);
                        } else {
                            cartProduct = item;
                            newCartProducts.push(item);
                        }
                    });

                    localStorage.removeItem("cartData");
                    localStorage.setItem("cartData", JSON.stringify(newCartProducts));
                } else {
                    existCartProduct.push({
                        user_id: product.user_id,
                        product_id: product?._id,
                        product_title: product?.title,
                        product_slug: product?.slug,
                        product_images: product?.images,
                        category_id: product?.category,
                        quantity: Number(product.quantity),
                        product_price: Number(product?.price),
                        total_price: Number(product?.price * product.quantity),
                    });
                    localStorage.setItem("cartData", JSON.stringify(existCartProduct));
                }
            }

            //@ts-ignore
            const cartData = JSON.parse(localStorage.getItem("cartData"));

            state.cartList = {
                ...state.cartList,
                list: cartData,
                count: cartData.length ?? 0,
            }
        },

        setCartList: (state) => {
            //@ts-ignore
            const cartData = JSON.parse(localStorage.getItem("cartData"));
            state.cartList = {
                ...state.cartList,
                list: cartData == null ? [] : cartData,
                count: cartData == null ? 0 : cartData.length ?? 0,
            }
        },

        setCartDelete: (state, action) => {
            const product_id = action.payload;

            // @ts-ignore
            const existCartProduct = JSON.parse(localStorage.getItem("cartData")) ?? [];

            if (existCartProduct.length >= 0) {
                const index = 0;
                const newProduct = existCartProduct.filter((item: any) => item.product_id !== product_id);
                localStorage.removeItem("cartData");
                localStorage.setItem("cartData", JSON.stringify(newProduct));
            }

            //@ts-ignore
            const cartData = JSON.parse(localStorage.getItem("cartData"));
            state.cartList = {
                ...state.cartList,
                list: cartData == null ? [] : cartData,
                count: cartData == null ? 0 : cartData.length ?? 0,
            }
        },
        setNewQuantity: (state, action) => {
            const { product_id, quantity, price } = action.payload;

            // @ts-ignore
            let existCartProduct = JSON.parse(localStorage.getItem("cartData")) ?? [];
            if (existCartProduct.length >= 0) {
                const new_quantity = Number(quantity);

                let exist_product = [];

                existCartProduct.forEach((element: any, index: any) => {
                    if (element.product_id == product_id) {
                        exist_product = existCartProduct.find((item: { product_id: any }, index: any) => {
                            index = index;
                            return item.product_id == product_id;
                        });
                        if (exist_product) {
                            exist_product.quantity = new_quantity;
                            exist_product.total_price = Number(new_quantity * price);
                            existCartProduct[index] = exist_product;
                        }
                    } else {
                        existCartProduct[index] = element;
                    }
                });

                localStorage.setItem("cartData", JSON.stringify(existCartProduct));
            }

            //@ts-ignore
            const cartData = JSON.parse(localStorage.getItem("cartData"));
            state.cartList = {
                ...state.cartList,
                list: cartData == null ? [] : cartData,
                count: cartData == null ? 0 : cartData.length ?? 0,
            }
        },
    },
})

export const { setLoader, setCartList, setAddCart, setCartDelete, setNewQuantity } = storeSlice.actions

export default storeSlice.reducer;