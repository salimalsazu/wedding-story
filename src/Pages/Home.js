import useTitle from '../Hook/useTitle';
import Hero from './Hero/Hero';
import Story from './Story/Story';
import Card from './Card/Card'
import HomeService from './HomeService/HomeService';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    //dynamic title 
    useTitle('Home')


    return (
        <div>
            <Hero></Hero>
            <HomeService></HomeService>
            <Story></Story>
            <Card></Card>
            <Testimonial></Testimonial>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;