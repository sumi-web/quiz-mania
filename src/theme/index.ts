// theme.js
import "@fontsource/outfit";

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	fonts: {
		heading: "Outfit",
		body: `Outfit`,
	},
	colors: {
		transparent: "transparent",
		black: "#000",
		primary: "#B92B5D",
		bg: "#F3F3E9",
		white: "#fff",
		borderColor: "#D9D9D9",
		// ...
	},
	components: {
		Progress: {
			baseStyle: {
				filledTrack: {
					bg: "#B92B5D",
				},
			},
		},
		Checkbox: {
			baseStyle: {
				filledTrack: {
					bg: "#B92B5D",
				},
			},
		},
	},
});
