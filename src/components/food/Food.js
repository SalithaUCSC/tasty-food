import FoodCard from "./FoodCard";

const products = [
    {
        id: 1,
        title: 'product 1',
        price: 15
    },
    {
        id: 2,
        title: 'product 2',
        price: 2
    },
    {
        id: 3,
        title: 'product 3',
        price: 10
    },
    {
        id: 4,
        title: 'product 4',
        price: 20
    },
    {
        id: 5,
        title: 'product 5',
        price: 5
    },
    {
        id: 6,
        title: 'product 6',
        price: 6
    }
]
const Food = () => {
    return (
        <div className="container food-wrapper">
            <h3>Food Items</h3>
            <hr/><br/>
            <div className="row">
                {
                    products.map((item, index) => (
                        <FoodCard item={item} key={index}/>
                    ))
                }
            </div>
        </div>
      );
}

export default Food;