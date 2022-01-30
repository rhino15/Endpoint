import { render, screen } from '@testing-library/react';
import endpointImagesAndDetails from '../static/endpointImagesAndDetails';
import ImageCard from './ImageCard';

test('make sure image is present', () => {
  const alejandro = endpointImagesAndDetails[0];
  render(<ImageCard author={alejandro.author} image={alejandro.image} />);
  
  expect(screen.getByRole('img', {
    name: /pic by Alejandro Escamilla/i,
  })).toBeDefined();
});
