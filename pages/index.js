import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, Bio } from '../components/Intro';
import { Skills, Projects, Outputs, Interests } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { bio, contact, intro, navigation, projects, SEO, interests, outputs, skills } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <Bio
        title={bio.title}
        description={bio.description}
      />
      <Interests
        title={interests.title}
        cards={interests.cards}
      />
      <Outputs
        title={outputs.title}
        cards={outputs.cards}
      />
      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <Skills
        title={skills.title}
        cards={skills.cards}
      />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
