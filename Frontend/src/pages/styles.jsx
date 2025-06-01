// src/styles.jsx
import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Button, TableHead as MuiTableHead, TableCell as MuiTableCell } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

// 전체 페이지 레이아웃을 위한 컨테이너
export const PageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'white',
  fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
  overflowX: 'hidden',
});

export const MainContentContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexGrow: 1,
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  gap: theme.spacing(5),
  minHeight: '600px', // UpdateFormContainer에서 가져온 속성
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    gap: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

// 페이지/섹션 제목 공통 스타일
export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#111418',
  fontWeight: 'bold',
  fontSize: '32px', // Base size, can be overridden by variants or specific components
  minWidth: '288px', // From AddBookPage's FormContainer context
  padding: theme.spacing(1), // General padding
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0, // Default for left-aligned titles

  // Variant for cover preview title in AddBookPage & UpdateBookPage
  '&.cover-preview-title': {
    marginBottom: theme.spacing(3),
  },
  // Variant for centered page titles (e.g., HomePage main title)
  '&.page-title': {
    textAlign: 'center',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5),
    letterSpacing: '0.02em', // 'light' was specified, this is an example value
    fontSize: '28px',
  },
  // Variant for section headings (e.g., "Featured Book" on HomePage)
  '&.section-heading': {
    letterSpacing: '-0.015em',
    paddingLeft: theme.spacing(4), // Default to left alignment if not centered
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5),
    fontSize: '22px',
  },
}));


// 입력 필드 (TextField) 공통 스타일
export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'helperTextAlignment',
})(({ theme, helperTextAlignment }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'white',
    '& fieldset': { borderColor: '#dbe0e6' },
    '&:hover fieldset': { borderColor: '#dbe0e6' },
    '&.Mui-focused fieldset': { borderColor: '#dbe0e6' },
  },
  '& .MuiInputBase-input': {
    color: '#111418',
    padding: '15px',
    fontSize: '16px',
    fontWeight: 400,
  },
  '& .MuiInputLabel-root': {
    color: '#111418',
    fontWeight: 500,
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#60758a',
    opacity: 1,
  },
  '&.MuiFormControl-root .MuiSelect-select': {
     height: '26px',
     lineHeight: '26px',
  },
  '&:not(.MuiTextField-multiline) .MuiOutlinedInput-root': {
      height: '56px',
  },
  '&.MuiTextField-root .MuiOutlinedInput-root.MuiInputBase-multiline': {
    minHeight: '160px',
  },
  '& .MuiFormHelperText-root': {
    textAlign: helperTextAlignment || 'left',
  },
}));

// --- AddBookPage 및 공통 스타일들 ---
export const FormContainer = styled(Box)(({ theme }) => ({

  flexGrow: 1, // 남은 공간을 채우도록 함
  minWidth: '300px', // 최소 너비 (UpdateLeftSection에 있었음)
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3), // 내부 입력 필드들 간의 간격
  
}));

export const InputFieldWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'end', // Usually end for text fields with helpers
  gap: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  // paddingTop & paddingBottom removed to avoid double padding if FormContainer has gap
}));

export const SubmitButtonWrapper = styled(Box)(({ theme }) => ({ // Used in AddBookPage
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const ImagePreviewContainer = styled(Box)(({ theme }) => ({ // Used in AddBookPage
  flex: 'none',
  width: '100%', // 기본 (모바일 - 세로 정렬 시)
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(5), // 세로 정렬 시 상단 마진 (UpdateLeftSection과의 간격은 부모의 gap으로 처리)
  [theme.breakpoints.up('lg')]: { // UpdateFormContainer의 flexDirection이 'row'로 바뀌는 중단점과 일치
    width: '400px', // 가로 정렬 시 고정 너비
    marginTop: 0, // 가로 정렬 시 상단 마진 없음
  },
}));

export const ApiKeyInputWrapper = styled(Box)(({ theme }) => ({ // Used in AddBookPage, UpdateBookPage
  width: '100%',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(0, 4), // Horizontal padding for the input within this wrapper
}));

export const GeneratedCoverImage = styled(Box)({ // Used in AddBookPage
  width: '100%',
  maxWidth: '400px',
  borderRadius: '12px',
  border: '1px solid #dbe0e6',
  height: 'auto',    // Auto height for aspect ratio
  aspectRatio: '9/6', // More flexible than fixed height
  objectFit: 'cover',
});

export const NoImageText = styled(Typography)({ // Used in AddBookPage
  color: '#60758a',
  fontSize: '0.875rem', // 14px
});




export const SectionHeader = styled(Box)(({ theme }) => ({ // Used in Update Page for Title + Tooltip
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  gap: theme.spacing(1),
}));

export const TooltipIcon = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  '&:hover .tooltip': {
    opacity: 1,
    pointerEvents: 'auto'
  },
  '& .icon-circle': {
    width: 20,
    height: 20,
    borderRadius: '50%',
    border: '1px solid #dbe0e6',
    backgroundColor: 'white',
    boxShadow: theme.shadows[1],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#60758a',
    '&:hover': {
      color: '#ffea00' // Example hover color, adjust if needed
    }
  }
}));

export const TooltipText = styled(Typography)({ // Keep as is from original
  position: 'absolute',
  bottom: '100%',
  marginBottom: '4px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '240px',
  borderRadius: '8px',
  backgroundColor: '#424242',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '8px',
  paddingBottom: '8px',
  fontSize: '10px',
  color: 'white',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.3s',
  textAlign: 'center',
});

export const FormFieldsContainer = styled(Box)(({ theme }) => ({ // Wraps multiple InputFieldWrapper in Update Page
  paddingTop: theme.spacing(3),
  '& > div': { // Assumes direct children are InputFieldWrappers or similar
    marginBottom: theme.spacing(3), // Spacing between fields
  },
}));

// FieldContainer, FieldLabel, InputWrapper, CharacterCount are more granular, not directly used by sx props in original files, but part of UpdateBook's structure. Kept for completeness if UpdateBook relies on them.
export const FieldContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const FieldLabel = styled(Typography)({
  fontSize: 'base', // This should map to a theme value e.g. theme.typography.pxToRem(14)
  fontWeight: 'medium', // map to theme.typography.fontWeightMedium
  textAlign: 'left',
  paddingBottom: '8px',
});

export const InputWrapper = styled(Box)({
  position: 'relative',
});

export const CharacterCount = styled(Typography)({
  position: 'absolute',
  top: 10,
  right: 12,
  fontSize: 'xs', // map to theme.typography.pxToRem(10 or 12)
  color: '#60758a',
});


export const ButtonContainer = styled(Box)(({ theme }) => ({ // For Cancel/Update buttons in Update Page
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(1.5),
}));

// 공통 버튼 스타일
export const PrimaryButton = styled(Button)(({theme}) =>({ // General primary action (e.g. Add Book)
  minWidth: 84,
  height: 40,
  borderRadius: '12px',
  backgroundColor: '#0c7ff2',
  color: 'white',
  fontWeight: theme.typography.fontWeightBold,
  letterSpacing: '0.015em',
  textTransform: 'none',
  paddingLeft: '32px',
  paddingRight: '32px',
  '&:hover': {
    backgroundColor: '#0a6ad1',
  },
  '&.Mui-disabled': { // Ensure disabled styles are consistent
    opacity: 0.5,
    backgroundColor: '#0c7ff2', // Keep color for disabled if intended
    color: 'white',
  },
}));

export const SecondaryButton = styled(Button)(({theme}) => ({ // General secondary action
  minWidth: 84,
  height: 40,
  borderRadius: '12px',
  backgroundColor: '#f0f2f5',
  color: '#111418',
  fontWeight: theme.typography.fontWeightBold,
  letterSpacing: '0.015em',
  textTransform: 'none',
  paddingLeft: '32px', // Default padding
  paddingRight: '32px', // Default padding
  '&:hover': {
    backgroundColor: '#e0e2e5',
  },
}));

// UpdateBook specific buttons (already in styles.jsx)
export const CancelButton = styled(Button)(({theme}) =>({
  height: 40,
  paddingLeft: '32px',
  paddingRight: '32px',
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: '12px',
  fontSize: theme.typography.pxToRem(14), // 'sm'
  borderColor: '#dbe0e6',
  color: '#424242',
  backgroundColor: 'white',
  textTransform: 'none', // Ensure consistency
  '&:hover': {
    backgroundColor: '#f5f5f5',
    borderColor: '#dbe0e6',
  },
}));

export const UpdateButton = styled(Button)(({theme}) =>({ // Same as PrimaryButton but used for Update action context
  height: 40,
  paddingLeft: '32px',
  paddingRight: '32px',
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: '12px',
  fontSize: theme.typography.pxToRem(14), // 'sm'
  backgroundColor: '#0c7ff2',
  color: 'white',
  textTransform: 'none', // Ensure consistency
  '&:hover': {
    backgroundColor: '#0a6ad1',
  },
  '&.Mui-disabled': {
    opacity: 0.5,
    backgroundColor: '#0c7ff2',
    color: 'white',
  },
}));

export const GenerateButton = styled(Button)(({ theme }) => ({ // For image generation
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: '#0c7ff2',
  color: 'white',
  borderRadius: '12px',
  fontWeight: '600', // Slightly different from 'bold'
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#0a6ad1',
  },
  '&.Mui-disabled': {
    opacity: 0.5,
    backgroundColor: '#0c7ff2',
    color: 'white',
  },
}));

// Cover Image styles (used in UpdateBookPage and potentially DetailPage)
export const CoverImage = styled(Box)({ // General purpose cover image
  width: '100%',
  maxWidth: '400px', // Max width constraint
  height: 'auto',    // Auto height for aspect ratio
  aspectRatio: '9/6', // Common aspect ratio, can be overridden by sx if needed for specific cases
  borderRadius: '12px',
  border: '1px solid #dbe0e6',
  objectFit: 'cover',
  display: 'block', // To prevent bottom space for img tag
});

export const NoImagePlaceholder = styled(Box)(({theme}) => ({ // For UpdateBookPage
  width: '100%',
  maxWidth: '400px',
  height: '400px', // Fixed height placeholder
  borderRadius: '12px',
  border: '1px dashed #dbe0e6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#60758a',
  fontSize: theme.typography.pxToRem(14), // 'sm'
}));


// --- HomePage Specific Styles ---
export const HomeContentWrapper = styled(Box)(({ theme }) => ({ // Replaces the main content Box in HomePage
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
}));

export const HomeInnerContainer = styled(Box)({ // Replaces the inner Box in HomePage
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '960px', // Max width for homepage content area
    width: '100%',
});

export const PageSubtitle = styled(Typography)(({ theme }) => ({ // For HomePage subtitle
    color: '#121416',
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: 'center',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
}));

// --- BookDetail Page Specific Styles ---
export const DetailContentWrapper = styled(Box)(({ theme }) => ({ // Main content wrapper for Detail Page
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
}));

export const DetailInnerContainer = styled(Box)({ // Inner container for Detail Page content
    flex: 1,
    maxWidth: '960px',
    display: 'flex',
    flexDirection: 'column',
});

export const BreadcrumbsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
}));

export const BreadcrumbLink = styled(Typography)(({ theme }) => ({
    color: '#60758a',
    fontSize: theme.typography.pxToRem(14), // base
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 'normal',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    }
}));

export const BreadcrumbText = styled(Typography)(({ theme }) => ({ // For separators and current page
    color: '#60758a', // Default for separator
    fontSize: theme.typography.pxToRem(14), // base
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 'normal',
    '&.current': {
        color: '#111418', // For current page text
    }
}));

export const DetailTitleContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: theme.spacing(3),
    padding: theme.spacing(2),
}));

export const DetailTitleWrapper = styled(Box)(({ theme }) => ({
    minWidth: '288px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
}));

export const BookShortContent = styled(Typography)(({ theme }) => ({
    color: '#60758a',
    fontSize: theme.typography.pxToRem(12), // sm
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: 'normal',
}));

export const DetailImageSectionWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export const DetailImageTextContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderRadius: '12px', // Applied to the container
    gap: theme.spacing(2), // Gap between image and text box on column layout
    [theme.breakpoints.up('xl')]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: theme.spacing(3), // Gap for row layout
    },
}));

export const DetailBookCoverImage = styled(Box)(({ theme }) => ({ // component="img" will be applied on use
    width: '100%',
    aspectRatio: '9 / 6',
    objectFit: 'cover',
    borderRadius: '12px', // Already on DetailImageTextContainer, but can be here too for the img itself
    display: 'block',
    [theme.breakpoints.up('xl')]: {
        maxWidth: '400px',
    }
}));

export const DetailTextContentBox = styled(Box)(({ theme }) => ({
    flex: '1',
    minWidth: '288px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch', // Default
    justifyContent: 'center', // Default
    gap: theme.spacing(0.5),
    paddingTop: theme.spacing(2), // Vertical padding for this box
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('xl')]: {
        paddingLeft: theme.spacing(2), // Horizontal padding only on larger screens if next to image
        paddingRight: theme.spacing(2),
        justifyContent: 'flex-start', // Align text to top when next to image
    },
}));

export const DetailBookTitle = styled(Typography)(({ theme }) => ({ // Title within the text content box
    color: '#111418',
    fontSize: theme.typography.pxToRem(20), // 'lg' - adjusted for context
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.3, // 'tight'
    letterSpacing: '-0.015em',
}));

export const DetailMetaBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    gap: theme.spacing(1.5),
    justifyContent: 'space-between', // If there were items to space out
    flexDirection: 'column', // Stack items vertically
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row', // Side by side on larger screens
      alignItems: 'center',
    }
}));

export const DetailMetaInnerBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
}));

export const BookContentText = styled(Typography)(({ theme }) => ({
    color: '#60758a',
    fontSize: theme.typography.pxToRem(16), // 'base' using 16px
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: 'normal',
    wordBreak: 'break-word', // Ensure long content wraps
}));

export const DetailButtonsOuterContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'stretch', // Make inner container take full width
});

export const DetailButtonsInnerContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    gap: theme.spacing(1.5),
    flexWrap: 'wrap',
    padding: theme.spacing(2),
    justifyContent: 'flex-start', // Align buttons to the start
}));

export const DetailEditButton = styled(SecondaryButton)(({ theme }) => ({ // Inherits from SecondaryButton and overrides
    paddingLeft: '16px',
    paddingRight: '16px',
    fontSize: theme.typography.pxToRem(14), // 'sm' in original, matches SecondaryButton's sm font size
    lineHeight: 'normal', // Add if not covered by Button defaults
}));

export const DetailDeleteButton = styled(Button)(({ theme }) => ({
    minWidth: '84px',
    maxWidth: '480px',
    height: '40px',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: '#f44336',
    color: 'white',
    fontSize: theme.typography.pxToRem(14), // 'sm'
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 'normal',
    letterSpacing: '0.015em',
    borderRadius: '12px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#d32f2f',
    },
}));


// --- BookList Page Specific Styles ---
export const ListContentWrapper = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column', // Children stack vertically
    alignItems: 'center', // Center children like ListInnerContainer
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
}));

export const ListInnerContainer = styled(Box)(({ theme }) => ({ // For centering content in ListPage
    maxWidth: '1200px', // Max width for the list/table area
    width: '100%', // Take full width up to maxWidth
    display: 'flex',
    flexDirection: 'column',
}));

export const ListHeaderContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

export const ListPageTitle = styled(Typography)(({ theme }) => ({
    color: '#111418',
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
}));

export const ListPageSubtitle = styled(Typography)({
    color: '#60758a',
});

export const TableWrapper = styled(Box)({
    overflowX: 'auto',
    border: '1px solid #e0e6eb',
    borderRadius: '12px',
    width: '100%', // Takes full width of its parent (ListInnerContainer)
});

export const StyledTableHead = styled(MuiTableHead)({ // Mui prefix to avoid conflict if TableHead is a local var
    backgroundColor: '#f5f7f9',
});

export const StyledTableHeaderCell = styled(MuiTableCell)(({ theme }) => ({ // Mui prefix
    fontWeight: theme.typography.fontWeightBold,
    color: '#111418',
    fontSize: theme.typography.pxToRem(15),
}));

export const StyledTableBodyCell = styled(MuiTableCell)({ // Mui prefix
    color: '#111418',
    verticalAlign: 'middle', // Ensure vertical alignment
});

export const ActionButtonsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(0.5), // Reduced gap for denser actions
    alignItems: 'center',
}));

export const TableActionButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontSize: theme.typography.pxToRem(14), // Adjusted for consistency
    color: '#0c7ff2',
    padding: theme.spacing(0.5, 1), // Smaller padding
    '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
}));

export const TableDeleteActionButton = styled(TableActionButton)(({ theme }) => ({ // Inherits from TableActionButton
    color: '#f44336',
}));

export const NoDataCell = styled(MuiTableCell)(({ theme }) => ({ // Mui prefix
    textAlign: 'center',
    color: '#60758a',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
}));


// --- General Utility Styles ---
export const LoadingContainer = styled(Box)({ // Full page loading
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

export const CenteredSpinnerContainer = styled(Box)({ // For content-area loading
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px', // Default height, can be overridden with sx
});

export const ErrorContainer = styled(Box)(({theme}) => ({ // Full page error
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  color: theme.palette.error.main,
  padding: theme.spacing(3),
  textAlign: 'center',
}));

export const ErrorDisplayBox = styled(Box)(({ theme }) => ({ // For content-area error
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.error.main,
}));

export const EmptyStateBox = styled(Box)(({ theme }) => ({ // For empty data states
    padding: theme.spacing(4),
    textAlign: 'center',
    color: '#6a7681', // Neutral color for empty states
}));

export const StyledMuiAlert = styled(MuiAlert)({ // For Snackbars
    width: '100%',
});

export const CenteredMessageContainer = styled(Box)({ // For messages like "Book not found"
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 120px)', // Adjust based on AppBar/Footer height
    padding: '20px',
    textAlign: 'center',
});