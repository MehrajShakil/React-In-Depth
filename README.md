# React In depth

# Parcel

- dev build
- local server
- HMR = Hot Module Replacement
- File watching Algorithm writtern in C++
- Caching - faster build
- Image Optiiazation
- Minification(prod build)
- Bundling
- Compress
- Consistent Hashing
- Code Spliting
- Differential Bundling - support older browsers.
- Diagnostics
- Error Handling
- hosting apps https
- Tree Shaking - remove unused code
- different dev and prod bundles

# Foor Odering App

/\*

- Header
  - Logo
  - Nav Items
    Body
  - Search
  - RestaurantContainer
    - RestaurantCard - Img - Name of Res, Star Rating, cusine, delivery time
      Footer
  - Copyright
  - Links
  - Address
  - Contact

\*/

## There are two way to both export and import

- default approach
- named approach

### Default Approach

- export using "export default <name of variable>"
- but the limitation is, a file can not have multiple default export
- To import a type, using "import <name of variable> from path"

### Named Approach

- export using add export keyword before the actual variable,
- import, using "import {name of variable} from path"
