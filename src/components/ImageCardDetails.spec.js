import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import endpointImagesAndDetails from '../static/endpointImagesAndDetails';
import ImageCardDetails from './ImageCardDetails';

test('this shows the Lorum Ipsom text existing', () => {
  const alejandro = endpointImagesAndDetails[0];
  render(<ImageCardDetails 
          author={alejandro.author} 
          dek={alejandro.dek} 
          hed={alejandro.hed} 
          id={alejandro.id} 
          url={alejandro.url}
        />);

  expect(screen.getAllByText('Lorum Ipsom')).toBeDefined();
});
