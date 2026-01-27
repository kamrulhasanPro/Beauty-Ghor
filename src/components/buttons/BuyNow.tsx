import { ZapIcon } from 'lucide-react';
import React from 'react';

const BuyNow = () => {
    return (
        <>
         <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 duration-300 cursor-pointer flex items-center gap-1.5">
            <ZapIcon /> Buy Now
          </button>   
        </>
    );
};

export default BuyNow;