import React, { createContext } from "react";

const ApiHandlerContextDefault = {
  login: true,

  totalPrisons: 10,
  totalUsers:10,
};

const ApiHandlerContext = createContext(ApiHandlerContextDefault);

export default ApiHandlerContext;
