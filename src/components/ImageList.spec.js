import { render, screen } from '@testing-library/react';
import endpointImagesAndDetails from '../static/endpointImagesAndDetails';
import ImageList from './ImageList';

test('on initial render, all image cards are shown on screen', () => {
  render(<ImageList images={endpointImagesAndDetails} />);

  expect(screen.getByRole('img', {
    name: /pic by Alejandro Escamilla/i,
    name: /pic by Alejandro Escamilla/i,
    name: /pic by Paul Jarvis/i,
    name: /pic by Tina Rataj/i,
    name: /pic by Lukas Budimaier/i
  })).toBeDefined();
});
