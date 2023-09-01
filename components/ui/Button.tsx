import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, disabled, type = "submit", ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					`w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-semibold text-white hover:opacity-75 transition`,
					className
				)}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;
