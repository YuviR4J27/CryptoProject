import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import './pagination.css'

export default function PaginationControlled({ page, handleChange }) {

    return (
        <div className='pagination'>
            <Pagination count={10} page={page} onChange={handleChange} sx={{
                color: 'var(--white)',
                "& .MuiPaginationItem-text": {
                    color: "var(--white)",
                    border: "1px solid var(--grey)"
                },
                "& .Mui-selected": {
                    backgroundColor: "var(--purple) !important",
                    color: "var(--white)",
                    borderColor: "var(--purple) !important"
                },
                "& .MuiPaginationItem-ellipsis": {
                    border: "0px solid var(--grey) !important"
                }
            }} />
        </div>
    );
}
