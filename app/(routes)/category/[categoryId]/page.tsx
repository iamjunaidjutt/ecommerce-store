import { getColors } from "@/actions/getColors";
import { getProducts } from "@/actions/getProducts";
import { getSizes } from "@/actions/getSizes";
import { getCategory } from "@/actions/getCategory";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilters from "./components/mobile-filter";

import Filter from "./components/filter";

export const revalidate = 0;

interface CategoryPageProps {
	params: {
		categoryId: string;
	};
	searchParams: {
		colorId: string;
		sizeId: string;
	};
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
	params: { categoryId },
	searchParams: { colorId, sizeId },
}) => {
	const products = await getProducts({
		categoryId,
		colorId,
		sizeId,
	});

	const sizes = await getSizes();
	const colors = await getColors();
	const category = await getCategory(categoryId);

	return (
		<div className="bg-white">
			<Container>
				<Billboard data={category.billboard} />
				<div className="px-4 sm:px-6 lg:px-8 pb-24">
					<div className="lg:grid lg:grid-cols-5 lg:gap-x-6">
						<MobileFilters sizes={sizes} colors={colors} />
						<div className="hidden lg:block">
							<Filter
								valueKey="sizeId"
								name="Size"
								data={sizes}
							/>
							<Filter
								valueKey="colorId"
								name="Color"
								data={colors}
							/>
						</div>
						<div className="lg:col-span-4 lg:mt-0">
							{products.length === 0 && <NoResults />}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{products.map((product) => (
									<ProductCard
										key={product.id}
										product={product}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CategoryPage;
