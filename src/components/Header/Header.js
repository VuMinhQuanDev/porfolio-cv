import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLeftCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck, DiReact } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiReact size="3rem" />
        </a>
      </Link>
    </Div1>

    <Div3>
      <SocialIcons href="https://github.com/VuMinhQuanDev">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://fb.com/vuminhquanmusic03">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/toilaquanvu/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
