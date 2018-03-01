import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import ArticleListItem from '../../components/ArticleListItem/ArticleListItem';

class ResultsPage extends Component {

     

    componentDidMount() {
    this.loadArticle();
    }

    handleInputChange = event => {
      console.log(this.state);
      const { name, value } = event.target;
      this.setState({
        [name]: value
        });
    };



    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Search Results</strong>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                      <ul className="list-group">
                        {this.props.articles.length > 0 ? this.props.articles.map((article, index) =>
                            <ArticleListItem
                                article={article}
                                key={article._id || index}
                                handleSaveArticle={this.props.handleSaveArticle}
                                handleDeleteSavedArticle={this.props.handleSaveArticle}/>)
                            :
                            this.props.loading ? <h3>Loading Articles...</h3> :
                            <h3>No Articles Found. Try searching for something.</h3>
                        }
                      </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}
     
    
export default ResultsPage;