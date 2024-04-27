import { useState } from "react"
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
        <Header />
        <div className="container"> 
            <FeedbackList feedback={feedback} />
        </div>
    </>
  )
}
export default App;   

// in JSX, only 1 root element can be returned, so we
// could enclose all of our sub-elements in one parent
// element (in this case a div set) - but a code 
// fragment can also be used, (and won't show up in the
// html) consisting of <> and </> !

// If you want to use a class in a component, you can do so
// by using the word: className instead of the word: class
// (which is an illegal word in JSX.)

// and if you want to use for= in an html tag, you can do so
// by using the word htmlFor= instead of the word for=
// (which is an illegal word in JSX.)

//The provided code is written in JavaScript and makes use of the useState hook in React.

//Here's a breakdown of the code:

//The useState is a React hook that allows functional components to have state.

//The const keyword is used to declare a constant variable named feedback.

//The setFeedback is a function that will be used to update the value of feedback.

//The [feedback, setFeedback] is an array destructuring that assigns the initial value of FeedbackData to feedback and the function to update feedback to setFeedback.

//In summary, the code initializes the feedback state variable and provides the initial value from the FeedbackData data source. The setFeedback function can be used later to update the value of feedback.