"use client";

import { useState } from "react";

import { Color, Size } from "@/types";
import Button from "@/components/ui/Button";
import { LuPlus, LuX } from "react-icons/lu";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/IconButton";
import Filter from "./filter";

interface MobileFiltersProps {
	sizes: Size[];
	colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
	const [open, setOpen] = useState(false);

	const openHandler = () => setOpen(true);
	const closeHandler = () => setOpen(false);

	return (
		<>
			<Button
				onClick={openHandler}
				className="flex items-center gap-x-2 lg:hidden"
			>
				Filters
				<LuPlus size={20} />
			</Button>

			<Dialog
				open={open}
				onClose={closeHandler}
				className="fixed inset-0 overflow-y-auto"
			>
				{/* Background */}
				<div className="fixed inset-0 bg-black bg-opacity-25" />
				{/* Dialog position */}
				<div className="flex inset-0 z-40 fixed ">
					<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
						{/* Close Button */}
						<div className="flex items-center justify-end px-4">
							<IconButton
								icon={<LuX size={15} onClick={closeHandler} />}
							/>
						</div>
						{/* Render Filters */}
						<div className="p-4">
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
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
};

export default MobileFilters;
