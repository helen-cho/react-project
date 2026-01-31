//부트 스트랩->Components->Navbars->Scrolling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MenuBar = () => {
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/">REACT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:'500px'}} navbarScroll>
                        <Nav.Link href="/book">도서검색</Nav.Link>
                        <Nav.Link href="/shop">상품검색</Nav.Link>
                        <Nav.Link href="/post">게시글</Nav.Link>
                        <Nav.Link href="/cart">장바구니</Nav.Link>
                        <Nav.Link href="/favorite">즐겨찾기</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">로그인</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MenuBar