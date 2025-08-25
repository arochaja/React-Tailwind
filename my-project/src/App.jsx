import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./components/constant.js";
import { NewArrivalsSection } from "./components/NewArrivalsSection.jsx";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";
import { Cart } from "./components/Cart.jsx";
import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect } from "react";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe)=> {
  return {
    product : shoe,
    qty : 1,
    size : 44
  };
});

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[1]);
  const [cartItems, setCartItems] = useState([]);
  console.log('***', cartItems)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if(isDarkMode === "true"){
      window.document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains('dark')
    );
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(item => item.product.id === productId);
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    if(qty && size){
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id)
      if(existingItemIndex >-1){
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      }else{
        updatedCartItems.push({product, qty, size});
      }
     setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart}/>
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe}/>
      <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
      <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button onClick={toggleDarkMode} className="shadow-lg bg-night-50 dark:text-night-50 rounded-full px-4 py-2 text-white dark:bg-white dark:text-night">
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
        
      </div>
    </div>
  );
}

export default App;