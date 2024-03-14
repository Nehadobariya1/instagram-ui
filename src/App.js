import Feed from './Feed.js';
import Contact from './Contact.js';


function App(props) {
  return (
    <div className="App">
      <div style={{backgroundColor:"pink", borderRadius: 20 ,  width: 400 ,marginLeft:"20px",padding:10}}>
      <Contact  img="img.jpg" userName="Sonia leena" location="Dubai UAE" />
      <Feed postImg="img.jpg" likedImg="img.jpg" likedBy="Anuv jain and 306 others" caption="you can never dull my sparkle" />
    {/* <Feed img="img.jpg" userName="Sonia leena" location="Dubai UAE" postImg="img.jpg" likedImg="img.jpg" likedBy="Anuv jain and 306 others" caption="you can never dull my sparkle" /> */}
    </div>
    </div>
  );
}

export default App;
