import { useState } from 'react';
import Container from '@mui/material/Container';
import { SearchInput } from './components/SearchInput';
import { PhotoGrid } from './components/PhotoGrid';

function App() {
  const [query, setQuery] = useState('');
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <SearchInput value={query} onChange={setQuery} />
      <PhotoGrid query={query} />
    </Container>
  );
}

export default App;
