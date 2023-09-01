/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				'custom1': '1300px',
			},
			fontFamily: {
				Comic : ['Comic Neue', "cursive"],
				Grandstander : ['Grandstander', "cursive"],
				Quicksand : ['Quicksand', "sans-serif"],
			},
			backgroundSize: {
				"50p": "50%",
				"150p": "150%"
			},
			boxShadow: {
			  	innerB: "0 -20px 25px -5px rgb(0 0 0 / 0.1) inset, 0 -8px 10px -6px rgb(0 0 0 / 0.1) inset"
			},
			colors: {
				mCyan: {
					400: "#78D4D7"
				},
				mPurple: {
					400: "#C568AE",
					800: "#6e2b5d",
				},
				mYellow: {
					400: "#FED953"
				},
				mPink: {
					400: "#EB4193"
				},
				mgray : {
					50 : "#000000",
					100 : "#f1f1f1",
					200 : "#000000",
					300 : "#DDDDDD",
					400 : "#BBBBBB",
					500 : "#999999",
					600 : "#555555",
					700 : "#444444",
					800 : "#1e1e1e",
					900 : "#121212",
				},
				mblue : {
					50 : "#000000",
					100 : "#f1f1f1",
					200 : "#D7E2FF",
					300 : "#000000",
					400 : "#000000",
					500 : "#658CEE",
					600 : "#000000",
					700 : "#444444",
					800 : "#000000",
					900 : "#09215D",
				},
				mred : {
					50 : "#000000",
					100 : "#f1f1f1",
					200 : "#f6a9a2",
					300 : "#000000",
					400 : "#000000",
					500 : "#EA3323",
					600 : "#000000",
					700 : "#444444",
					800 : "#000000",
					900 : "#121212",
				},
			},
			height: {
			  	heroHeight: "35rem",
			},
			animation: {
				'bounce-slow': 'sBounce 5s ease-in-out infinite',
				'spin-slow': 'spin 3s linear infinite'
			},
			keyframes: {
				sBounce: {
					'0%, 100%': { transform: 'translateY(-5%)' },
					'50%': { transform: 'translateY(0%)' },
				}
			}
		}
	},
	plugins: [],
}
