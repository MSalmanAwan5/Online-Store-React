import React from "react";
import PropTypes from 'prop-types'
import {Pagination,PaginationItem,PaginationLink} from 'reactstrap'

const Pages = (props) =>{
    
    const {pagesCount,currentPage,handlePageClick,handlePreviousClick,handleNextClick} = props

    return(
        
    <Pagination  style={{justifyContent:'center'}} size="lg">
        <PaginationItem disabled={currentPage<=1}>
            <PaginationLink previous  onClick={handlePreviousClick}>
            </PaginationLink>
        </PaginationItem>

        {([...Array(pagesCount)].map((page,i)=>(
            <PaginationItem 
            active={i+1==currentPage} 
            key={i}>
                <PaginationLink onClick={(e)=>handlePageClick(e,i)} href='#'>
                    {i+1}
                </PaginationLink>
                </PaginationItem>
        )))}
        <PaginationItem disabled={currentPage==pagesCount}>
            <PaginationLink next onClick={handleNextClick}>
            </PaginationLink>
        </PaginationItem>

       
    </Pagination>
    )
}

export default Pages;