import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../components/utility/media'
import theme from '../components/utility/theme'
import Layout from '../components/layout'
import Tagline from '../components/Tagline'
import Text from '../components/Text'

const Content = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: 'Abril Fatface', cursive;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    color: #ffffff;
    margin: 0;
    line-height: 1.83;
    letter-spacing: 3.6px;
    @media(min-width: ${media.md}){
      font-size: 60px;
      letter-spacing: 6px;
    }
    @media(min-width: ${media.xl}){
      font-size: 105px;
      font-size: 105px;
      line-height: 1.04;
      letter-spacing: 10.5px;
    }
  }
`

const Features = styled.div`
  padding-top: 110px;
  @media (min-width: ${media.xl}) {
    padding-top: 166px;
  }
`
const FooterNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const NavItem = styled.li`
  margin-right: 70px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${media.md}) {
    margin-bottom: 0;
  }
`

const NavLink = styled(Link)`
  display: inline-block;
  font-family: ${theme.fontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 2.96;
  letter-spacing: 2.4px;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  line-height: 1.2;
  padding-bottom: 13px;
  @media (min-width: ${media.xl}) {
    font-size: 14px;
    line-height: 2.54;
    letter-spacing: 2.8px;
  }
  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 5px;
    content: '';
    background-color: ${theme.primary};
    transition: width .3s ease-in-out;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
}

`

const IndexPage = props => (
  <Layout>
    <Content>
      <div className="heading">
        <Tagline>i am abdus</Tagline>
        <Title>UI Designer</Title>
      </div>

      <Features>
        <Text>Father of two boys</Text>
        <Text>Husband of a talent lady</Text>
        <Text>Founder of TAF Technology</Text>
        <Text>Promoting FreeCodeCamp Rajshahi</Text>
        <Text>Learning new technologies everyday</Text>
      </Features>
    </Content>

    <div className="footer">
      <FooterNav>
        <NavItem>
          <NavLink to="/portfolio/">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/blog/">My Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact/">Contact</NavLink>
        </NavItem>
      </FooterNav>
    </div>
  </Layout>
)

export default IndexPage
