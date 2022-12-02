import { css } from 'styled-components';

export const small = (props) => {
	return css`
		@media only screen and (max-width: 425px) {
			${props}
		}
	`;
};

export const medium = (props) => {
	return css`
		@media only screen and (min-width: 426px) and (max-width: 768px) {
			${props}
		}
	`;
};

export const large = (props) => {
	return css`
		@media only screen and (min-width: 769px) and (max-width: 1024px) {
			${props}
		}
	`;
};
export const navbar = (props) => {
	return css`
		@media only screen and (min-width: 768px) {
			${props}
		}
	`;
};

export const xlarge = (props) => {
	return css`
		@media only screen and (min-width: 1025px) and (max-width: 1440px) {
			${props}
		}
	`;
};

export const xxlarge = (props) => {
	return css`
		@media only screen and (min-width: 1441px) {
			${props}
		}
	`;
};
