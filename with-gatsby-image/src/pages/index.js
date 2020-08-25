import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const pageQuery = graphql`
  {
    gcms {
      graphcms {
        products {
          name
          slug
          price
          image {
            url
            node {
              childImageSharp {
                fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = () => {
  const {
    gcms: { graphcms: { products } },
  } = useStaticQuery(pageQuery);

  return products.map((product) => (
    <div style={{ textAlign: 'center' }}>
      <Img
        fluid={product.image.node.childImageSharp.fluid}
        style={{ margin: '0 auto', maxWidth: '50%' }}
      />
      <h1>{product.name}</h1>
    </div>
  ));
};

export default IndexPage;
