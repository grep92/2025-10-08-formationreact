import React, { lazy, Suspense } from 'react';

const LazyMemeSVGViewer = lazy(() => import('./MemeSVGViewerStoreConnector'));

const MemeSVGViewer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMemeSVGViewer {...props} />
  </Suspense>
);

export default MemeSVGViewer;
