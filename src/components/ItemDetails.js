import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const ItemDetails = () => {
    const { itemId } = useParams();

    const foundItem = items[itemId];
    const seller = sellers[foundItem.sellerId]
    const itemInStock = foundItem.quantity > 0;

    return (
        <Wrapper>
            <FruitImg src={foundItem.imageSrc} />
            <FruitInfoWrapper>
                <div>
                    <Name>{foundItem.name}</Name>
                    <LatinName>{foundItem.latinName}</LatinName>
                </div>
               <p>{foundItem.description}</p>
               <CountryOrigin>Product of <strong>{foundItem.countryOfOrigin}</strong></CountryOrigin>
               {itemInStock && (<PurchaseButton>${foundItem.price} - Buy now</PurchaseButton>)}
               {!itemInStock && <p>Sorry, this item is out of stock!</p>}
               <SellerInfo>
                   <SellerImg src={seller.avatarSrc} />
                   <p>
                       Sold by: <strong>{seller.storeName}</strong>
                   </p>
               </SellerInfo>
            </FruitInfoWrapper>
        </Wrapper>
    )
  };
  

const Wrapper = styled.div `
    display: flex;
    margin: 40px 65px;
`

const FruitImg = styled.img`
    height: 750px;
    width: auto;
    border-radius: 12px;
`

const FruitInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 60px;
`

const Name = styled.h1`
    font-size: 2.2rem;
`

const LatinName = styled.h2`
    font-size: 1.2rem;
    color: grey;
    font-weight: lighter;
    font-style: italic
`
//having trouble with space between Product of and Country of Origin.
const CountryOrigin = styled.p`
    display: flex;
    color: grey;
    font-style: italic;
`

const PurchaseButton = styled.button`
    background-color: #5520E8;
    color: white;
    font-size: 1.2rem;
    border: none;
    height: 60px;
    width: 230px;
    border-radius: 12px;
    padding: 10px 40px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: red;
    }
`

const SellerInfo = styled.div`
    display: flex;
    align-items: center;
`

const SellerImg = styled.img`
    height: 60px;
    width: auto;
    border-radius: 50%;
    margin-right: 10px;
`


export default ItemDetails;