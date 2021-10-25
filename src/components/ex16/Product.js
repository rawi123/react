import { useParams } from "react-router"
import { Link } from "react-router-dom";
import store from "./store";

export const Product = () => {
    const { id } = useParams()
    const val=store[id-1]
    return (
        <div className="card">
            <h2>{val.name}</h2>
            <h4>price: {val.price}</h4>
            <div>
                {val.images.map(imageUrl => <img alt="img" key={imageUrl} className="image" src={imageUrl}></img>)}
            </div>
            <Link to="/products"><input type="submit" value="back" /></Link>
        </div>
    )
}
