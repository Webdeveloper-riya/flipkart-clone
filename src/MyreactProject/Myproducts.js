
import grocery from './grocer.jpg';
import mobile1 from './mobile1.jpg';
import fashion from './fashion.jpg';
import laptop from'./laptop.jpg';
import furniture from'./furniture.jpg';
import applences from './applences.jpg';
import trevel from './trevel.jpg';
import toys from'./toyes.jpg';
import bike from'./bike.jpg';
function Myproducts(){
    return (  
        <table id="tbproduct">
            <tr id="trpro">
                <td><img src={grocery} alt="robot" width={90} height={80}/><h4  className="listpro">Grocery</h4></td>
                <td><img src={mobile1} alt="mobile"  width={90} height={80}></img><h4  className="listpro">Mobile</h4></td>
                <td><img src={fashion}  alt="fashion"  width={90} height={80}></img><h4  className="listpro">Fashion</h4></td>
                <td><img src={laptop}   alt="Electronics"  width={90} height={80}></img><h4  className="listpro">Electronics</h4></td>
                <td><img src={furniture} alt="furniture"  width={90} height={80}></img><h4  className="listpro">Home & Furniture</h4></td>
                <td><img src={applences} alt="appliances"  width={90} height={80}></img><h4  className="listpro">Appliances</h4></td>
                <td><img src={trevel}    alt="Trevel"  width={90} height={80}></img><h4  className="listpro">Travel</h4></td>
                <td><img src={toys}   alt="toys"  width={90} height={80}></img><h4  className="listpro">Beauty,Toys & More</h4></td>
                <td><img src={bike}  alt="two wheelers"  width={90} height={80}></img><h4  className="listpro">Two Wheelers</h4></td>

            </tr>
        </table>
    );
}
export default Myproducts;