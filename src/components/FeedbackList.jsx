import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default FeedbackList
// This is a functional component that displays a list of feedback items.

// The component takes in a parameter called feedback, which is an array of feedback data.

// The component checks if the feedback array is empty or null. If the feedback array is empty or null, the component returns a paragraph element with the text "No Feedback".

// The component returns a div element with a class of feedback-list 
// that contains a list of feedback items. The feedback items are displayed using the map method.

// The map method iterates over the feedback array and returns a FeedbackItem component for each item in the array.

// The FeedbackItem component is passed the item object as a prop. The item object contains the feedback data.

// The FeedbackItem component displays the rating and text of the feedback item.

// The feedback items are displayed as a list of cards. Each card contains the rating and text of a piece of feedback.

// The feedback items are displayed in the browser as a list of cards.

// The feedback items are rendered in the FeedbackList component and displayed in the browser.

// The component is exported as the default export, so it can be imported into other files.

// The component is imported into the App component in the App.js file.

// The component is used in the App component to display a list of feedback items.

// The feedback items are displayed in the browser as a list of cards.

// The feedback data is imported into the App component and passed to the FeedbackList component as a prop.

// The feedback data is used to populate the feedback items in the FeedbackList component.
