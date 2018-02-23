import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import Panel from "../../components/Panel";
// import Article from "../../components/Article";
import Footer from "../../components/Footer";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { List } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Home extends Component {

// class News extends Component {
//   state = {
//     article: [],
//     title: "",
//     startyear: "",
//     endyear: ""
//   };

//   componentDidMount() {
//     this.loadArticles();
//   }

//   loadArticlesrs = () => {
//     API.getArticle()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteArticle = id => {
//     API.deleteArticle(id)
//       .then(res => this.loadArticless())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveArticle({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadArticle())
//         .catch(err => console.log(err));
//     }
//   };


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(ReactJS) New York Times Article Scrubber</strong>
              </h1>
              <h2 className="text-center">
                Search for and save articles of interest.
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;

// render() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">
//           <Jumbotron>
//             <h1 className="text-center">
//                   <strong>(ReactJS) New York Times Article Scrubber</strong>
//                </h1 >
//             <h2 className="text-center">
//               Search for and save articles of interest.
//               </h2>
//           </Jumbotron>
//           <form>
//             <Input
//               value={this.state.title}
//               onChange={this.handleInputChange}
//               name="title"
//               placeholder="Title (required)"
//             />
//             <Input
//               value={this.state.startyear}
//               onChange={this.handleInputChange}
//               name="startyear"
//               placeholder="Startyear (required)"
//             />
//               <Input
//               value={this.state.endyear}
//               onChange={this.handleInputChange}
//               name="endyear"
//               placeholder="Endyear (required)"
//             />
//             <FormBtn
//               disabled={!(this.state.title && this.state.year)}
//               onClick={this.handleFormSubmit}
//             >
//               Submit Article
//               </FormBtn>
//           </form>
//         </Col>
        {/* <Col size="md-12>
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/articles/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col> */}
      {/* </Row>
    </Container>
  );
}
} */}

// export default Home;