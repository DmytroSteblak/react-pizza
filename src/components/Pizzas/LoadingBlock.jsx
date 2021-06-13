import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
      <ContentLoader
          speed={0}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
      >
          <rect x="2" y="358" rx="6" ry="6" width="109" height="29" />
          <rect x="154" y="358" rx="6" ry="6" width="126" height="30" />
          <rect x="223" y="363" rx="0" ry="0" width="10" height="7" />
          <rect x="1" y="305" rx="6" ry="6" width="280" height="47" />
          <rect x="181" y="331" rx="0" ry="0" width="0" height="1" />
          <circle cx="137" cy="141" r="125" />
          <rect x="149" y="117" rx="0" ry="0" width="21" height="21" />
          <rect x="151" y="174" rx="0" ry="0" width="19" height="2" />
          <rect x="5" y="269" rx="0" ry="0" width="272" height="29" />
      </ContentLoader>
  );
}

export default LoadingBlock;
