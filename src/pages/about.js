import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import DamianImage from '../images/about/Damian.png';
import JanImage from '../images/about/Jan.png';

const ContentWrapper = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 600px 600px;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;

  .person-container {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem auto;

    h3,
    img,
    p {
      padding: 1rem;
      max-width: 500px;
      line-height: 1.5rem;
    }
  }
`;

export default function about() {
  return (
    <Layout>
      <ContentWrapper>
        <div className="person-container">
          <h3>Damian Kaminski</h3>
          <img src={DamianImage} alt="Damian" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            numquam voluptatum, repellat quas at et sunt eos maxime. Voluptatum
            quaerat aut perferendis accusamus? Repellendus atque sapiente
            pariatur numquam rerum officiis aliquid labore deserunt dolorem a
            ipsam adipisci modi voluptates unde ducimus voluptatem sed, porro
            deleniti minima ab dolore. Consequatur molestiae obcaecati deleniti
            ab earum? Laborum, dicta? Quaerat hic molestiae natus omnis ullam
            nihil nobis, voluptas dignissimos explicabo adipisci, culpa
            voluptatum aspernatur temporibus nemo debitis iure fugiat placeat
            quas magnam inventore expedita reiciendis quod! Excepturi facere
            dignissimos tempore eum ullam necessitatibus vero cumque saepe rem
            nesciunt asperiores sint, non praesentium provident!
          </p>
        </div>
        <div className="person-container">
          <h3>Jan Chade</h3>
          <img src={JanImage} alt="Jan" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            numquam voluptatum, repellat quas at et sunt eos maxime. Voluptatum
            quaerat aut perferendis accusamus? Repellendus atque sapiente
            pariatur numquam rerum officiis aliquid labore deserunt dolorem a
            ipsam adipisci modi voluptates unde ducimus voluptatem sed, porro
            deleniti minima ab dolore. Consequatur molestiae obcaecati deleniti
            ab earum? Laborum, dicta? Quaerat hic molestiae natus omnis ullam
            nihil nobis, voluptas dignissimos explicabo adipisci, culpa
            voluptatum aspernatur temporibus nemo debitis iure fugiat placeat
            quas magnam inventore expedita reiciendis quod! Excepturi facere
            dignissimos tempore eum ullam necessitatibus vero cumque saepe rem
            nesciunt asperiores sint, non praesentium provident!
          </p>
        </div>
      </ContentWrapper>
    </Layout>
  );
}
