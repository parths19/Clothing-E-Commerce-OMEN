import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please Select Product Size");
            return;
        }
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add',{itemId, size}, {headers: {token}})
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                }
                catch(error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update',{itemId, size,quantity}, {headers: {token}})
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

        
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id == items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }

        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            if (!backendUrl) {
                toast.error('Backend URL not configured (VITE_BACKEND_URL).');
                console.error('VITE_BACKEND_URL is not set');
                return;
            }
            console.log('Fetching products from:', backendUrl + '/api/product/list');
            
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getUserCart = async(tok = token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers: {token: tok}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    },[])

    // Restore cart from localStorage for non-authenticated users
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedCart = localStorage.getItem('cartItems');
        if (!storedToken && storedCart) {
            try {
                const parsed = JSON.parse(storedCart);
                setCartItems(parsed);
            }
            catch (error) {
                console.error('Failed to parse stored cartItems:', error);
            }
        }
        // If there's a stored token, set it so the other effect runs and fetches server cart
        if (storedToken && !token) {
            setToken(storedToken)
        }
    }, [])

    // Persist cart to localStorage so it survives page refreshes
    useEffect(() => {
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        catch (error) {
            console.error('Failed to save cartItems to localStorage:', error);
        }
    }, [cartItems])

    // When token becomes available, fetch server cart and optionally merge local guest cart
    useEffect(() => { 
        const mergeLocalCartToServer = async(tok) => {
            const storedCart = localStorage.getItem('cartItems');
            if (!storedCart) return;
            try {
                const parsed = JSON.parse(storedCart);
                // For each itemId and size, call update endpoint to set quantity on server
                for (const itemId in parsed) {
                    for (const size in parsed[itemId]) {
                        const quantity = parsed[itemId][size];
                        try {
                            await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token: tok } })
                        } catch (err) {
                            console.error('Failed to merge item', itemId, size, err.message)
                        }
                    }
                }
                // After merging, remove local guest cart
                localStorage.removeItem('cartItems')
            } catch (err) {
                console.error('Failed to parse stored cart for merge:', err)
            }
        }

        if (token) {
            // ensure token in localStorage
            try { localStorage.setItem('token', token) } catch (e) {}
            // first fetch server cart
            getUserCart(token)
            // then merge any local cart into server
            mergeLocalCartToServer(token)
        }
    }, [token])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart()
        }
    },[])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        addToCart, cartItems, getCartCount, setCartItems, 
        updateQuantity, getCartAmount, navigate,
        backendUrl,setToken,token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
} 

export default ShopContextProvider;
