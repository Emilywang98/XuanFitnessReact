/*

Nutrition

*/
import React from "react";
// import { Chrono } from "react-chrono";

// // reactstrap components
import { Card, CardHeader, CardBody, Row, Col, FormGroup, Input,
  Form, } from "reactstrap";

// const timeline = [{
//   title: "May 1940",
//   contentTitle: "Dunkirk",
//   contentText:"Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
//   contentDetailedText: "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
// },];

// <div style={{ width: "500px", height: "950px" }}>
// <chrono
//   scrollable
//   timeline={timeline}
//   mode="VERTICAL"
// />
// </div>

// export { timeline };


function Overview() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h1 className="title">Emily Wang's Overview</h1>
                <p className="category">Sept 16, 2021</p>
              </CardHeader>
              <CardBody>
              <div>
                  <h1><strong>Workouts</strong></h1>
                  {/**************** * WARMUPS **********************/}
                  <h2>Warmup</h2>
                  {/* Warmup 1 */}
                  <Col md="6">
                    <Card className="card-user">
                        <CardBody>
                          <div>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              <h5 className="title">Exercise A</h5>
                            </a>
                            <p className="text-danger"><strong>Squats</strong></p>
                            <p className="description"><strong>3 sets x 20 reps</strong></p>
                            <p className="description"><strong>Status: <span role="img" aria-label="sheep">✅✅🅾️</span></strong></p>
                          </div>
                          <p className="description">
                            <strong> Comments: </strong>
                            <br />
                            Struggled a bit with this. <br />
                          </p>
                        </CardBody>
                    </Card>
                  </Col>

                  {/* Warmup 2 */}
                  <Col md="6">
                    <Card className="card-user">
                        <CardBody>
                          <div>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              <h5 className="title">Exercise B</h5>
                            </a>
                            <p className="text-danger"><strong>Lunges</strong></p>
                            <p className="description"><strong>3 sets x 20 reps</strong></p>
                            <p className="description"><strong>Status: <span role="img" aria-label="sheep">✅✅✅</span></strong></p>
                          </div>
                          <p className="description">
                            <strong> Comments: </strong>
                            <br />
                            Too easy! <br />
                          </p>
                        </CardBody>
                    </Card>
                  </Col>

                  {/**************** WORKOURS **********************/}
                  <h2>Workouts</h2>
                  <Col md="6">
                    <Card className="card-user">
                        <CardBody>
                          <div>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              <h5 className="title">Exercise C</h5>
                            </a>
                            <p className="text-danger"><strong>Mountain Climbers</strong></p>
                            <p className="description"><strong>3 sets x 20 reps</strong></p>
                            <p className="description"><strong>Status: <span role="img" aria-label="sheep">✅🅾️🅾️</span></strong></p>
                          </div>
                          <p className="description">
                            <strong> Comments: </strong>
                            <br />
                            Didn't have enough time to complete the workout. <br />
                          </p>
                        </CardBody>
                    </Card>
                  </Col>

                  {/* Warmup 2 */}
                  <Col md="6">
                    <Card className="card-user">
                        <CardBody>
                          <div>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              <h5 className="title">Exercise D</h5>
                            </a>
                            <p className="text-danger"><strong>Crunches</strong></p>
                            <p className="description"><strong>3 sets x 20 reps</strong></p>
                            <p className="description"><strong>Status: <span role="img" aria-label="sheep">✅✅✅</span></strong></p>
                          </div>
                          <p className="description">
                            <strong> Comments: </strong>
                            <br />
                            Love crunches! <br />
                          </p>
                        </CardBody>
                    </Card>
                  </Col>

 {/**************** HABITS **********************/}
                  <h1><strong>Habits</strong></h1>
                  <Col md="6">
                    <Card className="card-user">
                        <CardBody>
                          <div>
                            {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              <h5 className="title">Exercise C</h5>
                            </a> */}
                             <Row>
                              <Col md="4" xs="4"> 
                                <p className="text-danger"><strong>Water: </strong></p>
                              </Col>
                              <Form>
                              <Col >   
                                  <FormGroup>
                                    <Input
                                      defaultValue=""
                                      // disabled
                                      placeholder="5 cups"
                                      type="text"
                                    />
                                  </FormGroup>
                              </Col> 
                              </Form>
                            </Row>

                            <Row>
                              <Col md="4" xs="4"> 
                                <p className="text-danger"><strong>Sleep: </strong></p>
                              </Col>
                              <Form>
                              <Col >   
                                  <FormGroup>
                                    <Input
                                      defaultValue=""
                                      // disabled
                                      placeholder="5 hours"
                                      type="text"
                                    />
                                  </FormGroup>
                              </Col> 
                              </Form>
                            </Row>

                            <Row>
                              <Col md="4" xs="4"> 
                              <p className="text-danger"><strong>Did you practice DJing today?</strong></p>
                              </Col>
                              <Form>
                              <Col >   
                                  <FormGroup>
                                    <Input
                                      defaultValue=""
                                      // disabled
                                      placeholder="Yes"
                                      type="text"
                                    />
                                  </FormGroup>
                              </Col> 
                              </Form>
                            </Row>

                          </div>
                          <p className="description">
                            <strong> Comments: </strong>
                            <br />
                            I practiced DJing for 2 hours today!. <br />
                          </p>
                        </CardBody>
                    </Card>
                  </Col>

 {/**************** NUTRITION **********************/}
                <h1><strong>Nutrition</strong></h1>
                <h2>Breakfast</h2>
                <Row>
                  <Col md="6">
                    <Card className="card-user1">
                        <CardBody>
                        <div className="image">
                          <img
                            alt="..."
                            src={require("assets/img/damir-bosnjak.jpg").default}
                          />
                        </div>
                        </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-user1">
                        <CardBody>
                        <p className="description">
                            <strong> Comments: </strong>
                            <br />
                            I added bacon for the extra protein you asked for. <br />
                          </p>
                        </CardBody>
                    </Card>
                  </Col>
                </Row>
                <h2>Lunch</h2>
                <Row>
                  <Col md="6">
                    <Card className="card-user1">
                        <CardBody>
                        <div className="image">
                          <img
                            alt="..."
                            src={require("assets/img/damir-bosnjak.jpg").default}
                          />
                        </div>
                        </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-user1">
                        <CardBody>
                        <p className="description">
                            <strong> Comments: </strong>
                            <br />
                            Noodles for Lunch with a ton of veggies! <br />
                          </p>
                        </CardBody>
                    </Card>
                  </Col>
                </Row>
                <h2>Dinner</h2>
                <Row>
                  <Col md="6">
                    <Card className="card-user1">
                        <CardBody>
                        <div className="image">
                          <img
                            alt="..."
                            src={require("assets/img/damir-bosnjak.jpg").default}
                          />
                        </div>
                        </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-user1">
                        <CardBody>
                        <p className="description">
                            <strong> Comments: </strong>
                            <br />
                            Salad for dinner for extra fibre! <br />
                          </p>
                        </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div> 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}


export default Overview;
