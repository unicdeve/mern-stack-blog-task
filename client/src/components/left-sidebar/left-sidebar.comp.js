import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  StyledSideBar,
  ItemLink,
  ItemIcon,
  SideBarContainer
} from './left-sidebar.styled';
import CustomButton from '../custom-button/custom-button.comp';

function LeftSideBar({ history }) {
  return (
    <StyledSideBar>
      <SideBarContainer>
        <ItemLink to='/'>
          <ItemIcon className='fab fa-twitter' />
        </ItemLink>

        <ItemLink to='/'>
          <ItemIcon className='fas fa-home' />
          <span>Home</span>
        </ItemLink>

        <ItemLink to='/explore/articles'>
          <ItemIcon className='fas fa-hashtag' />
          <span>Explore</span>
        </ItemLink>

        <ItemLink to='/'>
          <ItemIcon className='fas fa-bell' />
          <span>Notifications</span>
        </ItemLink>

        <ItemLink to='/'>
          <ItemIcon className='fas fa-envelope' />
          <span>Messages</span>
        </ItemLink>

        <ItemLink to='/'>
          <ItemIcon className='fas fa-bookmark' />
          <span>Bookmarks</span>
        </ItemLink>

        <ItemLink to='/'>
          <ItemIcon className='fas fa-list-alt' />
          <span>Lists</span>
        </ItemLink>

        <ItemLink to='/'>
          <ItemIcon className='fas fa-user' />
          <span>Profile</span>
        </ItemLink>

        <ItemLink to='/'>
          <ItemIcon className='fas fa-ellipsis-h' />
          <span>More</span>
        </ItemLink>

        <CustomButton onClick={() => history.push('/create/new-article')}>
          Tweet
        </CustomButton>
      </SideBarContainer>
    </StyledSideBar>
  );
}

export default withRouter(LeftSideBar);
