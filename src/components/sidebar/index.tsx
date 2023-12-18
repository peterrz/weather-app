import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaHistory, FaList, FaRegTimesCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

// Define the sidebar data
const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
  },
  {
    title: 'History',
    path: '/history',
    icon: <FaHistory />,
  },
];

// Sidebar component
const Sidebar: React.FC = () => {
  // State for mobile sidebar open/close
  const [close, setClose] = useState(false);

  // Toggle mobile sidebar visibility
  const showSidebar = () => setClose(!close);

  return (
    <>
      {/* Desktop sidebar */}
      <SidebarContainer>
        <TitleContainer style={{ marginBottom: '2rem' }}>Menu</TitleContainer>
        {SidebarData.map((item, index) => (
          <SidebarLink to={item.path} key={index}>
            {item.icon}
            <SidebarTitle>{item.title}</SidebarTitle>
          </SidebarLink>
        ))}
      </SidebarContainer>

      {/* Mobile sidebar */}
      <ShowMobile>
        <Navbar>
          <MenuIconOpen to="#" onClick={showSidebar}>
            <FaList />
            <TitleContainer>Menu</TitleContainer>
          </MenuIconOpen>
          <MenuIconClose close={close} to="#" onClick={showSidebar}>
            <FaRegTimesCircle />
          </MenuIconClose>
        </Navbar>

        <SidebarMenu close={close}>
          {SidebarData.map((item, index) => (
            <SidebarLink to={item.path} key={index}>
              {item.icon}
              <SidebarTitle>{item.title}</SidebarTitle>
            </SidebarLink>
          ))}
        </SidebarMenu>
      </ShowMobile>
    </>
  );
};

export default Sidebar;

// Styled Components
const SidebarContainer = styled.div`
  background: #222831;
  border-radius: 10px;
  width: 16rem;
  display: block;
  padding: 1.5rem;

  @media screen and (max-width: 1340px) {
    display: none;
  }
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;

  &:hover,
  &.active {
    background: #393e46;
    border-radius: 1rem;
  }
`;

const ShowMobile = styled.div`
  display: none;

  @media screen and (max-width: 1340px) {
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const SidebarTitle = styled.span`
  margin-left: 1rem;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  background-color: #222831;
  border-bottom: 1px solid #3f4047;
  z-index: 1;
  width: inherit;
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.3rem;
  margin-left: 2rem;
  color: #fff;
`;

const TitleContainer = styled.div`
  color: #fff;
  font-size: 1.3rem;
  margin-inline: 1rem;
`;

const MenuIconClose = styled(Link)<{ close: boolean }>`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #fff;
  display: ${({ close }) => (close ? 'flex' : 'none')};
`;

const SidebarMenu = styled.div<{ close: boolean }>`
  width: 16rem;
  height: 100vh;
  background-color: #222831;
  position: fixed;
  top: 3.5rem;
  left: ${({ close }) => (close ? '0' : '-100%')};
  transition: 0.6s;
  border: 1px solid #3f4047;
  padding: 0.5rem;
  z-index: 2;
`;
