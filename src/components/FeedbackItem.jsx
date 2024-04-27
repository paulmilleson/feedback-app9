import Card from './shared/Card'

function FeedbackItem({ item }) {
    
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">
                {item.text}
            </div>
            
        </Card>
    )
}

export default FeedbackItem
// This is a functional component that displays a feedback item.

//The component takes in a parameter called item, which is an object that 
//contains the feedback data. 

//The component returns a card element that 
//displays the rating and text of the feedback item. 

//The rating is displayed in 
//a div element with a class of num-display. The text is displayed in a div 
//element with a class of text-display. 

//The feedback item is displayed as a 
//card with the rating and text. 
//The component is exported as the default 
//export, so it can be imported into other files. 

//The component is imported 
//into the FeedbackList component in the FeedbackList.jsx file. 

//The component 
//is used in the FeedbackList component to display a list of feedback items.

//The feedback items are displayed in the browser as a list of cards. 
//Each card 
//contains the rating and text of a piece of feedback. The feedback items are 
//rendered in the FeedbackList component and displayed in the browser. 

