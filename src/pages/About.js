import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";

const About = () =>{
    const [state] = useState({
        heading: 'On us',
        pageHeading: 'The best travel agency since 1987.',
        message: 'The Lets Explore company specializes in providing high-level travel and tourism services. The company has about ten travel experts with rich knowledge and extensive experience in the field of travel and tourism. The team works in professional cooperation at a high level, in order to satisfy the needs of the loyal customers. The company\'s activities are carried out through its offices in Ra\'anana and through the Internet content sites that provide information for each of our destinations in Israel and abroad.'})
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <title>About page</title>
                <meta name='description' content='Lets Explore information page about us' />
            </Helmet>
            <PageContainer data={state}>
                <AboutImage />
            </PageContainer>
        </>
    );
}

export default About;
