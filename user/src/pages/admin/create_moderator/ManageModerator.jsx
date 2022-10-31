import React from "react";
import { Container } from "react-bootstrap";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import CardTime from "../../../components/admin/CRUD_components/CardTime";
import CardTimeEdit from "../../../components/admin/CRUD_components/CardTimeEdit";
import "./manageModerator.scss";

const ManageModerator = () => {
  return (
    <>
      <BottomNav name="GESTION DES MODERATEURS" />

      <section className="manage_mod">
        <div className="side_image"></div>
        <Container>
          <CardTime
            url="/admin/create_moderator"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
          <CardTimeEdit 
                      url="/admin/create_moderator"
                      date="_ _ /_ _ / _ _"
                      firstName="_ _ _ _ _ _"
                      lastName="_ _ _ _ _ _"
          />
          <div className="manage_mode_feed"></div>
        </Container>
      </section>
    </>
  );
};

export default ManageModerator;
