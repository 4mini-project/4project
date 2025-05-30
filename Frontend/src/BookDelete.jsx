import { useParams, useNavigate } from 'react-router-dom'

function BookDelete() {
    const navigate = useNavigate()
    
      const handleDeleteClick = () => {
        navigate(`/books`)
      }

      const handleCancelClick = () => {
        navigate(`/books`)
      }

  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
    <link
        rel="stylesheet"
        as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
    />
    <title>Book Delete</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
    <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
        <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
            <div className="flex items-center gap-4 text-[#111418]">
            <div className="size-4">
                <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                    fill="currentColor"
                />
                </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                Book Manager
            </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
                <a
                className="text-[#111418] text-sm font-medium leading-normal"
                href="#"
                >
                Dashboard
                </a>
                <a
                className="text-[#111418] text-sm font-medium leading-normal"
                href="#"
                >
                Books
                </a>
                <a
                className="text-[#111418] text-sm font-medium leading-normal"
                href="#"
                >
                Authors
                </a>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                className="text-[#111418]"
                data-icon="Bell"
                data-size="20px"
                data-weight="regular"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                >
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                </svg>
                </div>
            </button>
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmMXOpmwKkaXvwZ8AOSvQz1Xb8x2ADLT5BpA6E7DK3TP1DZFHt1iXLZ8H6Jc3T9atxikdDOHCMP0_B4_cpsgjk3SzG-u88lURCuguigU3pgomQJWdyCL8l8leTANkMYEYYjzk90e8tXksrJ1rETCsAe2_QvgBX_JKB8KV-uPj5dxZVDeYrHwUcQr4H9iSzKikOMM-zevF9ghBe30hBVE2B1NPAh1qghhurvpAzxBTA5Xwy8rQdlPKuiv64lH0hUQn4ndAQ-ipTMOHw")'
                }}
            />
            </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                Are you sure you want to delete this book?
            </h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                This action cannot be undone. Deleting this book will permanently
                remove it from your library.
            </p>
            <div className="flex justify-center">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button onClick={handleCancelClick}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] grow">
                    <span className="truncate">Cancel</span>
                </button>
                <button onClick={handleDeleteClick}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] grow">
                    <span className="truncate">Delete</span>
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </> 
  )
}

export default BookDelete

