import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";

const Contact = () =>{
    const [state] = useState({
        heading: 'Contact',
        pageHeading: 'Leave us a message in the form',
        message: 'Dear customers, Lets Explore puts customer service first and does everything in its power to give its customers a quick response.\n' +
            '\nThis page is the place for your inquiries on general issues.You are invited to leave your details in the form below or send us an email at the addresses that appear on the customer service page and we will respond as soon as possible.'
     })
       useEffect(() => {
        window.scrollTo(300, 300);
    }, []);
    return (
        <>
            <Helmet>
                <title>Contact page</title>
                <meta name='description' content='Lets Explore contact' />
            </Helmet>
            <PageContainer data={state}>
                <ContactForm />
            </PageContainer>
        </>
    );
}

export default Contact;
