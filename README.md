# VinylVault Indie Record Online Store

## 1. Project Setup & Execution Instructions

A React single-page application (SPA) called VinylVault is used to browse and buy vinyl records. Users can filter albums by genre, view album details, manage a shopping cart, and complete a checkout form.

### Prerequisites

Make sure the following are installed before launching the application:

- Node.js version 21 or higher
- npm (Node Package Manager)
- Git for cloning the repository
- A modern web browser, such as Google Chrome

The application uses React 18+, Vite, and react-router-dom version 6 or higher.

### Installation Instructions

1. Open Visual Studio Code or a terminal.

2. Clone the GitHub repository:

    git clone https://github.com/Husseinahmad113/VinylVault.git

3. Navigate into the project directory:

    cd VinylVault

4. Install the required project dependencies:

    npm install

This installs React, Vite, react-router-dom, and the other dependencies listed in package.json.

### Managing the Development Server

Start the Vite development server using:

    npm run dev

Vite will display a local development URL, typically:

    http://localhost:5173/

Open this URL in a web browser to verify that the application loads successfully. Once implemented, the VinylVault storefront will display the album catalog and allow navigation between the catalog, album details, and checkout pages.

To stop the development server, press Ctrl + C in the terminal.

### Project Directory Structure

The root directory contains README.md, index.html, vite.config.js, package.json, and package-lock.json for documentation, configuration, and dependency management. The src directory contains App.jsx, main.jsx, and the application's styling files. The src/components directory contains reusable React components, while src/pages contains routed pages for the catalog, album details, and checkout. Application images and other multimedia assets are stored in src/assets, while the provided album dataset is stored in src/data/albums.js.


## 2. React Component Hierarchy & State Flow Architecture
React Router for navigation and reusable React functional components are used in the VinylVault application. App.jsx manages the shared shopping cart state, which is then provided to child components via callback methods and props.

### Component Hierarchy Tree
---text
<BrowserRouter> - src/main.jsx
  State: None
  Props: None
  Events: None

  <App> - src/App.jsx
    State:
      cart [Array] - Stores album items and quantities.
      isCartOpen [Boolean] - Controls cart drawer visibility.
    Props: None
    Callbacks:
      addToCart(album)
      updateQuantity(id, change)
      removeFromCart(id)
      toggleCart()
      clearCart()

    <Navbar> - src/components/Navbar.jsx
      State: None
      Props:
        cartCount [Number]
        onToggleCart [Function]
      Events:
        onToggleCart() - Opens or closes the cart drawer.

    <Routes> - React Router
      State: None
      Props: None
      Events: Route selection based on URL.

      Route: "/" - CatalogPage
        <CatalogPage> - src/pages/CatalogPage.jsx
          State:
            selectedGenre [String] - Tracks the active genre filter.
          Props:
            onAddToCart [Function]
          Events:
            onAddToCart(album)

          <GenreFilterBar> - src/components/GenreFilterBar.jsx
            State: None
            Props:
              selectedGenre [String]
              onGenreChange [Function]
            Events:
              onGenreChange(genre)

          <AlbumGrid> - src/components/AlbumGrid.jsx
            State: None
            Props:
              albums [Array]
              onAddToCart [Function]
            Events: Passes onAddToCart to album cards.

            <AlbumCard> - src/components/AlbumCard.jsx
              State: None
              Props:
                album [Object]
                onAddToCart [Function]
              Events:
                onAddToCart(album)
                Link to /album/:albumId

      Route: "/album/:albumId" - AlbumDetailPage
        <AlbumDetailPage> - src/pages/AlbumDetailPage.jsx
          State: None
          Props:
            onAddToCart [Function]
          Events:
            useParams() - Reads albumId from URL.
            onAddToCart(album)
            Link to catalog.

      Route: "/checkout" - CheckoutPage
        <CheckoutPage> - src/pages/CheckoutPage.jsx
          State:
            formData [Object] - Stores controlled checkout fields.
            orderConfirmed [Boolean] - Tracks successful checkout.
          Props:
            cart [Array]
            onClearCart [Function]
          Events:
            handleInputChange(event)
            handleSubmit(event)
            event.preventDefault()
            onClearCart() after successful validation.
            useNavigate() for client-side navigation.

    <CartDrawer> - src/components/CartDrawer.jsx
      State: None
      Props:
        cart [Array]
        isOpen [Boolean]
        onClose [Function]
        onUpdateQuantity [Function]
        onRemove [Function]
      Events:
        onClose()
        onUpdateQuantity(id, change)
        onRemove(id)
        useNavigate() to /checkout
(```)

### State Flow Explanation
The shared cart array and cart drawer visibility state are owned by the App component using the useState hook in React. Callback functions use immutable React state operations like map(), filter(), and the spread operator to update the cart when an album is added from the catalog or detail page.

The Navbar, CartDrawer, and CheckoutPage components get the changed cart state. The CartDrawer lets users change amounts and remove things, the CheckoutPage shows the order summary, and the Navbar computes and shows the total number of items in the cart.

To manage album filtering, CatalogPage feeds the selectedGenre state to GenreFilterBar. OrderConfirmed and controlled formData are owned by CheckoutPage. The application clears the cart and shows an order confirmation without reloading the site after checkout validation is successful.