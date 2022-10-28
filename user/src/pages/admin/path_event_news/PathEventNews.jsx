import React from "react";
import { Image, Container } from "react-bootstrap";
import Card from "../../../components/admin/card/Card";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import "./pathEventNews.scss";

const PathEventNews = () => {
  return (
    <>
      <BottomNav name="EVENEMENT & PRESSE" />

<div className="pathEvent">
      <div className="side_image"></div>
      <Container>
      <h2>Ou souhaitez-vous aller?</h2>
        <div>
        <Card
          name="CREER UN NOUVEL UTILISATEUR"
          urlCard="/admin/create_admin"
        />
        <Card name="EVENEMENTS & PRESSE" urlCard="/admin/path_events&news" />
        </div>
      </Container>
      </div>
    </>
  );
};

export default PathEventNews;
