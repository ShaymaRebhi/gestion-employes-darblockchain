import { useLocation, useNavigate, useParams } from "react-router-dom";

// since we are using react-router-dom v6, the support for props.match.params or props.history has been deprecated.
// So we need a wrapper (HOC) that can use new useful hooks.
export const router = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
};
