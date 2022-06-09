import {Table} from "react-bootstrap";

function ProjectDetailBewertung(props) {
    return (
        <div>
            <h5>Bewertung</h5>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>NKV</td>
                        <td>{props.activeProjectVariant.nkv}</td>
                    </tr>
                    <tr>
                        <td>Umweltbetroffenheit</td>
                        <td>PLATZHALTER</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ProjectDetailBewertung