import React from "react";
import styled from "styled-components";
import { items } from "../data"
import ListingGrid from "./ListingGrid"

let itemsArray = Object.values(items);

const Home = () => {
    return (
        <div>
          <Paragraph>
            Fruit emporium sells the finest fruits from this world and beyond.
          </Paragraph>
          <Paragraph>
            <strong>Browse items:</strong>
          </Paragraph>
          <ListingGrid itemList={itemsArray} />
        </div>
    );
}

const Paragraph = styled.p`
    margin: 40px 65px
`

export default Home;