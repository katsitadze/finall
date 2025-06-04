import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchPhotos } from "../hooks/useSearchPhotos";
import { Box, Container } from "@mui/material";
import SearchSection from "./homepage/SearchSection";
import ResultsSection from "./homepage/ResultsSection";


const HomePage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showInput, setShowInput] = useState(false);

  const debouncedQuery = useDebounce(query || 'nature', 500);
  const { data, isLoading } = useSearchPhotos(debouncedQuery, page);

  const handleSearch = (val: string) => {
    setQuery(val);
    setPage(1);
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(86, 110, 79)', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <SearchSection
          query={query}
          onSearch={handleSearch}
          showInput={showInput}
          toggleInput={() => setShowInput((prev) => !prev)}
        />
        <ResultsSection
          data={data}
          isLoading={isLoading}
          page={page}
          onPageChange={setPage}
        />
      </Container>
    </Box>
  )
}

export default  HomePage
