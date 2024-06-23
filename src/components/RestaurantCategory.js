import ItemList from "./itemList";

const RestaurantCategory=({data, showItem, setShowIndex})=>{

    const handleClick=()=>{
        setShowIndex();
    };

    return <div>
        <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>

            {showItem && <ItemList items={data.itemCards}/>}
        </div>
        
    </div>
}

export default RestaurantCategory;