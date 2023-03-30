import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey guys
        </SectionTitle>
        <SectionText>
        This is Vu Minh Quan. <br/>
        I'm a Front-end/Back-end Developer
        </SectionText>
        <Button onClick={props.handleClick}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;