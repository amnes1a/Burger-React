import React, {Component, Fragment} from "react";
import Modal from "../components/UI/Modal/Modal";

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error})
            })
        };

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <Fragment>
                    <Modal
                        modalClosed={this.errorConfirmedHandler}
                        show={this.state.error}>
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Fragment>
            )
        }

    }
}

export default WithErrorHandler;