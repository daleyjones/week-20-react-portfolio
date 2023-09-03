import Container from "react-bootstrap/Container";

import Header from "./Header";

import Footer from "./Footer";

function layout({pages, onSetPage, children}) {

    return(
        <Container>
        <header pages={pages} onSetPage={onSetPage}/>
        <main>{children}</main>
        <Footer/>
        </Container>
    );
}

export default Layout