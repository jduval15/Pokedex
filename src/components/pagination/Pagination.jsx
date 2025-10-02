import React from "react"
import "../pagination/pagination.css"

const Pagination = ({ page, pagesLength, setPage }) => {
    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock 
        ? pagesLength + 1 
        : currentBlock * pagesPerBlock + 1

    for (let i = initialPage; i < limitPage; i++) {
        arrPages.push(i)
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        if (page < pagesLength) {
            setPage(page + 1)
        }
    }

    const handlePage = (currentPage) => {
        setPage(currentPage)
    }

    const handleFirstPage = () => {
        setPage(1)
    }

    const handleLastPage = () => {
        setPage(pagesLength)
    }

    return (
        <nav className="pagination" aria-label="Pagination navigation">
            {page > 1 && (
                <>
                    <button 
                        onClick={handleFirstPage} 
                        className="pagination__button pagination__first"
                        aria-label="Go to first page"
                    >
                        &#171;
                    </button>
                    <button 
                        onClick={handlePrev} 
                        className="pagination__button pagination__prev"
                        aria-label="Go to previous page"
                    >
                        &#60;
                    </button>
                </>
            )}

            {currentBlock > 1 && (
                <span className="pagination__ellipsis" aria-hidden="true">...</span>
            )}

            <ul className="pagination__container">
                {arrPages.map(pageNum => (
                    <li key={pageNum}>
                        <button
                            onClick={() => handlePage(pageNum)} 
                            className={`pagination__page ${page === pageNum ? "pagination__active" : ""}`}
                            aria-label={`Go to page ${pageNum}`}
                            aria-current={page === pageNum ? "page" : undefined}
                        >
                            {pageNum}
                        </button>
                    </li>
                ))}
            </ul>

            {currentBlock < blockLength && (
                <span className="pagination__ellipsis" aria-hidden="true">...</span>
            )}

            {page < pagesLength && (
                <>
                    <button 
                        onClick={handleNext} 
                        className="pagination__button pagination__next"
                        aria-label="Go to next page"
                    >
                        &#62;
                    </button>
                    <button 
                        onClick={handleLastPage} 
                        className="pagination__button pagination__last"
                        aria-label="Go to last page"
                    >
                        &#187;
                    </button>
                </>
            )}
        </nav>
    )
}

export default Pagination