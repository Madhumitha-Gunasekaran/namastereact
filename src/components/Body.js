import React, { useEffect, useState } from "react";
import RestaurantContainer from "./RestaurantContainer";

const Body = () => {
    const [listOfRestaurants, setListofRestaurants] = useState(null);
    const [searchRestaurants, setSearchRestaurants] = useState(listOfRestaurants);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );
        const getData = await data.json();
        setListofRestaurants(getData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchRestaurants(getData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    function onSearchClick() {
        const filterRestaurants = listOfRestaurants.filter((res) => res?.info.name.includes(searchText))
        setSearchRestaurants(filterRestaurants)
    }
    return (
        <div className='body'>
            <div className="filter-data">
                <input className="input-search" type="text" placeholder="Search for Restaurant" onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="btn-search" onClick={onSearchClick}> Search  </button>
            </div>
            <div className='res-container'>
                {searchRestaurants?.map((restaurant) => (
                    <RestaurantContainer key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>

    )
}
export default Body