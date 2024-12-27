# React Native Dimensions API: undefined width and height on Android

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native on Android. The problem arises because the API is asynchronous, and the `width` and `height` properties might be `undefined` during the initial component render. This can lead to layout problems or app crashes.

The `DimensionsBug.js` file shows the buggy code, where the dimensions are accessed directly without considering the asynchronous nature of the API. The `DimensionsBugSolution.js` file presents a corrected implementation, using the `useEffect` hook to ensure that the dimensions are fetched and used after they become available.