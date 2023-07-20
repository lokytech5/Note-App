import React from 'react';
import { render } from '@testing-library/react';
import CreateArea from '../components/CreateArea';

test('renders CreateArea without crashing', () => {
    render(<CreateArea />);
});
