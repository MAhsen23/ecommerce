import Image from "next/image";
import RatingStars from "../ratingstars/RatingStars";
import { ShoppingCart } from "lucide-react";

const ProductCard = (props: any) => {
    return (
        <div>
            <div className={`relative w-full ${props.ratio === 'square' ? 'pt-[100%]' : 'pt-[120%]'} group`}>
                <Image
                    src={props.product.image}
                    alt={props.product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
                <button className="bg-primary text-sm absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white py-3 px-4 rounded-md flex items-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                </button>
            </div>
            <div className="py-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{props.product.name}</h3>
                <p className="text-primary font-semibold mb-2">Rs {props.product.price.toFixed(2)}</p>
                <RatingStars rating={props.product.rating} />
            </div>
        </div >
    );
};
export default ProductCard;