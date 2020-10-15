import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Wrapper>
            <SiteTitle>Fruit Emporium</SiteTitle>
            <nav>
                <NavigationList>
                    <p>
                        <NavigationLink exact activeClassName="active" to="/">
                            Home
                        </NavigationLink>
                    </p>
                    <li>
                        <NavigationLink activeClassName="active" to="/about">
                            About
                        </NavigationLink>
                    </li>
                </NavigationList>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 65px;
`

const SiteTitle = styled.h1`
    font-size: 42px;
`

const NavigationList = styled.ul`
    display: flex;
    list-style-type: none;
`

const NavigationLink = styled(NavLink)`
    position: relative;
    padding: 0 16px;
    text-decoration: none;

    &.active {
        color: red;
    }
    &:after {
        position: absolute;
        background-color: currentColor;
        content: '';
        left: 0;
        right: 0;
        bottom: -8px;
        width: 40%;
        margin: auto;
        height: 3.5px;
        transform: scaleX(0);
        border-radius: 4px
    }
    &.active:after {
        transition: 0.2s;
        transform: scaleX(1);
    }
`
export default Header;