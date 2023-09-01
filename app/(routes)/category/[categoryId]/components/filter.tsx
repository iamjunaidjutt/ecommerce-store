"use client";

import Button from "@/components/ui/Button";
import { Color, Size } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";

interface FilterProps {
	data: (Size | Color)[];
	name: string;
	valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const selectedValue = searchParams.get(valueKey);

	const handleFilter = (id: string) => {
		const current = qs.parse(searchParams.toString());
		const query = {
			...current,
			[valueKey]: id,
		};

		if (current[valueKey] === id) {
			query[valueKey] = null;
		}

		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{ skipNull: true }
		);

		router.push(url);
	};

	return (
		<div className="mb-8">
			<h3 className="text-lg font-semibold">{name}</h3>
			<hr className="my-4" />
			<div className="flex flex-wrap gap-2">
				{data.map((item) => (
					<Button
						key={item.id}
						className={`${
							selectedValue === item.id
								? "bg-gray-900 text-white"
								: "bg-gray-100 text-gray-900"
						} px-3 py-2 rounded-md text-sm font-medium`}
						onClick={() => handleFilter(item.id)}
					>
						{item.name}
					</Button>
				))}
			</div>
		</div>
	);
};

export default Filter;
