function Mynavbar(){
    return(
        <div>
            <ul>
                <li><h2 id="he">Flipkart</h2></li>
                <li><input type="text" id="searchbar" placeholder="🔍Search for Products,Brands and More"></input></li>
                <li id="navhover">
                    <select id="dropdown">
                    <option id="log">Login</option>
                        <option>New Customer?</option>
                        <option>My Profile</option>
                        <option>Fliplart Plus zone</option>
                        <option>Orders </option>
                        <option>Wishlist</option>
                        <option>Reward</option>
                        <option>Gift Card</option>
                    </select>
                </li>
                <li id="cart">Cart</li>
                <li id="sell">Became a Seller</li>
            </ul>
        </div>
        
    );
}
export default Mynavbar;