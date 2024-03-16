import React from "react"
const RestaurantContainer=(props)=>{
   const{resData}=props
    return(
        <div className="restaurant-list">
        <div className='res-card'>
            <div className="res-img-container">
            <img className="res-img" src={
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ resData?.info?.cloudinaryImageId
            }/>
            </div>
            <div>
            <p>{resData?.info.name}</p>
            <p className="cuisines">{resData?.info.cuisines.join(',')}</p>
            <p>{resData?.info.avgRating}</p>
            <p>{resData?.info.locality}</p>

            </div>
          {/* 
          cusines
          avg rating
          costFor two*/}
        </div>
        </div>
    )
}
export default RestaurantContainer