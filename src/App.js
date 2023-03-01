
import './App.css';
import Ads from './components/Ads/Ads';
import Banner from './components/Banner/Banner';
import Com from './components/Com/Com';
import Course from './components/Course/Course';
import CourseVideo from './components/CourseVideo/CourseVideo';
import Designer from './components/Designer/Designer';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Order from './components/Order/Order';


function App() {
  return (
    <div className='div_fixed'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Designer></Designer>
      <Course></Course>
      <CourseVideo></CourseVideo>
      <Com></Com>
      <Ads></Ads>
      <Order></Order>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
