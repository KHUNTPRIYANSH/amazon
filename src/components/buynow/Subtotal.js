import React from "react";
import { useEffect, useState } from "react";

const Subtotal = ({ iteam }) => {
  return (
    <div className="sub_item">
      <h3>
        Subtotal :
        <strong style={{ fontWeight: "700", color: "#111" }}> ₹10.00</strong>
      </h3>
    </div>
  );
};

export default Subtotal;
