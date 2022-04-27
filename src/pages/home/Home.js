import React from 'react'
import { Link } from "react-router-dom";
import './home.css'
import Button from '../../component/button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fried from "../../img/tuwo.jpg";
import Noodles from "../../img/noodle.jpg";
import Spicy from "../../img/spicerice.jpg";
import Soda from "../../img/soda.jpg";


function Home() {
  return (
    <div className="homepage">
      <div className="main">
        {/* <p>Welcome to</p> */}
        <h1>
          <p>Welcome to</p> 8TIES
        </h1>
        <Link to="/8ties-restaurant-app/products" className="link">
          <Button value="Order Now!😉" />
        </Link>
        {/* <p>"People who love to eat are always the best people."</p> */}
      </div>

      <div class="container-fluid mt-5">
        <div class="row">
          <h1 class="text-center p-5">
            ABOUT US
          </h1>
        </div>
        <div class="row gutter">
          <div class="col-xl-5 ">
            <img class="pissure" src={Fried} alt="about us"/>
          </div>
          <div class="col-xl-2"></div>

          <div class="col-xl-5">
            <p class="mr-5 text-justify fried">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
              placeat inventore voluptatibus accusantium incidunt. Id, dolores
              eligendi. Impedit itaque consequatur debitis. Eos ullam harum hic
              porro atque natus? Accusantium, quis? Ullam accusantium sit, sequi
              provident excepturi culpa? Nam asperiores amet recusandae error ullam
              adipisci optio, autem natus culpa laudantium, ex laboriosam omnis
              ipsum sit voluptatibus accusantium quidem similique delectus eaque?
              Modi exercitationem laboriosam pariatur iste, aut cupiditate beatae
              voluptatem cumque rem doloremque tempora nihil cum id quisquam sequi
              adipisci iusto qui ea?  
              <Link to="/8ties-restaurant-app/about" className="link">
                <Button value="continue reading" />
              </Link>
            </p>
          </div>
  
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <h1 class="text-center p-5">
            OUR PRODUCTS
          </h1>
        </div>
        <div class="row">
          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src={Soda} alt=""/>
              <h1 class="card-title">Tuwo</h1>
              <p class="card-text">2500</p>
              <Link to="/8ties-restaurant-app/products" className="link">
                <Button value="Order" />
              </Link>
            </div>

            <div class="card">
              <img class="card-img-top" src={Spicy} alt=""/>
              <h1 class="card-title">Jollof</h1>
              <p class="card-text">2500</p>
              <Link to="/8ties-restaurant-app/products" className="link">
                <Button value="Order" />
              </Link>
            </div>


            <div class="card">
              <img class="card-img-top" src={Noodles} alt=""/>
              <h1 class="card-title">Noodles</h1>
              <p class="card-text">2500</p>
              <Link to="/8ties-restaurant-app/products" className="link">
                <Button value="Order" />
              </Link>
            </div>

            <div class="card">
              <Link class="mt-5" to="/8ties-restaurant-app/products" className="link">
                <Button value="see more" />
              </Link>
            </div>

          </div>

          
        </div>
      </div>
     
    </div>

   
  );
}

export default Home