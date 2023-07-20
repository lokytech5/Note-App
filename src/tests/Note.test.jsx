import React from 'react';
import { render } from '@testing-library/react';
import Note from '../components/Note';

test('renders Note without crashing', () => {
    render(<Note title="Test Title" content="Test Content" />);
});
