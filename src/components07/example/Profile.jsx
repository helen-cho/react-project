import { useParams } from 'react-router-dom'

const data = {
    hong: { name:'홍길동', description:'고전소설 홍길동전의 주인공' },
    kang: { name:'강감찬', description:'고려시대 현종 때 활약한 문신이자 장군' },
    sung: { name:'성춘향', description:'고전소설 춘향전의 주인공' }
}

const Profile = () => {
    return (
        <div>
            <h5>? 프로필</h5>
            <div>이름:?</div>
            <div>소개:?</div>
        </div>
    )
}
export default Profile