import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn, Form } from "../../components/Form";

class Home extends Component {

  state = {
    article: [],
    title: "",
    startyear: "",
    endyear: ""
  };

  componentDidMount() {
    this.loadArticle();
  }

  loadArticle = () => {
    // API.getArticle()
    //   .then(res =>
    //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //   )
    //   .catch(err => console.log(err));
  };

  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticless())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    console.log(this.state);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveArticles({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadArticle())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>New York Times Article Scrubber</strong>
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
}

export default Home;

 