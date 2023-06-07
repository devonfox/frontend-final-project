# Frontend Final Project - CS464P Portland State

by Ryan Filgas and Devon Fox

## Building the Project

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

To make sure you can take advantage of the current [Polygon.io](https://polygon.io/) endpoint, create a `.env` file in the project's main directory and add your API key like so:

```
POLYGON_API_KEY=YOUR_API_KEY_HERE
```

To obtain an API key, navigate to: [https://polygon.io/?auth=signup](https://polygon.io/?auth=signup) to signup and follow the prompts to receive your free API key.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

**Todo:** *read up on this to take advantage*

## Next.js Learning Resources
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Note: [Netlify](https://www.netlify.com/) is another option for deployment.


Ryan's sources:
  * Building a component: https://react.dev/learn/your-first-component#defining-a-component
  * Rendering lists from arrays in react: https://react.dev/learn/rendering-lists#rendering-data-from-arrays
  * Adding css styles in tsx: https://reacthustle.com/blog/how-to-set-inline-styles-in-react-typescript
  * Using flexbox for the component grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
  * Add conditional rendering in react: https://react.dev/learn/conditional-rendering
  * Using Chakra UI: https://chakra-ui.com/
  * Using minmax for the grid component - switched from flex box so that the last row would align left: https://developer.mozilla.org/en-US/docs/Web/CSS/minmax
  * Used repeat to set grid vals and found autofit as well: https://developer.mozilla.org/en-US/docs/Web/CSS/repeat
  * Used flex direction along with md to make flexbox maintain a ratio until hitting a smaller size: https://github.com/chakra-ui/chakra-ui/discussions/4789
  * Needed to override chakra ui's styles for the menu: https://chakra-ui.com/docs/styled-system/style-props
  * Using font size to change icon size: https://stackoverflow.com/questions/14482249/setting-size-for-icon-in-css
  * Formatting strings to USD and rounding: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
  * More rounding: https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8
  * Get yesterdays date: https://stackoverflow.com/questions/5511323/calculate-the-date-yesterday-in-javascript
  * Used Devon's code as reference to exclude weekends and trading holidays
  * Using promise all to batch api calls https://hackmamba.io/blog/2020/12/aggregate-multiple-api-requests-with-promise-all/
  * Converted timezone to NewYork for the NYSE hours: https://stackoverflow.com/questions/69335079/i-want-to-get-new-york-time-in-this-javascript-clock
  * Fixed date string for api calls by extracting days individually and padding them: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStar
