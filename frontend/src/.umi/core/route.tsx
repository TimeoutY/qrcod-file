// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/","id":"1"},"2":{"path":"/docs","id":"2"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import(/* webpackChunkName: "p__index" */'@/pages/index.tsx')),
'2': React.lazy(() => import(/* webpackChunkName: "p__docs" */'@/pages/docs.tsx')),
},
  };
}
