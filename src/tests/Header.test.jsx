import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header without crashing', () => {
    render(<Header />);
});
