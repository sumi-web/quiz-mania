import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
	customVariant?: "primary" | "secondary";
}

const MyButton: React.FC<CustomButtonProps> = ({ customVariant, ...rest }) => {
	const variants = {
		primary: {
			bg: "primary",
			color: "white",
			px: "48px",
			py: "8px",
			_hover: {
				opacity: "0.80",
			},

			_disabled: {
				opacity: "0.5",
				cursor: "not-allowed",
			},
		},
		secondary: {
			bg: "transparent",
			color: "primary",
			px: "38px",
			py: "8px",
			border: "1px solid pink",
			borderRadius: "8px",
			_hover: {
				opacity: "0.80",
			},
		},
	};

	return (
		<Button
			variant={customVariant || "primary"}
			sx={variants[customVariant || "primary"]}
			{...rest}
		/>
	);
};

export default MyButton;
