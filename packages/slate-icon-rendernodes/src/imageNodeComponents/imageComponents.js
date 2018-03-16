// @flow
import styled from 'styled-components';

export const ImageNodeShared = styled.div`
  display: inline-block;
  position: relative;
  
  .overlay {
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.5);
	}

	img,
	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		border: 0px;
		top: 0px;
		left: 0px;
	}
`;

export const ImageNodeInActive = ImageNodeShared.extend`
  border: 2px solid #FFF;

  .imageToolbar {
    display: none;
  }
`;

export const ImageNodeActive = ImageNodeShared.extend`
  border: 2px solid #ef6942;

  .imageToolbar {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;

    .imageToolbarItem {
      display: inline-block;
      color: #FFF;
      padding: 5px;
      margin: 2px;
      border-radius: 2px;
      background-color: #333;
    }
  }
`;
