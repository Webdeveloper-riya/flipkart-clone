import mirrorless_cameras from './mirrorless_cameras.png';
import keyboard from './keyboard.png';
import printer from './printer.png';
import pendrives from './pendrives.png';
import shaver from './shaver.png';
import projector from './projector.png';

// second table items
import homedecoration from './homedecoration.png';
import bulb from './bulb.png';
import clock from './clock.png';
import hammers from './hammers.png';
import decorLightings from './decorLightings.png'
import Liveplant from './Liveplants.png';

// third table iteams
import Socks from './socks.png';
import Shoes from './Shoes.png';
import immersionRoad from './immersionRods.png';
import mensjackets from './mensjackets.png';
import blanket from './blanket.png';
import womensjacket from './womensjacket.png';


//  fourth table items
import watch from './watch.png';
import suits from './suits.png';
import bags from './bags.png';
import womenstop from './womenstop.png';
import hairaccessory from './hairaccessory.png';
import womensNightsuit from './womensNighsuit.png';

function Myelectronicproducts(){
    return(
        <div>
           
        <table id="tdelecpro">
        <h2>Best of Electronics</h2>

            <tr>
            <td><img src={mirrorless_cameras} alt="camera"></img><p>Top Mirrorless Cameras</p><h4 className="listpro">Shop Now !</h4></td>
            <td><img src={keyboard} alt="keyboard"></img><p>Woreless Mouse & Keyboard</p><h4 className="listpro">From 169</h4></td>
            <td><img src={printer} alt="printer"></img><p>Printers</p><h4 className="listpro">From 3999</h4></td>
            <td><img src={pendrives} alt="pendrives"></img><p>Pendrives & SD Cards</p><h4 className="listpro">From 289</h4></td>
            <td><img src={shaver} alt="shaver"></img><p>Best of Shavers</p><h4 className="listpro">From 1649</h4></td>
            <td><img src={projector}></img><p>Projector</p><h4 className="listpro">From 6990</h4></td>
            </tr>
        </table>
        <table id="tdelecpro">
            <tr>
                <td colSpan={4}>
                <h2 >Home & Kitchen Essentials</h2>

                </td>
            </tr>


            <tr>
            <td><img src={homedecoration} alt="homedeco"></img><p>Shopwpieces</p><h4 className="listpro">Upto 80% Off</h4></td>
            <td><img src={bulb} alt="bulb"></img><p>Bulbs</p><h4 className="listpro">Upto 80% Off</h4></td>
            <td><img src={clock} alt="clock"></img><p>Clocks</p><h4 className="listpro">Upto 80% Off</h4></td>
            <td><img src={hammers} alt="hammer"></img><p>Hammers</p><h4 className="listpro">From 139</h4></td>
            <td><img src={decorLightings} alt="light"></img><p>Decor Lightings</p><h4 className="listpro">Upto 80% Off</h4></td>
            <td><img src={Liveplant} alt="liveplant"></img><p>Live Plants</p><h4 className="listpro">From 199</h4></td>
            </tr>
        </table>
        <table id="tdelecpro">
            <tr>
       <td colSpan={5}><h2>Winter Essentials</h2></td>
        </tr>

            <tr>
            <td><img src={Socks} alt='socks'></img><p>Men's and Women's Socks</p><h4 className="listpro">Min. 50% Off</h4></td>
            <td><img src={Shoes} alt="shoes"></img><p>Men's Sport Shoes</p><h4 className="listpro">Min. 70% Off</h4></td>
            <td><img src={immersionRoad} alt="immersionrods"></img><p>Immersion Rads</p><h4 className="listpro">Min. 50% Off</h4></td>
            <td><img src={mensjackets} alt='mensjackets'></img><p>Men's Jackets</p><h4 className="listpro">Min.50% Off</h4></td>
            <td><img src={blanket} alt='blanket'></img><p>Blankets</p><h4 className="listpro">Min. 50% Off</h4></td>
            <td><img src={womensjacket} alt='womensjacket'></img><p>Women's Jackets</p><h4 className="listpro">Min.50% Off</h4></td>
            </tr>
        </table>
        <table id="tdelecpro">
        <h2>New Style for Her👧🏻</h2>

            <tr>
            <td><img src={watch} alt='watches'></img><p>Wrist Watches</p><h4 className="listpro">Min. 90% Off</h4></td>
            <td><img src={suits} alt='Suits '></img><p>Women's Ethenic Sets</p><h4 className="listpro">Min. 50% Off </h4></td>
            <td><img src={bags} alt='handbags'></img><p>Handbags & Clutches</p><h4 className="listpro">Min.70% Off</h4></td>
            <td><img src={womenstop} alt='Womens top'></img><p>Women's Top</p><h4 className="listpro">Top Deals</h4></td>
            <td><img src={hairaccessory} alt='hair accessory'></img><p>Hair Accessory</p><h4 className="listpro">Min. 50% Off</h4></td>
            <td><img src={womensNightsuit} alt='night suits'></img><p>Women's Night Suits</p><h4 className="listpro">Min. 50% Off</h4></td>
            </tr>
        </table>
        </div>
    );

    
}
export default Myelectronicproducts;