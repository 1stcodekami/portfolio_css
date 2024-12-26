'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const Header = styled.header<{ isOpen: boolean }>`
 
border-radius: 15px; 
   border: 2px solid rgb(48, 47, 47);
    box-shadow: 8px 8px 20px rgb(48, 47, 47);
    transition: background-color 0.3s ease; 

    opacity: 0.5;
 
  padding-bottom: 10px;
  margin-left:10px;
 
  padding: 15px 20px;
  position: fixed;
  top: 0;
  width: 95%;
  z-index: 1000;
  transition: left 0.3s ease;
  @media (max-width: 768px) {
    left: ${(props) => (props.isOpen ? '0' : '-290px')};
    width: 15%;
    height: 100%;
    padding:0px
    border: 2px solid rgb(48, 47, 47);
    box-shadow: 8px 8px 20px rgb(48, 47, 47);
    display: flex;
    justify-content: center ;
    align-items: baseline;

  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  h2 {
    margin: 0;
    color: rgb(6, 201, 207);
     @media (max-width: 768px) {
     margin-top: 20px;
     color: rgb(6, 201, 207);
     }
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top:70%;
  }
`;

const Li = styled.li`
  margin-right: 20px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const StyledLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  color: white;
  padding: 5px 10px;
  ${({ isActive }) => isActive && `
    color: rgb(9, 214, 221);
    border-radius: 5px;
  `}
`;

const BtnContainer = styled.div`
  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top:100%;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
    transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
     @media (max-width: 768px) {
    font-size:80%;
    }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleTouchMove = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Hide after 3 seconds
    };

    const handleMouseMove = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Hide after 3 seconds
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Header isOpen={isOpen}>
      <Nav>
        <Logo>
          <h2>Kamran</h2>
        </Logo>
        <Ul>
          <Li>
            <StyledLink href="/" isActive={pathname === '/'}>Home</StyledLink>
          </Li>
          <Li>
            <StyledLink href="/about" isActive={pathname === '/about'}>About</StyledLink>
          </Li>
          <Li>
            <StyledLink href="/projects" isActive={pathname === '/projects'}>Projects</StyledLink>
          </Li>
          <Li>
            <StyledLink href="/contact" isActive={pathname === '/contact'}>Contact</StyledLink>
          </Li>
        </Ul>
        <BtnContainer>
          <Button className="bt">Download CV</Button>
        </BtnContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;
