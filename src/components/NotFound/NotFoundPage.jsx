import React from 'react';
import PageNotFound from '../assets/img/notFound.jpg';
class NotFoundPage extends React.Component {
    render() {
        return <div>
            <img src={PageNotFound} style={{ width: "100%" }} alt='notFound' />
        </div>;
    }
}
export default NotFoundPage;