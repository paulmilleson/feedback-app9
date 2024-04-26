import { useState } from "react"
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {
  const [feedbacks, setFeedbacks] = useState([
    {rating: 7, text: 'This is an example of a feedback FeedbackItem'},
    {rating: 8, text: 'This is an example of a feedback FeedbackItem'},
    {rating: 9, text: 'This is an example of a feedback FeedbackItem'},
    {rating: 10, text: 'This is an example of a feedback FeedbackItem'},
    {rating: 6, text: 'This is an example of a feedback FeedbackItem'},
  ])
  return (
    <>
        <Header />
        <div className="container"> 
            <FeedbackItem />
        </div>
    </>
  )
}
export default App;   

// in JSX, only 1 root element can be returned, so we
// could enclose all of our sub-elements in one parent
// element (in this case a div set) - but a code 
// fragment can also be used, (and won't show up in the
// html) consisting of <></> !

// If you want to use a class in a component, you can do so
// by using the word: className instead of the word: class
// (which is an illegal word in JSX.)

// and if you want to use for= in an html tag, you can do so
// by using the word htmlFor= instead of the word for=
// (which is an illegal word in JSX.)

