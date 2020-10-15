import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const ListingGrid = ({itemList}) => {
    return (
        <Wrapper>
            {itemList.map((item) => {
                return (
                    <FoodItem key={item.name}>
                        <FruitImage src={item.imageSrc} />
                        <FruitLink to={"items/" + item.id}>{item.name}</FruitLink>
                        <Line />
                        <LatinName>{item.latinName}</LatinName>
                    </FoodItem>
                );
            })};
        </Wrapper>
    );
};

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 60px;
`

const FoodItem = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    padding: 36px 10px;
    width: 240px;
    box-shadow: 0px 10px 41px -1px rgba(184,184,184,1);
    border-radius: 12px;
    transition: 0.2s;

    &:hover {
        transform: scale(1.2)
    }
`

const FruitImage = styled.img`
    width: 115px;
    margin-top: -51px;
    border-radius: 12px;
`

const FruitLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 10px;
    font-size: 1.6rem;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
        color: #5520E8;
    }
`

const Line = styled.div`
    width: 45px;
    border: 2px solid lightgray;
    margin: 15px;
    border-radius: 5px;
`

const LatinName = styled.p`
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    color: grey;
    font-style: italic;
`
//Not sure if proptypes are needed?
ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ListingGrid;