"use client";

import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./IconButton";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
	if (!open) return null;

	return (
		<>
			<Transition show={open} appear as={Fragment}>
				<Dialog
					as="div"
					className={cn("relative z-10")}
					onClose={onClose}
				>
					<div className="fixed inset-0 bg-black bg-opacity-50" />
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
									<div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 mt:p-6 lg:p-8">
										<div className="absolute right-4 top-4">
											<IconButton onClick={open} />
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
