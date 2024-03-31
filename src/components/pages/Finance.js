import Container from "react-bootstrap/Container";
import Finve from "../finanzierung/Finve";
import {useState} from "react";
import SwitchButton from "../layout/SwitchButton";

function Finance() {
    const possibleViews = [
        'Finanzierungsvereinbarungen',
        'Haushalt'
    ]
    const [selectView, setSelectView] = useState(possibleViews[0])


    return (
        <Container>
            <div className="mt-5">
                <SwitchButton allowedValues={possibleViews} currentValue={selectView} changeValue={setSelectView}/>
            </div>
            <div className="mt-3">
                {selectView === 'Finanzierungsvereinbarungen' && <Finve/>}
                {selectView === 'Haushalt' && <p>Implementierung Haushalt steht aus</p>}
            </div>

        </Container>
    )
}

export default Finance
