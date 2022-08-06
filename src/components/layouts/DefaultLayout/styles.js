import styled from 'styled-components';

export const LayoutContainer = styled.div `
	width: 100vw;
	max-width: 100vw;
	/* height: 100vh; */
	/* min-height: 100vh; */
  overflow: hidden;
	background-color: var(--gray-500);
`;

export const ContentContainer = styled.div `
	width: 100%;
	max-width: 1280px;
	height: calc(100% - 70px);
	padding: 1rem;
	margin: 0 auto;
`;
