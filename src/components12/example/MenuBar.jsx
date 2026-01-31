//부트 스트랩->Components->Navbars->Scrolling
//로그인시 로그아웃으로 변경되고 email 출력
//pathname에 따라 메뉴 className='active'
//로그인한 경우에만 장바구니 즐겨찾기 메뉴 보이기
//로그아웃 기능
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';

const MenuBar = () => {
    const email = sessionStorage.getItem('email');
    const { pathname } = useLocation();
    const { setConfirm } = useContext(ModalContext);
    const navi = useNavigate();

    const onLogout = () => {
        setConfirm({
            show:true,
            message:'정말로 로그아웃하실래요?',
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
                        {email &&
                            <>
                                <Nav.Link href="/cart" className={pathname==='/cart' && 'active'}>장바구니</Nav.Link>
                                <Nav.Link href="/favorite" className={pathname==='/favorite' && 'active'}>즐겨찾기</Nav.Link>                           
                            </>
                        }
                    </Nav>
                    {email ? 
                        <Nav>
                            <Nav.Link className='active'>{email}</Nav.Link>
                            <Nav.Link herf='#' onClick={onLogout}>로그아웃</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link href="/login">로그인</Nav.Link>
                        </Nav>                    
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MenuBar