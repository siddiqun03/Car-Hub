"use client";

import {CustomButtonProps} from "@/types";
import Image from "next/image";

const CustomButton = ({
	title,
	containerStyles,
	handleClick,
	btnType,
}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
			type={btnType || "button"}
		>
			<span className="flex-1">{title}</span>
		</button>
	);
};

export default CustomButton;
