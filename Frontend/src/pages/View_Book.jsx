// src/pages/List_Book.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Table, TableBody, TableRow, CircularProgress } from "@mui/material"; // Removed unused Typography, Button, TableCell, TableHead
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { getAllBooks } from '../api';
import { format } from 'date-fns';
import DeleteBookDialog from '../components/DeleteBookDialog';

import {
  PageContainer,
  ListContentWrapper,
  ListInnerContainer,
  ListHeaderContainer,
  ListPageTitle,
  ListPageSubtitle,
  CenteredSpinnerContainer,
  ErrorDisplayBox,
  TableWrapper,
  StyledTableHead,
  StyledTableHeaderCell,
  StyledTableBodyCell,
  ActionButtonsContainer,
  TableActionButton,
  TableDeleteActionButton,
  NoDataCell,
  EmptyStateBox, // For "No books found" message
} from '../pages/styles'; // Import from ../styles

const BookList = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getAllBooks({
          title: searchKeyword,
          page: 0,
          size: 1000, // Consider pagination for very large lists
          sortBy: 'createdAt',
          direction: 'desc'
        });
        setBooks(response.content);
      } catch (err) {
        console.error("도서 목록 로딩 실패:", err);
        setError("도서 목록을 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchKeyword]);

  const handleViewDetails = (id) => {
    navigate(`/books/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/books/${id}/edit`);
  };

  const handleDelete = (id) => {
    setSelectedBookId(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteSuccess = (deletedBookId) => {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== deletedBookId));
    setDeleteDialogOpen(false);
    setSelectedBookId(null);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedBookId(null);
  };

  return (
    <PageContainer>
      <AppBar
        searchKeyword={searchKeyword}
        onSearchChange={(e) => setSearchKeyword(e.target.value)}
      />

      <ListContentWrapper>
        <ListInnerContainer>
          <ListHeaderContainer>
            <ListPageTitle variant="h4" component="h1">
              All Books
            </ListPageTitle>
            <ListPageSubtitle variant="body1">
              Manage your collection of books.
            </ListPageSubtitle>
          </ListHeaderContainer>

          {loading ? (
            <CenteredSpinnerContainer>
              <CircularProgress />
            </CenteredSpinnerContainer>
          ) : error ? (
            <ErrorDisplayBox>
              {error}
            </ErrorDisplayBox>
          ) : (
            <TableWrapper>
              <Table sx={{ minWidth: { xs: '100%', md: 1200 } }}> {/* Responsive minWidth */}
                <StyledTableHead>
                  <TableRow>
                    <StyledTableHeaderCell>Title</StyledTableHeaderCell>
                    <StyledTableHeaderCell>Category</StyledTableHeaderCell>
                    <StyledTableHeaderCell>Created At</StyledTableHeaderCell>
                    <StyledTableHeaderCell>Actions</StyledTableHeaderCell>
                  </TableRow>
                </StyledTableHead>
                <TableBody>
                  {books.length > 0 ? (
                    books.map((book) => (
                      <TableRow key={book.id} hover>
                        <StyledTableBodyCell>{book.title}</StyledTableBodyCell>
                        <StyledTableBodyCell>{book.category}</StyledTableBodyCell>
                        <StyledTableBodyCell>
                          {book.createdAt ? format(new Date(book.createdAt), 'yyyy-MM-dd HH:mm') : 'N/A'}
                        </StyledTableBodyCell>
                        <StyledTableBodyCell>
                          <ActionButtonsContainer>
                            <TableActionButton
                              size="small"
                              onClick={() => handleViewDetails(book.id)}
                            >
                              View Details
                            </TableActionButton>
                            <TableActionButton
                              size="small"
                              onClick={() => handleEdit(book.id)}
                            >
                              Edit
                            </TableActionButton>
                            <TableDeleteActionButton
                              size="small"
                              onClick={() => handleDelete(book.id)}
                            >
                              Delete
                            </TableDeleteActionButton>
                          </ActionButtonsContainer>
                        </StyledTableBodyCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <NoDataCell colSpan={4}>
                        No books found.
                      </NoDataCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableWrapper>
          )}
        </ListInnerContainer>
      </ListContentWrapper>

      <DeleteBookDialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        bookId={selectedBookId}
        onDeleteSuccess={() => handleDeleteSuccess(selectedBookId)}
      />

      <Footer />
    </PageContainer>
  );
};

export default BookList;