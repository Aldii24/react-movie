import { Pagination, Stack } from "@mui/material";

const PaginationMovie = ({ page, setPage }) => {
  const handleChange = (event, page) => {
    event.preventDefault();
    setPage(page);
  };

  return (
    <div className="flex justify-center pt-4 pb-8">
      <Stack spacing={2}>
        <Pagination
          count={500}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": { color: "white" }, // Warna teks tombol
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#1E293B",
              color: "white",
            }, // Halaman aktif
            "& .MuiPaginationItem-ellipsis": { color: "gray" }, // Tanda "..." untuk halaman yang tersembunyi
            "& .MuiPaginationItem-root:hover": { backgroundColor: "#374151" }, // Hover efek
          }}
        />
      </Stack>
    </div>
  );
};

export default PaginationMovie;
