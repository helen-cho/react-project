//Fragment(프래그먼트)연습 .box>h3 글자색상변경
//------------------------------------------
const Student = ({student}) => {
    const { id, name, dept } = student;
    return (
        <div>
            <h3>학번:{id}</h3>
            <h3>이름:{name}</h3>
            <h3>학과:{dept}</h3>
            <br/>
        </div>
    )
}
export default Student