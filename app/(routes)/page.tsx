import { getBillboards } from "@/actions/getBillboards";
import { getProducts } from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import ProductList from "@/components/ProductList";

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboards(
		"f770c53e-253e-46ec-b4f6-f11e5ba042dd"
	);

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Featured Products" items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
