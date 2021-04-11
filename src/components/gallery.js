import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Gallery = () => {
  const { image1, image2 } = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "laika-screenshot-1.webp" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        image2: file(relativePath: { eq: "laika-screenshot-2.webp" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `
  );

  const galleryItems = [
    {
      src: getImage(image1),
      alt: "Gameplay Screenshot 1",
    },
    {
      src: getImage(image2),
      alt: "Gameplay Screenshot 2",
    },
  ];

  const Item = (props) => {
    return <GatsbyImage image={props.item.src} alt={props.item.alt} />;
  };

  return (
    <>
      <Carousel>
        {galleryItems.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

const StyledGallery = styled(Gallery)`
  width: 100%;
`;

export default StyledGallery;
