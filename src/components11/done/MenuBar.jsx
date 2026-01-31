//1. 로그인시 로그아웃, 이메일 출력, 로그아웃시 로그인
//2. 로그아웃 기능
//3. pathname이 일치하는 경우 메뉴의 className='active'
//-------------------------------------------------------
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';

const MenuBar = () => {
    const email=sessionStorage.getItem('email');
    const { setConfirm } = useContext(ModalContext);
    const { pathname } = useLocation();
    const navi = useNavigate();

    const onLogout = () => {
        setConfirm({
            show:true,
            message:'정말로 로그아웃 하실래요?',
            action:()=>{
                sessionStorage.clear();
                navi('/');
            }
        })
    }
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/">REACT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:'500px'}} navbarScroll>
                        <Nav.Link href="/book" className={pathname==='/book' && 'active'}>도서검색</Nav.Link>
                        <Nav.Link href="/shop" className={pathname==='/shop' && 'active'}>상품검색</Nav.Link>
                        <Nav.Link href="/post" className={pathname==='/post' && 'active'}>게시글</Nav.Link>
                        { email && <>
                            <Nav.Link href="/cart" className={pathname==='/cart' && 'active'}>장바구니</Nav.Link>
                            <Nav.Link href="/favorite" className={pathname==='/favorite' && 'active'}>즐겨찾기</Nav.Link>
                        </>}
                    </Nav>
                    { email ? <>
                        <Nav>
                            <Nav.Link href='#' className='active'>{email}</Nav.Link>
                            <Nav.Link herf='#' onClick={onLogout}>로그아웃</Nav.Link>
                        </Nav>
                    </>:<>
                        <Nav>
                            <Nav.Link href="/login">로그인</Nav.Link>
                        </Nav>
                    </>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MenuBar