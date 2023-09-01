"use client";

import Image from "next/image";
import { LuExpand, LuShoppingCart } from "react-icons/lu";

import { Product } from "@/types";
import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/product/${product.id}`);
	};

	return (
		<div
			className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
			onClick={handleClick}
		>
			{/* Images and Actions */}
			<div className="aspect-square rounded-xl bg-gray-100 relative ">
				<Image
					src={product?.images[0]?.url}
					alt={product.name}
					fill
					className="rounded-md aspect-square object-cover"
				/>
				<div className="opacity-0 group-hover:opacity-100  transition absolute w-full px-6 bottom-5">
					<div className="flex gap-x-6 justify-center">
						<IconButton
							onClick={() => {}}
							icon={
								<LuExpand size={20} className="text-gray-600" />
							}
						/>
						<IconButton
							onClick={() => {}}
							icon={
								<LuShoppingCart
									size={20}
									className="text-gray-600"
								/>
							}
						/>
					</div>
				</div>
			</div>
			{/* Description */}
			<div>
				<p className="font-semibold text-lg">{product.name}</p>
				<p className="text-sm text-gray-500">
					{product.category?.name}
				</p>
			</div>
			{/* Price */}
			<div className="flex items-center justify-between">
				<Currency value={product?.price} />
			</div>
		</div>
	);
};

export default ProductCard;
