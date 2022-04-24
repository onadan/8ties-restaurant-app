import React from "react";
import "./products.css";
import Card from "../../component/card/Card";
import Jollof from "../../img/jollof.jpg";
import Noodles from "../../img/noodle.jpg";
import Fried from "../../img/friedrice.jpg";
import Tuwo from "../../img/tuwo.jpg";
import Spicy from "../../img/spicerice.jpg";
import Amala from "../../img/amala.jpg";
import Vegetables from "../../img/vegetables.jpg";
import Beans from "../../img/beans.jpg";
import White from "../../img/whiterice.jpg";
import Eba from "../../img/eba.jpg";
import Fries from "../../img/fries.jpeg";
import Ice from "../../img/ice.jpg";
import Dough from "../../img/doughnut.jpeg";
import Soda from "../../img/soda.jpg";

function Products() {
  return (
    <div className="products-page">
      <div className="products-page-top"></div>
      <div className="products-page-heading">Available Products</div>

      <div className="products-list">
        <Card
          pics={Jollof}
          name="Jollof Rice"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Fried}
          name="Fried Rice"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Spicy}
          name="Jollof Rice and Dodo"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Noodles}
          name="Noodles"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N1000"
        />
        <Card
          pics={Vegetables}
          name="Vegetables"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Tuwo}
          name="Tuwo"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Amala}
          name="Amala"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Beans}
          name="Beans"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={White}
          name="White Rice"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Eba}
          name="Eba"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Fries}
          name="Chicken Fries"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Ice}
          name="Ice Cream"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Dough}
          name="Doughnut"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
        <Card
          pics={Soda}
          name="Soda drinks"
          description="Our native Jollof rice. Tasty and Delicious"
          price="N2500"
        />
      </div>
    </div>
  );
}

export default Products;
