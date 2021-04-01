# Rick & Morty - a SPA created with React

I created this project during [Adalab Bootcamp](https://adalab.es/), at the end of React module.

**React:**

- a structure based on functional components with usage of React Hooks (useState, useEffect)
- request to public API done with async function
- use of React Router and dynamic routes to enter the character details page (fallback component for 404 page not found error provided)
- filter by: name (input type text), species, status, origin (checkboxes, with reusable function for every filter - other checkboxes-based filter options can be easily added as both component and function to create the filter are reusable)
- on mobile version, filter by checkbox fieldsets are collapsable for better user experience (options can be shown/hidden with a click on the legend)
- component-based usage of Font Awesome icons
- React Router's ScrollToTop function to ensure the best user experiance when navigating the page
- usage of propTypes and defaultProps

**HTML & CSS:**

- HTML semantic structure
- responsive design with mobile-first approach
- CSS based on grid and flexbox
- SASS (nesting, variables, mixins)
- usage of Font Awesone icons

## How it works?

It is a page for all Rick and Morty fans:

- When loaded, page sends a request to a public API and renders a list of 20 Rick & Morty Characters.
- The results are shown in an alphabetical order.
- The results can be filtered by name, status, species and origin.
- Thanks to React Router and dynamic routes, we can enter a page with more information about each character.
- Options for "no character matching criteria" and "404 error page" are provided.

You can check the final result [HERE](http://beta.adalab.es/modulo-3-evaluacion-final-marcjnn/#/).
