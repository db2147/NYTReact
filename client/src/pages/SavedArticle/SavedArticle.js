import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn, Form } from "../../components/Form";
// import List/listitem??

class SavedArticle extends Component  {

state = {
    article: [],
    title: "",
    startyear: "",
    endyear: ""
};

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Saved Articles</strong>
                            </h1>
                            <h2 className="text-center">
                                Search for and save articles of interest.
                            </h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <Input
                                value={this.state.startyear}
                                onChange={this.handleInputChange}
                                name="startyear"
                                placeholder="Startyear (required)"
                            />
                            <Input
                                value={this.state.endyear}
                                onChange={this.handleInputChange}
                                name="endyear"
                                placeholder="Endyear (required)"
                            />
                            <button
                                disabled={!this.state.title && !this.state.year}
                                onClick={this.handleFormSubmit}>
                                Submit Article
                            </button>
                            <FormBtn
                                disabled={!this.state.title && !this.state.year}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Article
                            </FormBtn>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

}; // closing tag for SavedArticle



export default SavedArticle;
