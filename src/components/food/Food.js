import FoodCard from "./FoodCard";
import {foodItems} from "./FoodList";

const Food = () => {
    return (
        <div className="container food-wrapper">
            <h3>Food Items</h3>
            <hr/><br/>
            <div className="row">
                {
                    foodItems.map((item, index) => (
                        <FoodCard item={item} key={index}/>
                    ))
                }
            </div>
        </div>
      );
}

export default Food;