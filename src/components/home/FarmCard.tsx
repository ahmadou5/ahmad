import React from 'react';
import { ShoppingCart, ShoppingBasket } from 'lucide-react';

interface productprops {
    productName:string;
    price: number;
    imageUrl: string;
}
[];
const FarmProductCard = ({ productName, price, imageUrl }:productprops) => {
    const sendWhatsappMessage = (product:string) => {
        const encodedMessage = encodeURIComponent(`Hello sir, Im Contacting You from Your Company Website i just saw the available Product their and i'm interested in ${product} lets talk if you have time. thank you`);
        const whatsappUrl = `https://wa.me/${+2348174082307}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };   
  return (
    <div className="lg:max-w-sm w-[96%]  ml-auto mr-auto rounded-xl overflow-hidden shadow-lg bg-black/40 bg-opacity-60 transform transition duration-500 hover:rounded-xl  ">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={imageUrl || "/api/placeholder/400/300"} alt={productName} />
        <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 m-2 rounded-full text-sm font-semibold">
          Available
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-green-700">{productName}</div>
        <p className="text-gray-700 text-base mb-4">
          Fresh from the farm to your table!
        </p>
        <div className="flex justify-between items-center">
          {/**<span className="text-xl font-bold text-green-600">${price?.toFixed(2) || 10}</span>**/}
          <button onClick={() => {
            sendWhatsappMessage(productName)
            alert('Buying')
          }
          } className="bg-green-500 hover:bg-green-600 text-white font-bold py-1.5 px-5 rounded-full transition duration-300 ease-in-out flex items-center">
            <ShoppingCart className="mr-2" size={20} />
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmProductCard;