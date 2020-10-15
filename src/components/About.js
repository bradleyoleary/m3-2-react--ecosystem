import React from "react";
import styled from "styled-components";

const About = () => {
    return (
        <div>
            <Paragraph>Fruit emporium is founded on a very simple principle: <strong>Fruit is good.</strong></Paragraph>
            <Paragraph>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</Paragraph>
        </div>
    );
};

const Paragraph = styled.p`
    margin: 40px 65px;
`;

export default About;