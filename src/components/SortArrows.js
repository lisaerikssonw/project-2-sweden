import React from 'react'


const SortArrows = (props) => (

    <span className="exterior-sort-box">
        <span className="sort-arrow">

          <img src={process.env.PUBLIC_URL + "/images/icons/sort-up-1.png"}
            className={props.name===props.sortColumn && !props.sortAscending ? "arrow arrow-grey" : "arrow"}
            alt="sort-arrow-up"
            title="Sort-up"
          />

          <img src={process.env.PUBLIC_URL + "/images/icons/sort-down-1.png"}
            className={props.name===props.sortColumn && props.sortAscending ? "arrow arrow-grey" : "arrow"}
            alt="sort-arrow-down"
            title="Sort-down"
          />

        </span>
      </span>
)

export default SortArrows 