import {useLocation} from "react-router-dom";
import {Card} from "semantic-ui-react";


function DetailsEmployee(){
    let { state } = useLocation();
    return(
        <>
        <Card
            image='https://react.semantic-ui.com/images/avatar/large/molly.png'
            header={state.firstName}
            meta={state.occupation}
            description={state.firstName+' '+'is a '+state.age+' years old'+' '+state.occupation+'. Email : '+state.email}

        />
        </>
    )
}
export default DetailsEmployee
