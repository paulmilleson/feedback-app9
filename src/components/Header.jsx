import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;

// This is a functional component, which is a function that
// returns JSX. The function takes in a parameter called props.
// The props parameter is an object that contains all the
// properties that are passed to the component. 

// The function
// returns a header element that contains a div element with a
// class of container and an h2 element that displays the text
// property passed to the component. The text property is
// accessed using props.text. 

// The component is exported as the
// default export, so it can be imported into other files.  The
// component is imported into the App component in the App.js
// file. The component is used in the App component to display
// a header with the text "Hello World". The component is
// rendered in the App component and displayed in the browser.
// 
// The component is used to display the header of the
// application. The component is a reusable piece of code that
// can be used in other components. The component is a
// functional component, which is a function that returns JSX.

// The component takes in a parameter called props, which is an
// object that contains all the properties that are passed to
// the component. 
